/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
import { buildRoute } from '/lib/tools-lib.js'
import { crimes, programs } from '/lib/const.js'

export async function commitCrime(ns) {
    // commits crime as long as the chance for success is > 75% or robbing a store
    const sucess = .75

    for (let crime of crimes) {
        if (ns.getCrimeChance(crime) > sucess) {
            ns.commitCrime(crime)
            await ns.write("/data/crimeLog.txt", JSON.stringify(ns.getCrimeStats(crime)), "a")
            break
        }
        await ns.sleep(0)
    }
}

export async function purchaseDarkwebPrograms(ns) {
    for (let program of programs) {
        ns.purchaseProgram(program)
    }
}

export function manualBackdoor(ns, target){
    let route = buildRoute(ns, target)
    
    for (let server of route) { ns.connect(server) }
    return ns.installBackdoor(target)
}