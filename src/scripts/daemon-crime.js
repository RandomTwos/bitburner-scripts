/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'

export async function main(ns) {
    ns.disableLog('ALL')
    
    while (true) {
        await ns.sleep(0)
        
        if (ns.isBusy() == false) { 
            ns.run("/bin/commit-crime.js")
            ns.print("INITIALIZED: COMMITING CRIME")
        }
    }
}
            