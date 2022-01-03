/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'

export async function main(ns) {
    ns.disableLog('sleep')
    const nodesWanted = ns.args[0]
    let nodesPurchased = 0

    while (ns.hacknet.numNodes() < nodesWanted) {
        if (ns.getServerMoneyAvailable("home") > (ns.hacknet.getPurchaseNodeCost(1) * .75)){
            ns.hacknet.purchaseNode(1)
            ns.tprint("PURCHASED NODE: " + nodesPurchased)
            ns.run("/bin/hacknet-upgrade.js", 1, nodesPurchased)
            nodesPurchased++
        }
        else {await ns.sleep(60e3)}
    }
}