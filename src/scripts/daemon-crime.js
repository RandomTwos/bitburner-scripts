/** @param {NS} ns **/
//import { NS } from '../../NetscriptDefinitions'

export async function main(ns) {
    ns.disableLog('ALL')
    
    while (true) {
        if (ns.isBusy() == false) { 
            ns.run("/bin/crime-commit.js")
            ns.print("INITIALIZED: COMMITING CRIME")
        }
        await ns.sleep(60e3)
    }
}