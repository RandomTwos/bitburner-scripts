/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { getRoot, threadCount } from '/lib/tools-lib.js'
export async function main(ns) {
    ns.disableLog('ALL')
    ns.print("RUNNING DEAMON ENGINE")

    const portOpeners = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"]

    while (true) {
        // initialize Stage 1
        if (!ns.scriptRunning("/bin/self-hack.js", "n00dles") && ns.getServerMoneyAvailable("home") < 1e6 ) {ns.run("/script/setup-stage1.js")}

        // initialize Stage 2
        if (!ns.scriptRunning("/bin/self-hack.js", "iron-gym") && ns.getServerMoneyAvailable("home") < 1e9 ) {ns.run("/script/setup-stage2.js")}

        // check port(1) for servers that do not have self-hack on them, are valid targets
        if (ns.peek(1) !== "“NULL PORT DATA”") {
            let host = ns.readPort(1)
            if (getRoot(host)) { 
                await ns.scp("/bin/self-hack.js", "home", host)
                ns.exec("/bin/self-hack.js", host, threadCount(ns, "/bin/self-hack.js", host), host)
                ns.print("SELF-HACK: " + host)
             }
            else {ns.tryWritePort(1, host)}
            ns.print("FAILED ROOT: " + host)
        }


        // reminders at specified hack levels
        /*  switch( player hack level) {
            case hacklevel: if not member of group spit out log reminder

            100 CyberSec, 250, 400, 600, 2500 | for factions
            50 portOpeners[1], 100 portOpeners[2] | for port openeners
        */


        
        // - if not bought port openers at appropriate money || hack levels => toast
        /*  switch( player hack level) {
            case hacklevel: if not member of group spit out log reminder
        */

            /* case, based on hack level || money avaliable
        for (let open of portOpeners){ 
            if (ns.fileExists(open, "home") == false) {
                ns.print("REMINDER - BUY " + open)
            }
        }
        */

        // sleep to make loop work
        await ns.sleep(0)
    }
}