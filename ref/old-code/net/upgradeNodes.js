/** @param {NS} ns **/
export async function main(ns) {
	let node = 0;
	while (node < ns.hacknet.numNodes()) {

		let upgradedLevel = false;
		let upgradedRAM = false;
		let upgradedCore = false;
		let notUpgraded = true;

		// Loop through getting Levels, RAM, and Cores
		while (notUpgraded == true) {
			if (upgradedLevel == false) {
				if (ns.getServerMoneyAvailable("home") > ns.hacknet.getLevelUpgradeCost(node)) {
					ns.hacknet.upgradeLevel(node);
				}

				if (ns.hacknet.getNodeStats(node).level == 200) {
					upgradedLevel = true;
				}
			}

			if (upgradedRAM == false) {
				if (ns.getServerMoneyAvailable("home") > ns.hacknet.getRamUpgradeCost(node)) {
					ns.hacknet.upgradeRam(node);
				}

				if (ns.hacknet.getNodeStats(node).ram == 64) {
					upgradedRAM = true;
				}
			}
			if (upgradedCore == false) {
				if (ns.getServerMoneyAvailable("home") > ns.hacknet.getCoreUpgradeCost(node)) {
					ns.hacknet.upgradeCore(node);
				}

				if (ns.hacknet.getNodeStats(node).cores == 16) {
					upgradedCore = true;
				}
			}

			if (upgradedLevel == true && upgradedRAM == true && upgradedCore == true) {
				notUpgraded == false;
			}

			await ns.sleep(6000);
		}

		await ns.sleep(6000);
		node++;
	}
}