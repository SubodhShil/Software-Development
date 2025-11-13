class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());

/* Generics */

function identity<T>(value: T): T {
    return value;
}

const name = identity("Subodh");
const age = identity(25);
console.log(`His name is ${name} and age is ${age}`);

interface Details<T> {
    name: string,
    age: number,
    fullDetails: T
};

const myself: Details<string> = {
    name: "Subodh",
    age: 25,
    fullDetails: `I am ${name} and ${age} years old`
}
console.log(myself.fullDetails);


/* Optional chaining */
// type User = {
//     name: string,
//     address?: {
//         city: string,
//         zip?: string
//     }
// };

interface User<T> {
    name: T,
    address?: {
        city: T,
        zip?: T
    }
}

const user: User<string> = {
    name: "Subodh",
    address: {
        city: "Dhaka"
    }
};
console.log(user);