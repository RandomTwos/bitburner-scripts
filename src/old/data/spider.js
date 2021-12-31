/** @param {NS} ns **/
export async function main(ns) {
	let list = ns.scan(ns.args[0]);
	let name;

	for (let i in list) {
		name = ns.scan(list[i]);
		for (let n in name) {
			if (name[n] != "home"){
				ns.tprint(name[n]);
			}
		}
	}
}

//  still not getting the details and writing them to a file but this at least gets server name?
//		want to seperate the server detail files by ports needed to unlock, one folder per level