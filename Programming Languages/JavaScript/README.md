## ```Q1: What are the JavaScript Data Types?``` 
<details>
<summary>Answer</summary>

There are 7 data types in JS. These are:
1. All 6 premitive types 
2. Object: Complex data type that can store multiple premitive types. 
</details>

## ```Q2: What are primitive types in JS?```
<details>
<summary>Answer</summary>

> Primitive types are smallest and individual types those are unbreakable or can't be derived from any other data types. The 6 primitive types are:
1. undefined 
2. Boolean
3. Number
4. String 
5. BigInt
6. Symbol
7. null
</details>


## ```Q3: Are "undefined" and "null" all the same?```

<details>
<summary>Answer</summary>

> Not actually. Null represents the intentional absence of any object value whereas undefined refers to a variable when it's “value is not assigned”. undefined indicates the absence of a value, while null indicates the absence of an object.

Null is an explicit value and undefined is implicit.

```jsx
/// shows 'undefined' when value is not defined explicitely
let test;
console.log(test); /// result: undefined 
```

**```typeof(null)``` says object, it is a bug in JS**.

</details>


## ```Q4: Describe falsy and truthy values in JS.```

<details>
<summary>Answer</summary>

</details>

## ```Q5: Predict the results```
```javascript
1. console.log(10  + "20"); 
2. console.log(9 - "5");
3. 
3. console.log("Don't" + " " + "like");
4. console.log("abc" - "def"); // NaN
5. console.log("abc" - 10); 
```

<details>
<summary>Answer</summary>

1. Result 1: Number + String = String, the operation called concatenation
2. Result 2: Number - String = Number, **this is a bug in JavaScript**
3. Result : String + String = String, the operation called concatenation

### **```Weird JavaScript```**
In JavaScript, **Any data type - any data type = Number type**

```javascript
const str1 = " " - '5';
const str2 = " " - 5; 
console.log(str1, typeof str1); /// -5, " " - (Number in string) = Number
console.log(str2, typeof str2); /// -5, " " - Number = Number
```
</details>


## ```Q6: Boolean values```
In JavaScript, true represents 1 and false represents 0

```javascript
/// boolean addition, subtraction, value
const test1 = true + true;
const test2 = true + false;
const test3 = true - false;
const test4 = true - true;

const test5 = false + false;
const test6 = false + true;
const test7 = false - true;
const test8 = false - false;
```

<details>
<summary>Answer</summary>

Result: 
```typescript
2 number
1 number
1 number
0 number
0 number
1 number
-1 number
0 number
```
</details>

## ```Q7: What is NaN```

Predict the result
```jsx
let num;
const result = num * 10;
console.log(result);
```

<details>
<summary>Answer</summary>
&nbsp;

The answer is **```NaN```**, because of unexpected mathematical operation between undefined and a number. 

> **NaN** refers to **Not A Number**, produced when expected mathematical operation doesn't evaluates a number as result. Here are the reasons:
1. Invalid mathematical operations.
2. Converting non-numeric strings to numbers.
3. Performing operations where the result is not a real number.

> NaN often treated as an error, to these NaN values one can follow this conditional checking: 

```jsx
let number = NaN;
function test() {
  /// don't execute further if encounter NaN
  if (Number.isNaN(number)) return;

  console.log("I love someone, that is you!!");
}
test();
```
</details>

### **Challenge**
```jsx
{
  let test = 10 * (true + true);
  console.log('result is: ', test);
}
```
<details>
<summary>Challenge result</summary>

```result is: 20```
</details>


## ```Q7: JavaScript Scope```

<details>
<summary>Answer</summary>

**The answer is taken from: https://dev.to/mingt/javascript-introduction-to-scope-function-scope-block-scope-d11**


Scope determines the visibility and accessibility of variables, functions or any other resource within different parts of your source code. 3 types of scopes available in JS: 
1. Block scope
2. Function scope
3. Global scope 

### Global scope

Avoid declaring global variables as much possible, since it can be shared within the source code or any other file associated with it.

</details>

## ```Q8: What is lexical scoping?```

<details>
<summary>Answer</summary>

> A lexical or static scope in JavaScript means that a variable, function or any other resource defined inside a nested function can access resources of outer functions. But the opposite is not true.

> Inner scope has the access to outer scope resources.

> Lexical scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope.

```jsx
function outer() {
    let a = 10;

    function inner() {
        let b = a * 2;

        function innermost() {
            let c = b * 3;

            // console.log("inner most function: d, ", d); /// error, since d is not yet declared in the lexial scope
            console.log("inner most function: c, ", c);
        }

        innermost();
        // console.log(c); /// error, since c is out of lexical scope
    }

    function inner2() {
        console.log(a); /// a is accessible since it is available in the lexical scope
        inner();
    }

    inner2();
    let d = 100;
}

outer();
```
</details>

&nbsp;

## ```Q9: What is closure?```

<details>
<summary>Answer</summary>

> A closures is a special nested function can access and utilize the resources of all three scope chains from the inner function: 
> 1. Access to its own scope: Variables defined within the function. 
> 2. Access to the outer function’s variables.
> 3. Access to the global variables.

```jsx
function newYearMessage() {
  let year = '2024';

  return function message() {   
      let greeting = 'Hello'; 
     return (`${greeting} ${year}`);
  }
}

let happyNewYear = newYearMessage();
console.log(happyNewYear);
```

With ES6 syntax closer looks like this: 
```jsx
const newYearMessage = (year) => message = (greeting) => (`${greeting} ${year}`);

let happyNewYear = newYearMessage(2024);
console.log(happyNewYear('Hello'));
```

Since, we've enclosed or combined a function within another function definition, we say this as closer. 

Usecase of closure: 
1. Data encapsulation.
2. Lessen the declaration of global variables.

</details>