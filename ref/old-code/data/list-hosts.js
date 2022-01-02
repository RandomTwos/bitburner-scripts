/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
//import { spider } from "/lib/tools-lib"

export async function main(ns) {
    let servers = ns.scan("home")

    for (let server of servers) {
        ns.scan(server).forEach(element => { if (!servers.includes(element)) {servers.push(element)} })
    }

    for (let i of servers) {
        if (i == "home" || i == "darkweb" || ns.getPurchasedServers().includes(i)) { servers.pop(i) }
    }

    ns.tprint("SPIDER RETURNS: " + servers.length + " servers \n" + servers)
}