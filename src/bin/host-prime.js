/** @param {NS} ns **/
import { NS } from '../../NetscriptDefinitions'
import { threadsWeaken, threadCount, usedRAM } from "/lib/lib-BN1.js"

export async function main(ns:NS) {
    // calculate the number of weaken , grow , weaken to get server primed for managed hacking
    let host = ns.args[0]

    let script = "/bin/host-weaken.js"
    let threads = threadsWeaken(ns, host)
    let neededRAM = usedRAM(ns, script, threads)
    let hostRAM = ns.getServerMaxRam(host)
    let maxRAMusage = neededRAM - hostRAM

}

/*

copy script to host

get script ram cost
x = get number of times weaken can be ran on the server
y = get number of times weaken is need to be  ran

if y is greater than x 
    figure out how many more time and run full batches then the remainder


*/