import { NS } from '../../NetscriptDefinitions'
export async function main(ns : NS) {
    ns.disableLog('ALL')
    console.log("RUNNING DEAMON ENGINE")

    const portOpeners = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"]

    while (true) {
        
        // - if not joined factions at appropriate hack levels => popup
        for (let f of ns.getPlayer().factions){
            console.log("FACTIONS JOINED: " + f)
        }
        
        // - if not bought port openers at appropriate money || hack levels => toast
        for (let open in portOpeners){ 
            if (ns.fileExists(open, "home") == false) {
                console.log("REMINDER - BUY " + open)
                ns.tprint("REMINDER - BUY " + open)
            }
        }

        // sleep to make loop work
        await ns.sleep(0)
    }
}