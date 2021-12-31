/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'
export async function main(ns) {
    ns.disableLog('sleep')

    const args = ns.flags([['help', false]])
    const hostname = args._[0]
    
    if(args.help || !hostname) {
        ns.tprint("This script will weaken, grow, hack in an if loop generate money by hacking the server passed to it.")
        ns.tprint(`USAGE: run ${ns.getScriptName()} SERVER_NAME`)
        ns.tprint("Example:")
        ns.tprint(`> run ${ns.getScriptName()} n00dles`)
        return
    }

    while (true) {
        if (ns.getServerSecurityLevel(hostname) > ns.getServerMinSecurityLevel(hostname)) {
            await ns.weaken(hostname)
        } else if (ns.getServerMoneyAvailable(hostname) < ns.getServerMaxMoney(hostname)) {
            await ns.grow(hostname)
        } else { await ns.hack(hostname) }
        await ns.sleep(0)
    }
}