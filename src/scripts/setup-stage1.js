/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { threadCount } from "/lib/lib-BN1.js"

export async function main(ns) {
    ns.disableLog('ALL')

    let servers = ns.scan("home")
    let targets = []

    for (let server of servers){
        // filters scan of servers from home and adds them to targets
        if (server != "home" && server != servers.includes(server) && server != "darkweb"){
            targets.push(server)
        }
    }

    // for debugging, logs the list of targets
    ns.print("\n" + "TARGETS ---- \n" + targets + "\n\n")
    
    for (let target of targets){
        // run waitRoot to get root on the server (waitRoot loops until all port openers have been aquired)
        if (ns.hasRootAccess(target) == false) {
            if (ns.getServerNumPortsRequired(target) > 0) { 
                ns.print("\n PORT OPENERS NEEDED:" + target)
            }
            else if (ns.getServerNumPortsRequired(target) == 0){ ns.run("/bin/root.js", 1, target)}

            await ns.sleep(5e3)
        }

        if (ns.hasRootAccess(target)) {
            // copies self-hack and runs it as much as it can be on the target server, for debugging logs the self-hack target and it's returned PID
            await ns.scp("/bin/hack-self.js", "home", target)
            let threads = threadCount(ns, "/bin/hack-self.js", target)
            let PID = ns.exec("/bin/hack-self.js", target, threads, target)
            ns.print("\n hack-self: " + target +" | t" + threads + " | PID: " + PID)
        }
    }

    // hook for build-hacknet
    ns.run("/scripts/hacknet-build.js", 1, 8)
}