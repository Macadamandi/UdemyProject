<?php

$_POST = json_decode(file_get_contents("php://input"), true);

// Ваш код обработки запроса ниже
echo var_dump($_POST);
