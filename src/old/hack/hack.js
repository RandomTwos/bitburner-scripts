/** @param {NS} ns **/
export async function main(ns) {
    let targetHack = ns.args[0];
    let hostServer = ns.getHostname();

    // Call own.ns to get root on the server if needed
    if (ns.hasRootAccess(targetHack)==false) {
        ns.exec("/hack/own.ns", "home", 1, targetHack);
    };

    let currentRam = ns.getServerMaxRam(hostServer) - ns.getServerUsedRam(hostServer);
    let processNum = Math.floor( currentRam / ns.getScriptRam("/hack/selfHack.js"));
    
    ns.exec("/hack/selfHack.js", hostServer, processNum, targetHack);
}