<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>02</title>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400..800&family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=SUSE:wght@100..800&display=swap");

        * {
            font-family: "SUSE";
        }
    </style>
</head>

<body>
    <form action="" method="post">
        <label for="">Age: </label>
        <input type="number" name="number">
        <input type="submit">
    </form>

    <br><br><br>

    <form action="" method="get">
        <label for="">Start</label>
        <input type="number" name="startNum">
        <br>
        <label for="">End</label>
        <input type="number" name="endNum">
        <br>
        <input type="submit">
    </form>
</body>

</html>

<?php
$age = $_POST["number"];

if ($age >= 18) {
    echo "You can drive a car <br>";
} else {
    echo "You are not eligible <br>";
}

// Loop in PHP

for ($i = $_GET["startNum"]; $i <= $_GET["endNum"]; ++$i)
    echo "{$i} <br>";
?>