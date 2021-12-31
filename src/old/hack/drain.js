/** @param {NS} ns **/
export async function main(ns) {
	ns.disableLog("sleep");
	var targetHack = ns.args[0];

	while (ns.getServerMoneyAvailable(targetHack) > 0) {
		while (ns.getHackingLevel() < ns.getServerMinSecurityLevel(targetHack)){ 
			await ns.sleep(60000);
		}
		await ns.hack(targetHack);
	}
	
	ns.tprint("REPORT: Drained " + targetHack);
}