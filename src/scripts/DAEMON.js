/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { purchaseDarkwebPrograms } from '/lib/BN4-lib.js'
import { programs } from '/lib/const.js'

export async function main(ns) {
    ns.disableLog('ALL')
    ns.print("RUNNING DAEMON ENGINE")

    let c = 0
//    const portOpeners = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"]

    while (true) {
        ns.print("DAEMON CYCLE: " + ++c)

        // initialize Stage 1
        if (!ns.scriptRunning("/bin/self-hack.js", "n00dles") && ns.getServerMoneyAvailable("home") < 1e6 ) {
            ns.run("/scripts/setup-stage1.js")
            ns.print("INITIALIZED: STAGE 1")
        }

        // initialize Stage 2
        if (!ns.scriptRunning("/bin/self-hack.js", "iron-gym") && ns.getServerMoneyAvailable("home") < 1e9 ) {
            ns.run("/scripts/setup-stage2.js") 
            ns.print("INITIALIZED: STAGE 2")
        }
        if (!ns.scriptRunning("/scripts/daemon-port1.js", "home")) { 
            ns.run("/scripts/daemon-port1.js")
            ns.print("INITIALIZED: PORT 1 DAEMON")
        }

        // commit crimes if below a certian ammount of money
        if (ns.getServerMoneyAvailable("home") < 5e6 && !ns.isBusy()) { 
            ns.run("/bin/commit-crime.js")
            ns.print("INITIALIZED: COMMITING CRIME")
        }

        //do the darkweb
        if (ns.purchaseTor()) {ns.print("INITIALIZED: TOR NODE")}
        if (ns.getServerMoneyAvailable("home") > 5e6) {
            await purchaseDarkwebPrograms(ns)
        }
        
        // reminders at specified hack levels
        let player = ns.getPlayer()

        if (player.hacking > 3000) {
            // if not a memeber of Daedalus
            if (player.factions.includes("Daedalus") == false) {
                ns.print("REMINDER: JOIN DAEDALUS")
            }
            if (ns.fileExists(programs[4], "home") == false){
                ns.print("REMINDER: BUY SQLINJECT")
            }
        } else if (player.hacking > 600) {
            if (player.factions.includes("BitRunners") == false) {
                ns.print("REMINDER: JOIN BITRUNNERS")
            }
            if (ns.fileExists(programs[3], "home") == false){
                ns.print("REMINDER: BUY HTTPWORM")
            }             
        } else if (player.hacking > 400) {
            if (player.factions.includes("The Black Hand") == false) {
                ns.print("REMINDER: JOIN THE BLACK HAND")
            }
            if (ns.fileExists(programs[2], "home") == false){
                ns.print("REMINDER: BUY RELAYSMTP")
            } 
        } else if (player.hacking > 250) {
            if (player.factions.includes("NiteSec") == false) {
                ns.print("REMINDER: JOIN NITESEC")
            }
            if (ns.fileExists(programs[1], "home") == false){
                ns.print("REMINDER: BUY FTPCRACK")
            } 
        } else if (player.hacking > 100) {
            if (player.factions.includes("CyberSec" == false)) {
                ns.print("REMINDER: JOIN CYBERSEC")
            }
            if (ns.fileExists(programs[0], "home") == false){
                ns.print("REMINDER: BUY BRUTESSH")
            } 
        }

        // sleep to make loop work
        await ns.sleep(60e3)
        ns.print("----------")
        ns.tail()
    }
}