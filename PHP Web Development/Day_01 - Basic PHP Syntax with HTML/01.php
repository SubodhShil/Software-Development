<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01</title>

    <style>
        @import url("https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400..800&family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=SUSE:wght@100..800&display=swap");

        * {
            font-family: "SUSE";
        }
    </style>
</head>

<body>
    <br>

    <form action="index.php" method="post">
        <label for="">Username: </label>
        <input type="text" name="username">
        <br>
        <label for="">Password: </label>
        <input type="password" name="password">
        <input type="submit" value="Log in">
    </form>
</body>

</html>

<?php
echo "Aww, This is a PHP website running in the browser! <br>";
echo "Kawaii <br>";

$name = "Subodh Chandra Shil";
$love = "Nokia";
$multiply = 4 * 12;

echo "His name is {$name} <br>";
echo "I love {$love} <br>";

echo "{$multiply} <br>";
echo "<br><br><br>";

echo "{$_POST["username"]} <br>";
echo "{$_POST["password"]} <br>";
?>