import * as NetscriptDefinitions from '/NetscriptDefinitions'

export async function main(ns : NetscriptDefinitions.NS) : Promise<void> {
    ns.tprint(ns.getServer("home"))
}