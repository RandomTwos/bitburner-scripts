/** @param {NS} ns **/
//import { NS } from '../NetscriptDefinitions'
import { bestHackTarget } from "/lib/lib-BN1.js"

export async function main(ns) {
    ns.tprint("TESTING")

    ns.tprint(bestHackTarget(ns))
    
}