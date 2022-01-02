/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'

// requires BN4.1 or higher
export async function main(ns) {
    // commits crime as long as the chance for success is > 75% or robbing a store
    const sucess = .75
    const crimes = ["Rob store", 
                    "Larceny", 
                    "Bond Forgery", 
                    "Traffick illegal Arms", 
                    "Grand theft Auto", 
                    "Heist"]

    for (let crime of crimes) {
        if (ns.getCrimeChance(crime) > sucess) {
            await ns.write("/data/crimeLog.txt", JSON.stringify(ns.getCrimeStats(crime)), "a")
            ns.commitCrime(crime)
        }
        else {ns.commitCrime(crimes[0])}
        await ns.sleep(0)
    }

}