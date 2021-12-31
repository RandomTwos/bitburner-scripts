/** @param {NS} ns **/
export async function main(ns) {
   var targetHack = ns.args[0];

   if (ns.fileExists("BruteSSH.exe", "home")) {
      ns.brutessh(targetHack);
   }
   if (ns.fileExists("FTPCrack.exe", "home")) {
      ns.ftpcrack(targetHack);
   }
   if (ns.fileExists("relaySMTP.exe", "home")) {
      ns.relaysmtp(targetHack);
   }
   if (ns.fileExists("HTTPWorm.exe", "home")) {
      ns.httpworm(targetHack);
   }
   if (ns.fileExists("SQLInject.exe", "home")) {
      ns.sqlinject(targetHack);
   }

   ns.nuke(targetHack);
}