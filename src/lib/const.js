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

const factionInfo = [{ name: "CyberSec",
                    hackReq: 56,
                    server: "CSEC" },
                  { name: "NiteSec",
                    hackReq: 214,
                    server: "avmnite-02h" },
                  { name: "The Black Hand",
                    hackReq: 353,
                    server: "I.I.I.I" },
                  { name: "BitRunners",
                    hackReq: 545,
                    server: "run4theh111z" },
                  { name: "Daedalus",
                    hackReq: 2500,
                    server: "the-cave" },]

let factionDetails = function() { name: ""
                                  type:  ""
                                  hackReq: 0
                                  server: "" }

const hackEXE = [{ fileName: "BruteSSH.exe",
                       command: 'ns.brutessh',
                       unlock: 50,
                       price: 500e3,
                       createTime: 600e3},
                     { fileName: "FTPCrack.exe",
                       command: 'ns.ftpcrack',
                       unlock: 100,
                       price: 1500e3,
                       createTime: 1800e3},
                     { fileName: "relaySMTP.exe",
                       command: 'ns.relaysmtp',
                       unlock: 250,
                       price: 5e6,
                       createTime: 7200e3},
                     { fileName: "HTTPWorm.exe",
                       command: 'ns.httpworm',
                       unlock: 500,
                       price: 30e6,
                       createTime: 14400e3},
                     { fileName: "SQLInject.exe",
                       command: 'ns.sqlinject',
                       unlock: 750,
                       price: 250e6,
                       createTime: 28800e3} ]

const hackTools = [{ fileName: "DeepscanV1..exe",
                     unlock: 75,
                     price: 500e3,
                     createTime: 900e3},
                   { fileName: "DeepscanV2.exe",
                     unlock: 400,
                     price: 25e6,
                     createTime: 7200e3},
                   { fileName: "ServerProfiler.exe",
                     unlock: 75,
                     price: 500e3,
                     createTime: 1800e3},
                   { fileName: "AutoLink.exe",
                     unlock: 25,
                     price: 1e6,
                     createTime: 900e3},
                   { fileName: "Formulas.exe",
                     unlock: 1000,
                     price: 5e9,
                     createTime: 14400e3}]

let programDetails = function() { fileName: ""
                                  command: ''
                                  price: 0
                                  unlock: 0
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
                

export { programs, crimes, factionInfo, hackEXE, hackTools, crimeStats, programDetails, factionDetails, crimeDetails}

