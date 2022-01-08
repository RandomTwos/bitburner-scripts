/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { spider, getRoot, checkCanSelfHack, threadCount } from "/lib/lib-BN1.js"

export async function main(ns) {
    ns.disableLog('ALL')
    ns.clearPort(1)

    // scan through all servers again, attempt root and add servers not able to be rooted to array
    let hosts = spider(ns)

    for (let host of hosts) {

 /*     ns.tprint("    HOST: " + host)
        ns.tprint("    ROOT: " + ns.hasRootAccess(host))
        ns.tprint(" RUNNING: " + ns.scriptRunning("/bin/self-hack.js", host))
        ns.tprint("     CAN: " + checkCanSelfHack(ns, host) + "\n------")
*/
        // can self-hack and is not running already
        if (checkCanSelfHack(ns, host) && !ns.scriptRunning("/bin/hack-self.js", host)) {
            
            // verify root
            let hasRoot = getRoot(ns, host)
            await ns.sleep(0)

            if (hasRoot) {
                   await ns.scp("/bin/hack-self.js", "home", host)
                   ns.exec("/bin/hack-self.js", host, threadCount(ns, "/bin/hack-self.js", host), host)
                   ns.print("HACK-SELF: " + host)
            } else {
                await ns.writePort(1, host)
                ns.print("ROOT FAILED: "+ host)
           }
        }
        await ns.sleep(0)
    }
}