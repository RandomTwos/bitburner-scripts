/** @param {NS} ns **/
import {maxThreads, maxNUKE} from "/hack/tools/hack-lib.js"
export async function main(ns) {
	let ram = ns.args[0];

	// Gets the list of servers and removes all of them
	let serverList = ns.getPurchasedServers();
	for (let server in serverList) {
		ns.killall(serverList[server]);
		ns.deleteServer(serverList[server]);
	}

	// Purchases all the server slots at the requested size and spits their name to port4
	let i = 0;
	while (ns.getPurchasedServers().length < ns.getPurchasedServerLimit()) {
		if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
			let name = ns.purchaseServer("serv-"+ ram + "-" + i, ram);
		// here's the port write attempt....
		//	await ns.tryWritePort(4, name);

		// since I'm not getting the ports working atm, here's the manual process
			maxNUKE(ns, "joesguns");
			await ns.scp("/hack/grindXP.js", "home", name);
			ns.exec("/hack/grindXP.js", name, maxThreads(ns, "/hack/grindXP.js", name), "joesguns");
			i++;
		}
		await ns.sleep(6);
	}

	return ram;
}