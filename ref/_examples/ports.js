/** @param {NS} ns **/
export async function main(ns) {
    // Will write to port 1, and append to it if there is data on it.
    await ns.writePort(1, "(1) This will be written to port 1.")
    await ns.writePort(1, "(2) This will also be written to port 1, but can only be referenced after the other one has been.")
    await ns.tryWritePort(1, "(3) This will not write because there is data on port 1.")
  
    // Should have gotten (1)
    await ns.readPort(1)
  
    // Should have gotten (2)
    await ns.readPort(1)
  
    // Should have gotten null.
    await ns.readPort(1)
  
    // This should work now.
    await ns.tryWritePort(1, "(4) This should now work because there is no data on port 1.")
  
    // Should have gotten (4)
    await ns.readPort(1)
  }