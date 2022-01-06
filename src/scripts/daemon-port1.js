/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { getRoot, threadCount, checkCanSelfHack } from '/lib/lib-BN1.js'

export async function main(ns) {
    ns.disableLog('ALL')
    ns.tail()
    ns.print("\n ----------- \nDAEMON: PORT(1) RUNNING")

    while (true) {
        // ns.print(ns.peek(1))

        if (ns.peek(1) !== "NULL PORT DATA") {
            let host = ns.readPort(1)
            if (getRoot(ns, host)) {
                if (checkCanSelfHack(ns, host)) {
                    await ns.scp("/bin/hack-self.js", "home", host)
                    let threads = threadCount(ns, "/bin/hack-self.js", host)
                    if (threads > 0) {
                        ns.exec("/bin/hack-self.js", host, threads, host)
                        ns.print("HACK-SELF: " + host)
                    }
                }
            }
            else {await ns.tryWritePort(1, host)}
            ns.print("FAILED ROOT: " + host)
        }
        await ns.sleep(30e3)
    }
}