/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
export async function main(ns) {
    ns.disableLog('ALL')
    ns.print("RUNNING DEAMON ENGINE")

    const portOpeners = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"]

    while (true) {
        
        // - if not joined factions at appropriate hack levels => popup
        for (let f of ns.getPlayer().factions){
            ns.print("FACTIONS JOINED: " + f)
        }
        
        // - if not bought port openers at appropriate money || hack levels => toast
        for (let open of portOpeners){ 
            if (ns.fileExists(open, "home") == false) {
                ns.print("REMINDER - BUY " + open)
            }
        }

        // sleep to make loop work
        await ns.sleep(600e3)
    }
}