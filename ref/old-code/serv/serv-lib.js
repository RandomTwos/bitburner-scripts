/** @param {NS} ns **/
import {maxThreads} from "/hack/tools/hack-lib.js"

export function rServ(ns) {
	// This function iterates through all purchased servers and kill the scripts on them then deletes them
	// No arguments expected
	// Returns the number of purchased servers removed

    // Get names for all existing purchased servers
	var serv = ns.getPurchasedServers();

	// Remove all the servers in the list after killing any scripts
	for (var i = 0; i < serv.length; i++) {
		ns.killall(serv[i]);
		ns.deleteServer(serv[i]);
	}

	return i;
}

export async function pServ(ns, atRAM) {
	// This purchases a server at a given RAM value
	// One arguement expected, the ammount of RAM for the servers to be purchased at
	// Returns purchased server name if purchased, false if above server limit

	if (ns.getPurchasedServerLimit() == 25) {
		return false;
	}

	let needPurchase = true;
	while (needPurchase){
		if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(atRAM)) {
			let serverName = ns.purchaseServer("serv-" + i, atRAM);
			needPurchase = false;
		}
		await ns.sleep(10000);
	}

	return serverName;
}

export async function uServ(ns, scriptArray, targetServer, argument) {
	// This function updates (or copies for the first time) the scripts that are passed to it in the array and executes the first one with the argument passed through
	// Two arguments expected, an array of all the scripts that needs to be copied, and where the scripts are going to be copied to, and the argument to run the first script with
	// Returns true if completed

	for (const s in scriptArray ) {
		await ns.scp(scriptArray[s], "home", targetServer);
	}

	var threads = maxThreads(ns, scriptArray[0], targetServer);
	await ns.exec(scriptArray[0], targetServer, threads, argument);	
	return true;
}