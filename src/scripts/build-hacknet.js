import { NS } from '../../NetscriptDefinitions'
export async function main(ns : NS) {
    ns.disableLog('sleep')

    while (ns.hacknet.numNodes() < 12) {
        if (ns.getServerMoneyAvailable("home") > (ns.hacknet.getPurchaseNodeCost(1) * .75)){
            ns.hacknet.purchaseNode(1)
            ns.run("/bin/hacknet-upgrade.js", 1, ns.hacknet.numNodes())
        }
        else {await ns.sleep(60000)}
    }
}