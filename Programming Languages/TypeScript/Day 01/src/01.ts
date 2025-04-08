let variable = 53;
variable = 43;
console.log(`Output is: ${variable}`);

let greetings: string = "Welcome to the file";

let playerName: string = "Subodh";
// playerName = 33; // error

function multiply(a: number, b: number): number {
    return a * b;
}

let mixed: any[] = ["Ami", 11, true];

let a: string;
a = "String";
console.log(a);

// object
let obj: {
    name: string;
    age: number;
    adult: boolean;
};

obj = {
    name: "Subodh",
    age: 23,
    adult: true
};

// function type
let myFunc: Function;

myFunc = (a: number, b: number, c?: boolean, d: string = "Hello"): number => {
    console.log(d);
    return a + b;
};
myFunc(10, 11, false, "Hi");

/* Types */
type stringOrNum = string | number;
type usertype = { name: string; age: number };

const userDetails: Function = (id: stringOrNum, user: usertype): void => {
    console.log("nothing");
};

/* Function signature */
let add: (x: number, y: number) => number;
add = (a: number, b: number) => {
    return a + b;
};

console.log(add(10, 2));

type ID = number | string;
type UserInfo = {
    name: string;
    age: number;
};

let employeeDetails: (
    id: number | string,
    userInfo: {
        name: string;
        age: number;
    }
) => void;

employeeDetails = (id: ID, userInfo: UserInfo): void => {
    console.log(
        `Hello ${userInfo.name}. ID: ${id}. Really!! Are you ${userInfo.age} years old?`
    );
};
