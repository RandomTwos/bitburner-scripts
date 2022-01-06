/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { crimes, crimeStats } from "/lib/const.js"

// requires BN4.1 or higher
export async function main(ns) {
    // commits crime as long as the chance for success is > 75% or robbing a store
    const sucess = .75

    for (let crime of crimes) {
        if (ns.getCrimeChance(crime) > sucess) {
            ns.commitCrime(crime)
            break
        }
        await ns.sleep(1e3)
    }
}