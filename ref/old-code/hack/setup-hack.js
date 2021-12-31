/** @param {NS} ns **/
import {maxHack} from "/hack/tools/hack-lib.js"

export async function main(ns) {
	var targetHack = ns.args[0];
    var moneyThresh = ns.getServerMaxMoney(targetHack) * 0.75;
    var securityThresh = ns.getServerMinSecurityLevel(targetHack) + 5;
    
    while(ns.getServerMoneyAvailable(targetHack) < moneyThresh) {
        if (ns.getServerSecurityLevel(targetHack) > securityThresh) {
            await ns.weaken(targetHack);
        }
        else if(ns.getServerMoneyAvailable(targetHack) < moneyThresh) {
            await ns.grow(targetHack);
        }
    }

    await maxHack(ns, targetHack);
}