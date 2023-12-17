<?php
$servername = "localhost";
$username = "root@localhost";
$password = ""; // Deja en blanco si no tienes contraseña
$dbname = "conviertete_oradores";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
$nombre = $_POST['oradorName'];
$apellido = $_POST['oradorLastname'];
$comentario = $_POST['comentOrador'];
$sql = "INSERT INTO oradores (nombre, apellido, comentario) VALUES ('$nombre', '$apellido', '$comentario')";
if ($conn->query($sql) === true) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
error_reporting(E_ALL);
ini_set('display_errors', 1);

?>