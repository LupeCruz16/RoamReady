<?php

    // Database connection settings
    $connString = "mysql:host=localhost; dbname=roam_ready";
    $user = "root";
    $pass = "root";

    // Creating a new PDO instance
    $pdo = new PDO($connString, $user, $pass);

    // Setting error mode for development and debugging
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>
