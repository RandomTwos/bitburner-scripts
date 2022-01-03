/** @param {NS} ns **/
import { NS } from '../../NetscriptDefinitions'

export async function main(ns:NS) {
    // calculate the number of weaken , grow , weaken to get server primed for managed hacking
    let host = ns.augs[0]

    let weakenAnalyze = ns.weakenAnalyze(1)
    let lvlSec = ns.getServerSecurityLevel(host)
    let minSec = ns.getServerMinSecurityLevel(host)

    ns.tprint(weakenAnalyze + " | " + lvlSec + " | " + minSec)
}