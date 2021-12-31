/** @param {NS} ns **/
export async function main(ns) {
	let targetHack = ns.getServer(ns.args[0]);

	while (targetHack.numOpenPortsRequired > targetHack.openPortCount) {
		if (ns.fileExists("BruteSSH.exe", "home") && targetHack.sshPortOpen == false) {
			ns.brutessh(targetHack.hostname);
		}
		if (ns.fileExists("FTPCrack.exe", "home") && targetHack.ftpPortOpen == false) {
			ns.ftpcrack(targetHack.hostname);
		}
		if (ns.fileExists("relaySMTP.exe", "home") && targetHack.smtpPortOpen == false) {
			ns.relaysmtp(targetHack.hostname);
		}
		if (ns.fileExists("HTTPWorm.exe", "home") && targetHack.httpPortOpen == false) {
			ns.httpworm(targetHack.hostname);
		}
		if (ns.fileExists("SQLInject.exe", "home") && targetHack.sqlPortOpen == false) {
			ns.sqlinject(targetHack.hostname);
		}

		ns.print(targetHack.openPortCount + " / " + targetHack.numOpenPortsRequired)
		await ns.sleep(60000);
	}

	ns.nuke(targetHack.hostname);

	ns.writePort(3, targetHack.hostname);
}