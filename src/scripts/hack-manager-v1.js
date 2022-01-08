/** @param {NS} ns **/
import { NS } from '../../NetscriptDefinitions'

export async function main(ns:NS) {
    ns.disableLog('ALL')
    
    // starting target
    let target = "n00dles"
    let c = 0

    while (true) {
        ns.clearLog()
        await ns.sleep(0)
        ns.print("BOTET CONTROLLER CYCLE: "+ c)

        // check the port for a new target
        let update = ns.readPort(2)
        if (update != target) target = update
        ns.print("CURRENT TARGET: "+ target)

        // if security or money is more than 10% off target numbers
            // find out the number of batches of weaken / grow needed to get the target to lowest / highest
                // check if they're still working
            // assign them out to the botnet

        ns.print("STILL PREPARING....")

        // -------

        ns.print("MAIN BATCH PROGRESSING")
        // assign out batches of hwgw to be ran against the target, staggering by cycle count 


        ns.print(" : "+ tH)
        ns.print(" : "+ tW1)
        ns.print(" : "+ tG)
        ns.print(" : "+ tW2)
    }

}