/** @param {NS} ns **/
export async function main(ns) {
	ns.disableLog("sleep");

	let target = ns.getHostname();
	let minSec = ns.getServerMinSecurityLevel(target) + 5;
	let maxMon = ns.getServerMaxMoney(target) * 0.75;

	while (ns.getServerRequiredHackingLevel(ns.getHostname()) > ns.getHackingLevel()) {
		await ns.sleep(60000);
	}

	while (true) {
		if (ns.getServerSecurityLevel(target) > minSec) {
			await ns.weaken(target);
		}
		else if (ns.getServerMoneyAvailable(target) < maxMon) {
			await ns.grow(target);
		}
		else {
			await ns.hack(target);
		}

		await ns.sleep(100);
	}
}