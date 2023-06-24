<?php
  // Initialiser la session
  session_start();
  // Vérifiez si l'utilisateur est connecté, sinon redirigez-le vers la page de connexion
  if(!isset($_SESSION["username"])){
    header("Location: login.php");
    exit(); 
  }
?>






<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Choix_Scenario</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='stylesheet' type='text/css' href='stylex.css'>
 
</head>
<body>




<?php 
require('config.php');
$username = $_SESSION["username"];
$query = "SELECT username, email FROM `utilisateur` WHERE username='$username'";
$result = mysqli_query($conn, $query);
$rows = mysqli_num_rows($result);
if ($rows == 1){
  $row = mysqli_fetch_assoc($result);
  $email = $row['email'];

  $_SESSION['username'] = $username;
  $_SESSION['email'] = $email;
}
?>  
  <div class="user-info">
    <span class="username"><?php echo "Utilisateur: $username"; ?></span><br>
    <span class="email"><?php echo "Email: $email"; ?></span><br>
        <a href='logout.php'><span>Déconnexion</span></a>

  </div>

<div class="container">
  <img src="logoExperligence.png" style="width: 200px; height: 150px; display: block;margin-left: 45%;">

<div class="content">
   
<h1> Bienvenue sur ExperliMOAMOE ! </h1>
<p>Choisissez un mode de jeu ! </p>
<p>Veuillez choisir un mode de jeu afin de commencer la partie,</p>
<p>Bon jeu et bon apprentissage !</p>
<br>
<br>
<br>
<br>
<br>
<form id="choixForm">
  <ul class="choix_scenario">
    <li>
      <input type="radio" id="MOA" name="choix" value="MOA">
      <label for="MOA">SCENARIO MOA</label>
    </li>
    <br>
    <br>

    <li>
      <input type="radio" id="MOE" name="choix" value="MOE">
      <label for="MOE">SCENARIO MOE</label>
    </li>
    <br>
    <br>

    <li>
        <input type="radio" id="PRINCE2" name="choix" value="PRINCE2">
        <label for="PRINCE2">SCENARIO PRINCE2/PMBOK</label>
      </li>
    <br>
    <br>

    <li>
      <input type="radio" id="NORME" name="choix" value="NORME">
      <label for="NORME">SCENARIO NORME QUALITE</label>
    </li>
  <br>
  <br>

  </ul>

  <button class="btn-continuer", type="submit">Jouer</button>

</form>
</div>
<img src="10ansExperligence.png" style="height: 100px;display: block; margin-left: 750px">
</div>
<script src="Choix_Jeu.js"></script>

</body>
</html>
