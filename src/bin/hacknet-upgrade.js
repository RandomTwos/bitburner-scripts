/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
export async function main(ns) {
    ns.tprint("TODO - got to find a good solution for purchasing upgradse with the cheapest cost first")
    const n = ns.args[0]
    ns.print("NODE: " + n)

    while (ns.hacknet.getNodeStats(n).cores != 16 || ns.hacknet.getNodeStats(n).ram != 64 || ns.hacknet.getNodeStats(n).level != 200){
        ns.print("NODE STILL NEEDS UPGRADES")
        break
    }
}