/** @param {NS} ns **/
import {pServ, uServ} from "/serv/tools/serv-lib.js"

export async function main(ns) {	
	let s = 0;
	while (s < ns.getPurchasedServerLimit()) {
		await uServ(ns, ["/hack/setup-hack.js","/hack/tools/hack-lib.js"], await pServ(ns, 16), "phantasy");
		s++;
	}
}