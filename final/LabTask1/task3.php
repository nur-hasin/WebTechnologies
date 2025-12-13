<?php

echo "<h3>For loop 1 to 20</h3>";
for ($i = 1; $i <= 20; $i++) {
    if ($i > 5) {
        break;
    }
    echo $i . " ";
}

echo "<hr>";

echo "<h3>While loop even numbers 1 to 20</h3>";
$n = 1;
while ($n <= 20) {
    if ($n % 2 == 0) {
        echo $n . " ";
    }
    $n++;
}

echo "<hr>";

$fruits = [
    "apple"  => "red",
    "banana" => "yellow",
    "grape"  => "purple",
    "orange" => "orange"
];

echo "<h3>Fruits and their colors</h3>";
foreach ($fruits as $fruit => $color) {
    echo "The color of $fruit is $color.<br>";
}

?>
