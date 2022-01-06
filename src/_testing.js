/** @param {NS} ns **/
//import { NS } from '../NetscriptDefinitions'
import { crimes } from './lib/const'
import { crimeStats } from '/lib/const.js'

export async function main(ns) {
    ns.print("TESTING")
    
    for (let i = 0; i < crimeStats.length; i++) {
        ns.tprint(crimeStats[i].name)
    }

}