import { NS } from '../../NetscriptDefinitions'
export async function main(ns : NS) {
    ns.disableLog('sleep')
    const hostname = ns.args[0]

    while (ns.hasRootAccess(hostname) == false){
        await ns.sleep(30000)
    }

    
}