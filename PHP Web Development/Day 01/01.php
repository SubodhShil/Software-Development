<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First PHP</title>
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