<?php

// Function to sum two numbers
function sum($a, $b) {
    return $a + $b;
}

// Call sum function with different values
echo "Sum Function:\n";
echo "sum(5, 3) = " . sum(5, 3) . "\n";
echo "sum(10, 20) = " . sum(10, 20) . "\n";
echo "sum(-5, 15) = " . sum(-5, 15) . "\n\n";

// Function to compute factorial using recursion
function factorial($n) {
    if ($n <= 1) {
        return 1;
    }
    return $n * factorial($n - 1);
}

// Call factorial function
echo "Factorial Function:\n";
echo "factorial(5) = " . factorial(5) . "\n";
echo "factorial(0) = " . factorial(0) . "\n";
echo "factorial(7) = " . factorial(7) . "\n\n";

// Function to check if a number is prime
function is_prime($n) {
    if ($n < 2) {
        return false;
    }
    if ($n == 2) {
        return true;
    }
    if ($n % 2 == 0) {
        return false;
    }
    for ($i = 3; $i <= sqrt($n); $i += 2) {
        if ($n % $i == 0) {
            return false;
        }
    }
    return true;
}

// Call is_prime function with different numbers
echo "Prime Number Checker:\n";
$test_numbers = [2, 3, 4, 11, 15, 17, 20, 29, 30];
foreach ($test_numbers as $num) {
    $result = is_prime($num) ? "prime" : "not prime";
    echo "$num is $result\n";
}

?>