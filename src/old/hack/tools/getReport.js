/** @param {NS} ns **/
export async function main(ns) {
	let server = ns.getServer(ns.args[0]);

	await ns.write("/data/report/" + server.hostname + ".txt", "hostname:" + server.hostname + ",", "a");
	await ns.write("/data/report/" + server.hostname + ".txt", "maxRam:" + server.maxRam + ",", "a");
	await ns.write("/data/report/" + server.hostname + ".txt", "numOpenPortsRequired:" + server.numOpenPortsRequired + ",", "a");
	await ns.write("/data/report/" + server.hostname + ".txt", "requiredHackingSkill:" + server.requiredHackingSkill + ",", "a");
	await ns.write("/data/report/" + server.hostname + ".txt", "minDifficulty:" + server.minDifficulty + ",", "a");
	await ns.write("/data/report/" + server.hostname + ".txt", "moneyAvaliable:" + server.moneyAvailable + ",", "a");
	await ns.write("/data/report/" + server.hostname + ".txt", "moneyMax:" + server.moneyMax + ",", "a");
	await ns.write("/data/report/" + server.hostname + ".txt", "serverGrowth:" + server.serverGrowth, "a");
}