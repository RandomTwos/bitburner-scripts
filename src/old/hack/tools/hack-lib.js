/** @param {NS} ns **/

export async function maxNUKE(ns, targetHack) {
   // Function to run all the port openers and NUKE the server that you hand off.
   // One argument expected, string for the target of the NUKE
   // Returns true if you already have root, false if NUKE failed, and the number of ports that were opened if it was sucessful

   var portsOpened = 0;

   if (ns.hasRootAccess(targetHack) == true) {
      return true;
   }
   else {
      if (ns.fileExists("BruteSSH.exe", "home")) {
         ns.brutessh(targetHack);
         portsOpened++;
      }
      if (ns.fileExists("FTPCrack.exe", "home")) {
         ns.ftpcrack(targetHack);
         portsOpened++;
      }
      if (ns.fileExists("relaySMTP.exe", "home")) {
         ns.relaysmtp(targetHack);
         portsOpened++;
      }
      if (ns.fileExists("HTTPWorm.exe", "home")) {
         ns.httpworm(targetHack);
         portsOpened++;
      }
      if (ns.fileExists("SQLInject.exe", "home")) {
         ns.sqlinject(targetHack);
         portsOpened++;
      }
      ns.nuke(targetHack);

      //    If able to use terminal commands, un-comment the below lines to also backdoor the server
      //    ns.connect(targetHack);
      //    await ns.installBackdoor();
      //    ns.connect("home");

      if (ns.hasRootAccess(targetHack) == false) {
         return false;
      }
      else {
         return portsOpened;
      }
   }
}

export function maxThreads(ns, script, targetServer) {
   // Function to determine the maxiumum number of threads that can be ran on a server
   // Two arguments expected, the script to be ran and the target server they're going to be run on
   // Returns the number of threads, will return 0 if there is no space to run the script at all on the server

   var threads = 1;
   var scriptRAM = ns.getScriptRam(script);
   var serverMaxRAM = ns.getServerMaxRam(targetServer);
   var serverUsedRAM = ns.getServerUsedRam(targetServer);

   if (scriptRAM > serverMaxRAM) {
      return 0;
   }
   else {
      threads = Math.floor((serverMaxRAM - serverUsedRAM) / scriptRAM);
      return threads;
   }
}

export async function maxRun(ns, script, targetServer, scriptArgs) {
   // Function to copy the script to target server and run script with the passed through arguement the max number of threads
   // Three arguments expected, the script to be copied and executed, the server to copy the script to, and the argument for the script
   // Returns false if maxThreads() returns false, otherwise returns true
   var threads = maxThreads(script, targetServer);

   if (threads = 0) {
      return false;
   }
   else {
      await ns.scp(script, "home", targetServer);
      ns.exec(script, targetServer, threads, scriptArgs);

      return true;
   }
}

export async function maxGrow(ns, targetHack) {
   // Function to keep grow() a target until it reaches the threshold
   // One arguemnt expected, the target of the hack
   // Returns true when grow() loop has completed

   var moneyThresh = ns.getServerMaxMoney(targetHack) * 0.75;

   while (ns.getServerMoneyAvailable(targetHack) < moneyThresh) {
      await ns.weaken(targetHack);
      await ns.grow(targetHack);
   }

   return true;
}

export async function maxWeaken(ns, targetHack) {
   // Function to keep weaken() a target until it reaches the threshold
   // One arguemnt expected, the target of the hack
   // Returns true when weaken() loop has completed

   var securityThresh = ns.getServerMinSecurityLevel(targetHack) + 5;

   while (ns.getServerSecurityLevel(targetHack) > securityThresh) {
      await ns.weaken(targetHack);
   }

   return true;
}

export async function maxHack(ns, targetHack) {
   // Function to hack() after making sure the target is under the weaken and grow threshold, will wait until hacking level is high enough to effect the server
   // One arguemnt expected, the target of the hack
   // Infinite loop, not expected to return anything

   while (ns.getServerRequiredHackingLevel(targetHack) > ns.getHackingLevel()) {
      await ns.sleep(60000);
   }

   while (true) {
      await ns.weaken(targetHack);
      await ns.grow(targetHack);
      await ns.weaken(targetHack);
      await ns.hack(targetHack);
   }
}

export async function spider(ns) {
   const servers = ['home'];

   for (const server of servers)
      ns.scan(server)
         .filter((x) => !servers.includes(x))
         .forEach((x) => servers.push(x));

   return servers;
}