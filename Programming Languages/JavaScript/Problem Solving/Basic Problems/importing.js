// to use exported stuffs do require them

const doRequire = require("./exporting.js")

const { knowledge, iterateStuffs, human } = require("./exporting.js")

const newKnowledge = ["Basudevay", "Kutumbaykumb"]
console.log(doRequire.human);

doRequire.iterateStuffs(newKnowledge);

iterateStuffs(knowledge)

