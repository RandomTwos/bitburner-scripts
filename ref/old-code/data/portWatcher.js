// portWatcher.js
/** @param {NS} ns **/
export async function main(ns) {
  ns.disableLog('ALL');
  ns.tail();
  while (true) {
    ns.print(ns.readPort(1));
    await ns.sleep(1000);
  }
}