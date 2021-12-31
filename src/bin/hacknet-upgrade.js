import { NS } from '../../NetscriptDefinitions'
export async function main(ns : NS) {
    ns.tprint("TODO - got to find a good solution for purchasing upgradse with the cheapest cost first")
    const n = ns.args[0]
    console.log("NODE: " + n)

    while (ns.hacknet.getNodeStats(n).cores != 16 || ns.hacknet.getNodeStats(n).ram != 64 || ns.hacknet.getNodeStats(n).level != 200){
        console.log("NODE STILL NEEDS UPGRADES")
        break
    }
}