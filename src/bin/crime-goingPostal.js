/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'

// requires BN4.1 or higher
var killCounter = 0

export async function main(ns:NS) {
    ns.disableLog('ALL')
    // counts the number of people murdered, calcs karma from that >:D

    while (ns.break.heart() < 54e3) {
        await ns.sleep(0)

        if (ns.getCrimeChance("Homicide") < .50) ns.commitCrime("Rob Store")
        else {
            ns.clearLog()
            ns.print("KILL COUNT: " + killCounter + " | Score: " + killCounter * 3)
            ns.commitCrime("Homicide")
        }
    }
    ns.tail()
}