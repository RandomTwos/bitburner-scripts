/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { bestHackTarget } from '/lib/lib-BN1.js'
import { programs, factionInfo, hackEXE } from '/lib/const.js'

export async function main(ns) {
    ns.disableLog('ALL')

    ns.tail()
    ns.print("RUNNING DAEMON ENGINE")

    let c = 0

    while (true) {
        ns.print("DAEMON CYCLE: " + ++c)

        // check to see the best hack target
        ns.clearPort(2)
        let bestTarget = bestHackTarget(ns)
        await ns.writePort(2, bestTarget)
        ns.print("BEST TARGET: " + bestTarget)

        // initialize Stage 1
        if (!ns.scriptRunning("/bin/hack-self.js", "n00dles") && ns.getServerMoneyAvailable("home") < 1e6 ) {
            ns.run("/scripts/setup-stage1.js")
            ns.print("INITIALIZED: STAGE 1")
        }

        if (ns.getServerMoneyAvailable("home") > 200e3 && ns.scan("home").includes("darkweb") == false)  {
            ns.run("/bin/darkweb-programs.js")
        }

        // initialize Stage 2
        if (!ns.scriptRunning("/bin/hack-self.js", "iron-gym")) {
            ns.run("/scripts/setup-stage2.js") 
            ns.print("INITIALIZED: STAGE 2")
        }
        if (!ns.scriptRunning("/scripts/daemon-port1.js", "home")) { 
            ns.run("/scripts/daemon-port1.js")
            ns.print("INITIALIZED: PORT 1 DAEMON")
        }

        // commit crimes if below a certian ammount of money
        if (ns.getServerMoneyAvailable("home") < 5e6 && ns.isBusy() == false) { 
            ns.run("/bin/crime-commit.js")
            ns.print("INITIALIZED: COMMITING CRIME")
        }
        
        // reminders at specified hack levels, 5 iterations currently
        let player = ns.getPlayer()

        let i = 0
        while (i < factionInfo.length) {
            await ns.sleep(0)
            ns.print("SUB-CYCLE: " + i)

            if (player.hacking > factionInfo[i].hackReq && player.factions.includes(factionInfo[i].name) == false) {
                ns.print("REMINDER: JOIN " + factionInfo[i].name)
            }

            if (player.hacking > hackEXE[i].unlock && ns.fileExists(hackEXE[i].fileName) == false) {
                ns.print("REMINDER: BUY " + hackEXE[i].fileName)
            }

            i++
        }


        // check for if faction invite from not a city faction is waiting


        // sleep to make loop work
        await ns.sleep(60e3)
        ns.clearLog()
    }
}