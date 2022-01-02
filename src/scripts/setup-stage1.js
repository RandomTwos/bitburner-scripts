/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { threadCount } from "../lib/tools-lib"

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
                ns.run("/bin/wait-root.js", 1, target)
                ns.print("\n waitRoot:" + target)
            }
            else if (ns.getServerNumPortsRequired(target) == 0){ ns.run("bin/root.js", 1, target)}

            await ns.sleep(10e3)
        }

        if (ns.hasRootAccess(target)) {
            // copies self-hack and runs it as much as it can be on the target server, for debugging logs the self-hack target and it's returned PID
            await ns.scp("/bin/self-hack.js", "home", target)
            let PID = ns.exec("/bin/self-hack.js", target, threadCount(ns, "/bin/self-hack.js", target), target)
            ns.print("\n self-hack: " + target +" | t" + threads + " | PID: " + PID)
        }
    }

    // hook for build-hacknet
    ns.run("/scripts/build-hacknet.js", 1, 8)

    // hook for starting DAEMON
    ns.run("/scripts/DAEMON.js")
}