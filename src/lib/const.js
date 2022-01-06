/* eslint-disable no-label-var */
/* eslint-disable no-unused-labels */
/** @param {NS} ns **/

const programs = ["BruteSSH.exe",
                    "FTPCrack.exe",
                    "relaySMTP.exe",
                    "HTTPWorm.exe",
                    "SQLInject.exe",
                    "DeepscanV1.exe",
                    "DeepscanV2.exe",
                    "ServerProfiler.exe",
                    "AutoLink.exe"]

const crimes = ["Heist", 
                "Grand theft Auto", 
                "Traffick illegal Arms",
                "Bond Forgery",
                "Larceny",
                "Rob store"]

// above are old and need to be worked out

const factions = [{ 'name': "CyberSec",
                    'hackReq': 56,
                    'server': "CSEC" },
                  { 'name': "NiteSec",
                    'hackReq': 214,
                    'server': "avmnite-02h" },
                  { 'name': "The Black Hand",
                    'hackReq': 353,
                    'server': "I.I.I.I" },
                  { 'name': "BitRunners",
                    'hackReq': 545,
                    'server': "run4theh111z" },
                  { 'name': "Daedalus",
                    'hackReq': 2500,
                    'server': "the-cave" },]

let factionDetails = function() { name: ""
                                  type:  ""
                                  hackReq: 0
                                  server: "" }

const hackEXE = [{fileName: "BruteSSH.exe",
                  command: 'ns.brutessh',
                  price: 0,
                  createTime: 0},
                 {fileName: "FTPCrack.exe",
                  command: 'ns.ftpcrack',
                  price: 2e3,
                  createTime: 1},
                 {fileName: "relaySMTP.exe",
                  command: 'ns.relaysmtp',
                  price: 2e3,
                  createTime: 1},
                 {fileName: "HTTPWorm.exe",
                  command: 'ns.httpworm',
                  price: 2e3,
                  createTime: 1},
                 {fileName: "SQLInject.exe",
                  command: 'ns.sqlinject',
                  price: 2e3,
                  createTime: 1} ]

let programDetails = function() { fileName: ""
                                  command: ''
                                  price: 0
                                  createTime: 0 }


// start with Rob Store and go down skipping Homicide and Assassinate unless you need the body count                                  
const crimeStats = [{ name: "Rob Store",
                      karma: 0.5,
                      kills: 0,
                      money: 400000,
                      time: 60000,
                      hackXP: 30,
                      intXP: 0.375 },
                    { name: "Larceny",
                      karma: 1.5,
                      kills: 0,
                      money: 800000,
                      time: 90000,
                      hackXP: 45,
                      intXP: 0.75 },
                    { name: "Bond Forgery",
                      karma: 0.1,
                      kills: 0,
                      money: 4500000,
                      time: 300000,
                      hackXP: 100,
                      intXP: 3 },
                    { name: "Homicide",
                      karma: 3,
                      kills: 1,
                      money: 45000,
                      time: 3000,
                      hackXP: 0,
                      intXP: 0 },
                    { name: "Assassination",
                      karma: 10,
                      kills: 1,
                      money: 12000000,
                      time: 300000,
                      hackXP: 0,
                      intXP: 3.25 },
                    { name: "Heist",
                      karma: 15,
                      kills: 0,
                      money: 120000000,
                      time: 600000,
                      hackXP: 450,
                      intXP: 6.5 }]

let crimeDetails = function() { name: ""
                                karma: 0
                                kills: 0
                                money: 0
                                time: 0
                                hackXP: 0
                                intXP: 0 }
                

export { programs, crimes, factions, hackEXE, crimeStats, programDetails, factionDetails, crimeDetails}

