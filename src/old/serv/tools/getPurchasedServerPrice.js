/** @param {NS} ns **/
export async function main(ns) {
	var exponent = ns.args[0];
    ns.tprint("RAM: " + 2**exponent + " | Purchase Cost: " + ns.getPurchasedServerCost(2**exponent));
}