<?php

/* Array */
$fruits = array("Apple", "Orange", "Banana");

// array methods 
array_push($fruits, "Pineapple"); // add new item to the end
// array_pop($fruits); // deletes the last item
$fruits = array_reverse($fruits);

foreach ($fruits as $fruit) {
    echo "{$fruit} <br>";
}

/* Associative array => key value pair */
$capitals = array(
    "USA" => "Washington",
    "Japan" => "Tokyo",
    "South Korea" => "Kyoto",
    "India" => "New Delhi"
);

$capitals["China"] = "Beijing";
$capitals["Bangladesh"] = "Dhaka";

// accessing each element
echo "{$capitals["USA"]} <br>";

foreach ($capitals as $key => $value) {
    echo "Capital of {$key} is {$value} <br>";
}
