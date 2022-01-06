/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'

export async function main(ns) {
    while (ns.getCrimeChance("Rob store") < .75) {
        ns.commitCrime("Shoplifting") 
        await ns.sleep(2e3)
    }
    ns.tprint("NOW ABLE TO ROB STORES")
}