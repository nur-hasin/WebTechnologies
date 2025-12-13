<?php
$name    = "Alice";      
$age     = 21;           
$height  = 5.6;          
$isStudent = true;       

$a = 10;
$b = 3;
$x = 7.5;
$y = 2.5;

echo "Addition (int): " . ($a + $b) . "<br>";
echo "Subtraction (int): " . ($a - $b) . "<br>";
echo "Multiplication (int): " . ($a * $b) . "<br>";
echo "Division (int): " . ($a / $b) . "<br><br>";

echo "Addition (float): " . ($x + $y) . "<br>";
echo "Subtraction (float): " . ($x - $y) . "<br>";
echo "Multiplication (float): " . ($x * $y) . "<br>";
echo "Division (float): " . ($x / $y) . "<br><br>";

$n1 = 5;
$n2 = 8;
$sum = $n1 + $n2;

echo "Sum using echo: " . $sum . "<br>";
print "Sum using print: " . $sum . "<br><br>";

echo "<h3>var_dump of variables</h3>";
var_dump($name);
echo "<br>";
var_dump($age);
echo "<br>";
var_dump($height);
echo "<br>";
var_dump($isStudent);
echo "<br>";
var_dump($a, $b, $x, $y, $n1, $n2, $sum);
?>
