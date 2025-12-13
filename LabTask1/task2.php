<?php
// Set example values
$temperature = 18;  // temperature in Celsius
$day = 3;           // 1 = Monday, 2 = Tuesday, ..., 7 = Sunday

// Validate inputs
if (!is_numeric($temperature)) {
    echo "Invalid temperature value.<br>";
    exit;
}

if (!is_numeric($day) || $day < 1 || $day > 7) {
    echo "Invalid day value. Use numbers 1-7.<br>";
    exit;
}

// If-else for temperature
if ($temperature < 10) {
    echo "It's cold.<br>";
} elseif ($temperature >= 10 && $temperature <= 25) {
    echo "It's warm.<br>";
} else {
    echo "It's hot.<br>";
}

// Switch-case for day of week
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
