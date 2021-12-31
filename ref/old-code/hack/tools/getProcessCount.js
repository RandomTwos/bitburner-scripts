/** @param {NS} ns **/
export async function main(ns) {
	var targetServer = ns.args[0];

	var processNum = Math.floor(ns.getServerMaxRam(targetServer) / 2.4);
	
	ns.tprint(processNum);
}