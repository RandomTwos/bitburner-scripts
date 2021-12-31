import { NS } from '../../NetscriptDefinitions'
export async function main(ns : NS) {
    ns.disableLog('sleep')

    let servers = ns.scan("home")
    let targets = []

    
    for (let server of servers){
        // filters scan of servers from home and adds them to targets
        if (server != "home" && server != servers.includes(server) && server != "darkweb"){
            targets.push(server)
        }
    }

    // for debugging, logs the list of targets
    console.log("\n" + "TARGETS ---- \n" + targets + "\n\n")
    
    for (let target of targets){
        // run waitRoot to get root on the server (waitRoot loops until all port openers have been aquired)
        if (ns.hasRootAccess(target) == false) {
            await ns.run("/bin/wait-root.js", 1, target)
            await ns.sleep(20000)

            // for debugging, logs who we've run wiatRoot on
            console.log("\n waitRoot:" + target)
        }

        // copies self-hack and runs it as much as it can be on the target server, for debugging logs the self-hack target and it's returned PID
        await ns.scp("/bin/self-hack.js", "home", target)
        let threads = Math.floor((ns.getServerMaxRam(target) - ns.getServerUsedRam(target)) / ns.getScriptRam("/bin/self-hack/js", "home"))
        console.log("\n self-hack: " + target + " | PID: " + await ns.exec("/bin/self-hack.js", target, threads, target))
    }

    // hook for build-hacknet
    await ns.run("/scripts/build-hacknet.js")
}