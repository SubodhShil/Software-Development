/* objects */
let user: { name: string; age?: number; readonly id: number } = {
    name: "Subodh Chandra Shil",
    // age: 25,
    id: 211071003
};

console.log(user);

/* enums */
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let dir: Direction = Direction.Left;
console.log(dir);

enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};

function getStatus(statusValue: StatusCode) {
    if (statusValue === StatusCode.NotFound) {
        console.log("Something went wrong, try after some time.");
    }
};

getStatus(404);


/* type aliases */
type CarYear = number
type Car = {
    year: CarYear,
    type: string,
    model: string,
};

const myCar: Car = {
    year: 1998,
    type: "vintage",
    model: "x99"
}

console.log(myCar);

/* Interfaces */
interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 30,
    width: 50
}

console.log(rectangle);


/* Union: Union types are used when a value can be more than a single type. */
type ProductCondition = boolean | string;
function isGoodProduct(goodness: ProductCondition): ProductCondition {
    if (goodness || goodness == 'good') {
        console.log(`The product condition is very good`);
        return true;
    }
    else {
        console.log(`The product condition is not good`);
        return false;
    }
}

console.log(isGoodProduct(true));


/* Functions with return */
function getTime(): number {
    return new Date().getFullYear();
}

console.log(getTime());


function printHello(name: string): void {
    console.log(`Hello ${name}`);
}
printHello('Subodh');


/* Optional and default */
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
console.log(add(10, 22));


/* Rest parameters */
function addMultiple(a: number, b: number, ...rest: number[]): number {
    return a + b + rest.reduce((x, y) => x + y, 0);
}

console.log(`\nAll sum: ${addMultiple(10, 20, 30, 40, 50)}`);

