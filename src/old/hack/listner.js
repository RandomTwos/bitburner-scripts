/** @param {NS} ns **/
import {maxThreads} from "/hack/tools/hack-lib.js"

export async function main(ns) {
	ns.disableLog("sleep");														// i don't care about sleep log messages

	let port1 = ns.getPortHandle(1);											// this is supposed to be how you initialize ports?
	let port2 = ns.getPortHandle(2);
	let port3 = ns.getPortHandle(3);
	let port4 = ns.getPortHandle(4);

	while (true) {
		// Listen for port(1)
		if (port1.empty() != true) { 											// this is supposed to check and see if the port has data to do something with
			let host = port1.data.shift(); 										// this is supposed to grab that data from the port
			if (ns.hasRootAccess(host)) { 										// if we have root access
				if (host != "home"){ 											// if the host isn't home
					ns.writePort(2, host);										// throw the host into port 2
				}
			}
			else {																// if we don't have root
				ns.run("/hack/waitRoot.js", 1, host);							// run the wiatRoot to wait until we can root and do so
			}
		}

		// Listen for port(2)
		if (port2.empty() != true) { 											// this is supposed to check and see if the port has data to do something with	
			let host = port2.data.shift();										// this is supposed to grab that data from the port
			if (ns.getServerMaxRam > 0 && ns.getServerMoneyAvailable > 0){		// if the target host has ram and money
				ns.run("/hack/builder.js", 128, host);							// runs the builder locally to set up for selfHack
			}
		}

		// Listen for port(3)
		if (port3.empty() != true) { 											// this is supposed to check and see if the port has data to do something with
			let host = port3.data.shift();										// this is supposed to grab that data from the port
			ns.scp("/hack/selfHack.js", "home", host);							// copies the selfHack script to the host
			ns.exec("/hack/selfHack.js", host, maxThreads(host));				// runs the selfHack for all avaliable threads permitted by ram
		}

		// Listen for port(4)
		if (port4.empty() != true) { 											// this is supposed to check and see if the port has data to do something with
			let host = port4.data.shift();										// this is supposed to grab that data from the port
			ns.scp("/hack/managedHack.js", "home", host);						// copies the managedHack script to the host
			ns.exec("/hack/managedHack.js", host);								// runs the managedHack 
		}

		await ns.sleep(600);													// required sleep function for while true loops
	}
}