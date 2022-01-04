/** @param {NS} ns **/
//import type { NS } from "../../NetscriptDefinitions"

export async function main(ns) {
  
  const files = ns.ls("home", ns.args[0])

  if (files.length === 0) { 
    ns.tprintf("ERROR File not found") 
    return
  } 
  for (const file of files) { ns.rm(file, "home") }

  ns.tprintf("SUCCESS Deleted %d files", files.length)
}