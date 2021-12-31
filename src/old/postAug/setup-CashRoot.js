/** @param {NS} ns **/
import { maxNUKE, maxThreads } from "/hack/tools/hack-lib.js"

export async function main(ns) {
	var drainServers = ["n00dles",
			"foodnstuff",
			"sigma-cosmetics",
			"joesguns",
			"nectar-net",
			"harakiri-sushi",
			"hong-fang-tea"]

	// Drains all the money from the start servers
	for (var i = 0; i < drainServers.length; i++) {
		await maxNUKE(ns, drainServers[i]);
		ns.run("/hack/drain.js", 256, drainServers[i]);
		await ns.sleep(60000);
	}

	// Runs the setup to propagate selfHack
	ns.run("/hack/setup-startHack.js");

	// Sets up starting purchasedServers
	ns.run("/serv/buildBotnet.js", 1, 8);

	// Sets up Hacknet 
	ns.run("/net/buyNodes.js");
}