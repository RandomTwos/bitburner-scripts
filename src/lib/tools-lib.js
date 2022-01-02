/** @param {NS} ns **/

export function threadCount(ns, script, target){
    // takes a script and calculates the avaliable RAM and number of threads that can be run

    return Math.floor(ns.getServerMaxRam(target) - ns.getServerUsedRam(target)) / ns.getScriptRam(script, "home")
}

