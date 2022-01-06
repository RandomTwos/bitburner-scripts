/** @param {NS} ns **/
//import { NS } from '../NetscriptDefinitions'
import { programs } from '/lib/const.js'
import { purchaseDarkwebPrograms } from '/lib/lib-BN4.js'

export async function main(ns) {
    let allPurchased = false

    // eslint-disable-next-line no-unmodified-loop-condition
    while (allPurchased == false) {
        await ns.sleep (60e3)

        await purchaseDarkwebPrograms(ns)

        let check = 0
        for (let program of programs){
            if (ns.fileExists(program, "home")){
                check++
            }
        }
        
        if (check == (programs.length + 1)) {allPurchased == true}
        await ns.sleep(10e3)
    }
}