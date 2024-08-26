/* 1 */
function averageOfArray(array) {
    let sum = 0;
    let size = array.length;
    for (let i = 0; i < array.length; ++i) {
        sum += array[i];
    }

    return sum / size;
}

const arr = [1, 2, 3, 4, 5];

// console.log(averageOfArray(arr))


/* 3 */
function mergeTwoSortedArray(arr1, arr2) {
    arrFinal = [];
    for (let i = 0; i < arr1.length; ++i) {
        arrFinal.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; ++i) {
        arrFinal.push(arr2[i]);
    }

    arrFinal.sort();
    // console.log(arrFinal);
    return arrFinal;
}

// input 
const arr1 = [1, 3, 5, 7]
const arr2 = [2, 4, 6, 8]
// console.log(mergeTwoSortedArray(arr1, arr2))


/* 4 */

function is_positive_negative_zero(num) {
    if (num == 0) return "Zero";
    else if (num < 0) return "Negative";
    else return "Positive";
}

const num = 0;

// console.log(is_positive_negative_zero(num));

/* 5 */

function concatenateArray(arr1, arr2) {
    arrFinal = [];
    for (let i = 0; i < arr1.length; ++i) {
        arrFinal.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; ++i) {
        arrFinal.push(arr2[i]);
    }

    return arrFinal;
}

// input 
const arr3 = [1, 3, 5, 7]
const arr4 = [2, 4, 6, 8]
// console.log(concatenateArray(arr1, arr2));


/* 6 */

// algorithm: reverse kora and check kora soman kina
function checkPalindrome(str) {
    const reverseString = str.split("").reverse().join("");

    if (reverseString === str) return "Palindrome";
    else return "Not Palindrome"
}

// console.log(checkPalindrome("abba"));


/* 7 */

function removeDuplicate(arr) {

    const uniqueElements = new Set(arr);
    return uniqueElements;
}

console.log(removeDuplicate([1, 1, 3, 4, 7, 4, 3, 1]));


/* 8 */
function calculator(num1, operator, num2) {

    if (operator === "+") return num1 + num2;
    else if (operator === '-') return num1 - num2;
    else if (operator === '*') return num1 * num2;
    else if (operator === '/') return num1 / num2;
}

console.log(calculator(10, "/", 0));

/* 9 */

function factorial(num) {
    // base case
    if (num == 0 || num == 1) return 1;

    return num * factorial(num - 1)
}

console.log(factorial(5));

/* 10 */

function checkPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= n - 1; ++i) {
        if (n % i === 0) return false;
    }

    return true;
}

function generatePrimes(n) {
    for (let i = 1; i <= n; ++i) {
        if (checkPrime(i) == 1) console.log(i);
    }
}

generatePrimes(100);