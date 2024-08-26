// Sort an array
{
    const numbers = [2, 1, 10, 5, -1];

    // ascending order sorting
    numbers.sort((a, b) => a - b);

    // descending order sorting
    numbers.sort((a, b) => b - a);

    console.log(numbers);
}

// Reverse an array
{
    const numbers = [2, 1, 10, 5, -1];
    numbers.reverse();
    console.log(numbers);
}

// Find index of an array element from first to last
{
    let numbers = [2, 1, 10, 5, -1];
    let x = numbers.indexOf(10);
    console.log(x);
}

// Find index of an array element from last of the array
{
    let numbers = [2, 5, 1, 10, 5, -1];
    let x = numbers.lastIndexOf(5);
    console.log(x);
}

// check if element is present in the array
{
    let numbers = [2, 1, 10, 5, -1];
    let isPresent = numbers.includes(33);
    if (isPresent)
        console.log(`33 is present in the array`);
    else
        console.log(`33 isn't present in the array`);
}

// Find using find() function: Find the first element that is larger than 18
{
    let numbers = [2, 1, 10, 5, -1, 19];
    // const first = numbers.find(helper);
    const first = numbers.find((value) => value > 18);

    function helper(value) {
        return value > 2;
    }

    let idx = numbers.indexOf(first);
    console.log(first, idx);
}

/* Mathematical methods */

// Find the biggest number
{
    let numbers = [1, 2, 3, 555];
    let biggest = numbers[0];
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i] > biggest) biggest = numbers[i];
    }
    console.log(biggest);

    let biggest2 = Math.max(...numbers);
    console.log(biggest2);
}

{
    let numbers = [1, 2, -88, 3, 555];
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; ++i) {
        // if (numbers[i] < smallest) smallest = numbers[i];
        smallest = (numbers[i] < smallest) ? numbers[i] : smallest;
    }

    console.log(smallest);

    let smallest2 = Math.min(...numbers);
    console.log(smallest2);
}

{
    x = Math.round(5.4);
    y = Math.ceil(5.5);
    z = Math.floor(5.5);
    a = Math.abs(-55);
    b = Math.sqrt(16);
    c = Math.pow(2, 3);
    console.log(x, y, z, a, b, c);
}

// Generate number between 1 to 100
{
    let max = 100, min = 0;
    let formula = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(formula);
}

