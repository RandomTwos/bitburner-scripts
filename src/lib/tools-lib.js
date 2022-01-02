/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'

export function threadCount(ns, script, target){
    // takes a script and calculates the avaliable RAM and number of threads that can be run

    return Math.floor((ns.getServerMaxRam(target) - ns.getServerUsedRam(target)) / ns.getScriptRam(script, "home"))
}

export function spider(ns){
    let servers = ns.scan("home")

    for (let server of servers) {
        ns.scan(server).forEach(element => { if (!servers.includes(element)) {servers.push(element)} })
    }

    for (let i of servers) {
        if (i == "home" || i == "darkweb" || ns.getPurchasedServers().includes(i) == true) { servers.pop(i) }
    }

    return servers
}

export function getRoot(ns, target) {
    // gets root on a target
    // returns true if sucessfull, false if there aren't enough ports opened
    
    if (ns.hasRootAccess(target)) {return true}
    else {
        if (ns.fileExists("BruteSSH.exe", "home"))    {ns.brutessh(target)}
        if (ns.fileExists("FTPCrack.exe", "home"))    {ns.ftpcrack(target)}
        if (ns.fileExists("relaySMTP.exe", "home"))   {ns.relaysmtp(target)}
        if (ns.fileExists("HTTPWorm.exe", "home"))    {ns.httpworm(target)}
        if (ns.fileExists("SQLInject.exe", "home"))   {ns.sqlinject(target)}
    
        let host = ns.getServer(target)
        if (host.openPortCount >= host.numOpenPortsRequired) {
                ns.nuke(target)
                return true
        } else {return false}
    }
}

export function checkCanSelfHack(ns, target){
    if (target == "home" || target == "darkweb" || ns.getPurchasedServers().includes(target) == true || ns.getServerMaxRam(target) == 0 || ns.getServerMoneyAvailable(target) == 0) { return false}
    return true
}

/* export function chooseHackTarget(ns, list){
    // 
}
*/