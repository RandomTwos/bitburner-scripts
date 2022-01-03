/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { spider, getRoot, checkCanSelfHack, threadCount } from "/lib/tools-lib.js"

export async function main(ns) {
    ns.disableLog('ALL')

    // scan through all servers again, attempt root and add servers not able to be rooted to array
    let hosts = spider(ns)

    for (let host of hosts) {

 /*     ns.tprint("    HOST: " + host)
        ns.tprint("    ROOT: " + ns.hasRootAccess(host))
        ns.tprint(" RUNNING: " + ns.scriptRunning("/bin/self-hack.js", host))
        ns.tprint("     CAN: " + checkCanSelfHack(ns, host) + "\n------")
*/
        // can self-hack and is not running already
        if (checkCanSelfHack(ns, host) && !ns.scriptRunning("/bin/self-hack.js", host)) {
            
            // verify root
            let hasRoot = getRoot(ns, host)
            await ns.sleep(0)

            if (hasRoot) {
                   await ns.scp("/bin/self-hack.js", "home", host)
                   ns.exec("/bin/self-hack.js", host, threadCount(ns, "/bin/self-hack.js", host), host)
                   ns.print("SELF-HACK: " + host)
            } else {
                await ns.writePort(1, host)
                ns.print("ROOT FAILED: "+ host)
           }
        }
        await ns.sleep(0)
    }
}