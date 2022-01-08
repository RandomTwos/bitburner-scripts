/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
// import { hackEXE } from "/lib/const.js"

export function threadCount(ns, script, target){
    // takes a script and calculates the avaliable RAM and number of threads that can be run

    return Math.floor((ns.getServerMaxRam(target) - ns.getServerUsedRam(target)) / ns.getScriptRam(script, "home"))
}

export function threadsWeaken(ns, host){
    let host = ns.args[0]

    return (ns.getServerSecurityLevel(host) - ns.getServerMinSecurityLevel(host)) / .05
}

export function usedRAM(ns, script, threads) {
    return ns.getScriptRam(script, "home") * threads
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
//        for (let hack of hackEXE) {
//            if (ns.fileExists(hack.name, "home")) hack.command(target)
//        }

        if (ns.fileExists("BruteSSH.exe", "home"))    {ns.brutessh(target)} 
        if (ns.fileExists("FTPCrack.exe", "home"))    {ns.ftpcrack(target)} 
        if (ns.fileExists("relaySMTP.exe", "home"))   {ns.relaysmtp(target)}    
        if (ns.fileExists("HTTPWorm.exe", "home"))    {ns.httpworm(target)} 
        if (ns.fileExists("SQLInject.exe", "home"))   {ns.sqlinject(target)}    

        try { ns.nuke(target) }
        catch (e) { return false }
/*
        let host = ns.getServer(target)
        if (ns.getServerNumPortsRequired(target) <= host.openPortCount) {
                ns.nuke(target)
                return true
        } else {return false}
*/
    }
    return true
}

export function checkCanSelfHack(ns, target){
    if (target == "home" || target == "darkweb" || ns.getPurchasedServers().includes(target) == true || ns.getServerMaxRam(target) == 0 || ns.getServerMoneyAvailable(target) == 0) { return false}
    return true
}

export function buildRoute(ns, target){
    // builds a list from "home" to the target server
    ns.print(target)

    return route
}

export function purchaseBotnodes(ns, RAM) {
    let num = 0
    while (num < ns.getPurchasedServerLimit()) {
        if (ns.getServerMoneyAvailable('home') > (ns.getPurchasedServerCost(RAM) * 2)) {
            ns.purchaseServer("botnode-" + num, RAM)
            s++
        }
    }
}

export function upgradeBotnode(ns) {
    let list = ns.getPurchasedServers()
    for (let item of list) {
        let RAM = ns.getServerMaxRam(item) * 2
        if (ns.getPurchasedServerCost(RAM) * 2 < ns.getServerMoneyAvailable('home')) {
            ns.deleteServer(item)
            ns.purchaseServer("botnet-" + item.substring(7), RAM)
        }
    }    
}

export function getHackScore(ns, target) {
    // current back of the napkin math | growth * (max money / min security + 1)
    
    return ns.getServerGrowth(target) * (ns.getServerMaxMoney(target) / (ns.getServerMinSecurityLevel(target) + 1))
}

export function bestHackTarget(ns) {
    let best = ["", 0]
    
    for (let target of spider(ns)) {
        if (ns.hasRootAccess(target)) {
            if (best[1] < getHackScore(ns, target)) best[0] = target
        }
    }

    return best[0]
}

/* export function chooseHackTarget(ns, list){
    // 
}
*/