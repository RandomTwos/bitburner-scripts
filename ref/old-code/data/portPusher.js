// portPusher.js
/** @param {NS} ns **/
export async function main(ns) {
  let i = 0;
  while (true) {
    await ns.writePort(1, `hello${i++}`);
    await ns.sleep(1000);
  }
}