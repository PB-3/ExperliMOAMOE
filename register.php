<?php
require('config.php');
if (isset($_REQUEST['username'], $_REQUEST['email'], $_REQUEST['password'])){
  // récupérer le nom d'utilisateur et supprimer les antislashes ajoutés par le formulaire
  $username = stripslashes($_REQUEST['username']);
  $username = mysqli_real_escape_string($conn, $username); 
  $confirm_password = stripslashes($_POST['confirm_password']);
  // récupérer l'email et supprimer les antislashes ajoutés par le formulaire
  $email = stripslashes($_REQUEST['email']);
  $email = mysqli_real_escape_string($conn, $email);
  // récupérer le mot de passe et supprimer les antislashes ajoutés par le formulaire

  $password = stripslashes($_REQUEST['password']);
   if ($password != $confirm_password) {
    echo "Les mots de passe ne correspondent pas.";
    exit();
  }
  $password = mysqli_real_escape_string($conn, $password);
  //requéte SQL + mot de passe crypté
    $query = "INSERT into `utilisateur` (username, email, password)
              VALUES ('$username', '$email', '".hash('sha1', $password)."')";
  // Exécuter la requête sur la base de données
    $res = mysqli_query($conn, $query);

    if($res){
       echo "<div class='sucess'>
             <h3>Vous êtes inscrit avec succès.</h3>
             <p>Cliquez ici pour vous <a href='login.php'>connecter</a></p>
       </div>";
    }
}else{
?>




<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css" />
</head>
<body>
    <img src="logoExperligence.png" style="width: 200px; height: 150px;margin-left:45%;">

<form class="box" action="" method="post">
  <h1 class="box-logo box-title"><a href="https://www.experligence.com/">Experligence.com</a></h1>
  <h1 class="box-title">S'inscrire</h1>
  <input type="text" class="box-input" name="username" placeholder="Nom d'utilisateur" required />
  <input type="text" class="box-input" name="email" placeholder="Email" required />
  <input type="password" class="box-input" name="password" placeholder="Mot de passe" required />
  <input type="password" class="box-input" name="confirm_password" placeholder="Confirmer le mot de passe" required />
  <input type="submit" name="envoi" value="S'inscrire" class="box-button" />
  <p class="box-register">Déjà inscrit? <a href="login.php">Connectez-vous ici</a></p>
</form>
  <img src="10ansExperligence.png" style="height: 100px; display: block; margin-left: auto; margin-right: auto;">

<?php } ?>
</body>
</html>

