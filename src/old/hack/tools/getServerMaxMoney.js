/** @param {NS} ns **/
export async function main(ns) {
	let check = ns.args[0];
    ns.tprint("Server: " + check + " | Max Money: " + ns.getServerMaxMoney(check));
}