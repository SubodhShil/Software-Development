function greet(name: string): string {
    return `Hello ${name}`;
}

const message: string = greet("Subodh");
console.log(message);

let isGood: boolean = false

if (!isGood) {
    console.log(`This is not good`);
}
else {
    console.log(`This is good`);
}


let age: number = 25;
let personDescription: string = `Subodh is ${age} years old`;
console.log(personDescription);


let scores: number[] = [120, 300, 50];
for (let score of scores) {
    console.log(score);
}

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));


const names: string[] = ["Subodh", "Antu"];
names.push("New Person");
for (let name of names) {
    console.log(name);
}

const specialNames: readonly string[] = ["Subodh", "Porimoni"];
// specialNames.push("Santu"); // can't push it's readonly 

const readonlyTuple: readonly [number, boolean, string] = [5, true, "string"]; 
console.log(readonlyTuple); 

/* Destructuring */
const graph: [number, number] = [123.2, 23];
const [x, y] = graph;
console.log(x, y); 

