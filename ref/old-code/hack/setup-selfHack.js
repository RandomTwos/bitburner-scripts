/** @param {NS} ns **/
import {maxThreads, ignoreHost} from "/hack/tools/hack-lib.js"
export async function main(ns) {
	const servers = ns.scan("home");

	for (const target of servers) {
		if (target != "home" && target != "darkweb") {
			await ns.exec("/hack/waitRoot.js", "home", 1, target);
			await ns.scp("/hack/selfHack.js", "home", target);
			await ns.exec("/hack/selfHack.js", target, maxThreads(ns, "/hack/selfHack.js", target), target);
		}
	}
}