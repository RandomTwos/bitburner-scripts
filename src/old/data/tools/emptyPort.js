/** @param {NS} ns **/
export async function main(ns) {
	let port = ns.getPortHandle(ns.args[0]);
	ns.tprint(port.data);
}