/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'

export async function main(ns) {
    const target = ns.args[0]
    let p = 0

    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target)
        p++
    }
    if (ns.fileExists("FTPCrack.exe", "home")) {
        ns.ftpcrack(target)
        p++
    }
    if (ns.fileExists("relaySMTP.exe", "home")) {
        ns.relaysmtp(target)
        p++
    }
    if (ns.fileExists("HTTPWorm.exe", "home")) {
        ns.httpworm(target)
        p++
    }
    if (ns.fileExists("SQLInject.exe", "home")) {
        ns.sqlinject(target) 
        p++
    }

    if (ns.getServerNumPortsRequired(target) <= p) {ns.nuke(target)}
    else {ns.tprint("NOT ENOUGH PORTS OPENED")}
}