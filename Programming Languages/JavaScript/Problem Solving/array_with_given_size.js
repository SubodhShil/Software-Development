// Your task is to create an array with a given size where all array element should contain a specific value.
{
    console.log("Result 1");
    const size = 10;
    const array = new Array(size).fill(0);
    console.log(array);
}

// Now the values should be same as the index of it's element.
{
    console.log("\nResult 2");
    const size = 5;
    let i = 0;
    let array = Array.from({ length: size }, (_, i) => i);
    console.log(array);
}

// copy an array element to a new array
{
    console.log("\nResult 3");
    const arr1 = [10, 20, 30, 40];
    const arr2 = Array.from(arr1);
    console.log(arr2);
}

// now two fold the values you're copying
{
    console.log("\nResult 4");
    const arr1 = [10, 20, 30, 40];
    const arr2 = Array.from(arr1, (x) => x * 2);
    console.log(arr2);
}
