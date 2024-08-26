// executes continuously 
// setInterval(() => console.log("Hey folks"), 1000);

// execute once
// setTimeout(() => console.log("Hey good fellas"), 2000);

/* exporting cool things */

// object 
const human = {
    "age": "unknown",
    "heart": true,
    "birthday": undefined,
    "plans": null,
    "spirituality": "trying harder"
}

const knowledge = ["Karma", "hits", "back"]

const iterateStuffs = (ele) => {
    ele.forEach((item) => console.log(item));
}

module.exports = {
    human, knowledge, iterateStuffs
}