<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>02</title>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400..800&family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=SUSE:wght@100..800&display=swap");

        * {
            font-family: "SUSE";
        }
    </style>
</head>

<body>
    <form action="" method="get">
        <label for="">Enter names: </label>
        <input type="text" name="person_name">
        <input type="submit">
    </form>
</body>

</html>

<?php
$current_person = $_GET["person_name"];
$all_persons = array("Rishab", "Kanti", "Antu", "Raj");
array_push($all_persons, $current_person);

foreach ($all_persons as $person) {
    echo "{$person} <br>";
}
?>