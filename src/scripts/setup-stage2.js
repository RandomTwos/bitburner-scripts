/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { spider, getRoot, checkCanSelfHack } from "/lib/tools-lib.js"

export async function main(ns) {
    ns.disableLog('ALL')

    // scan through all servers again, attempt root and add servers not able to be rooted to array
    let hosts = spider(ns)
    let notRoot = []
    for (let host in hosts) {

        // if we're not root or the self-hack isn't running
        if (!ns.hasRootAccess(host) || !ns.scriptRunning("/bin/self-hack.js", host)) {
            
            let hasRoot = getRoot(ns, host)
            await ns.sleep(10e3)

            if (hasRoot) {
                if (checkCanSelfHack(host)) {
                    await ns.scp("/bin/self-hack.js", "home", host)
                    ns.exec("/bin/self-hack.js", host, threadCount(ns, "/bin/self-hack.js", host), host)
                    ns.print("SELF-HACK: " + host)
                }
            } else {
                notRoot.push(host)
                ns.print("ROOT FAILED: "+ host)
            }
        }
    }

    ns.print("\n\ntesting / ALL ROOT FAILURES: " + notRoot)
 
}