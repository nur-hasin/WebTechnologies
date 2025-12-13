<?php

$temperature = 18;  
$day = 3;          

if (!is_numeric($temperature)) {
    echo "Invalid temperature value.<br>";
    exit;
}

if (!is_numeric($day) || $day < 1 || $day > 7) {
    echo "Invalid day value. Use numbers 1-7.<br>";
    exit;
}

if ($temperature < 10) {
    echo "It's cold.<br>";
} elseif ($temperature >= 10 && $temperature <= 25) {
    echo "It's warm.<br>";
} else {
    echo "It's hot.<br>";
}

switch ($day) {
    case 1:
        echo "Monday<br>";
        break;
    case 2:
        echo "Tuesday<br>";
        break;
    case 3:
        echo "Wednesday<br>";
        break;
    case 4:
        echo "Thursday<br>";
        break;
    case 5:
        echo "Friday<br>";
        break;
    case 6:
        echo "Saturday<br>";
        break;
    case 7:
        echo "Sunday<br>";
        break;
    default:
        echo "Unknown day<br>";
        break;
}

?>
