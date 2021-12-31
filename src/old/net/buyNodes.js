/** @param {NS} ns **/
export async function main(ns) {
	ns.disableLog('sleep');

	// Buy all the nodes I want
	while (ns.hacknet.numNodes() < 8){
		if (ns.getServerMoneyAvailable("home") > ns.hacknet.getPurchaseNodeCost()){
			ns.hacknet.purchaseNode();
		}

		await ns.sleep(60000);
	}

	ns.spawn("/net/upgradeNodes.js");
}