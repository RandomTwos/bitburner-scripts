/** @param {NS} ns **/
export async function main(ns) {
    var targetHack = ns.args[0];
    var moneyThresh = ns.getServerMaxMoney(targetHack) * 0.75;
    var securityThresh = ns.getServerMinSecurityLevel(targetHack) + 5;

    while (ns.getServerRequiredHackingLevel(ns.getHostname()) > ns.getHackingLevel()) {
        await ns.sleep(60000);
    }

     while(true) {
        if (ns.getServerSecurityLevel(targetHack) > securityThresh) {
            await ns.weaken(targetHack);
        } else if (ns.getServerMoneyAvailable(targetHack) < moneyThresh) {
            await ns.grow(targetHack);
        } else {
            await ns.hack(targetHack);
        }
    }
}