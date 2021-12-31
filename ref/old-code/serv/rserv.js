/** @param {NS} ns **/
export async function main(ns) {
	var serv = ns.getPurchasedServers();

	// Remove all the servers in the list after killing any scripts
	for (var i = 0; i < serv.length; i++) {
		ns.killall(serv[i]);
		ns.deleteServer(serv[i]);
	}
	ns.tprint("RSERV COMPLETE");
}