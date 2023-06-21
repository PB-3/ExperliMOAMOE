<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
<?php
require('config.php');
session_start();

if (isset($_POST["envoi"])){
  $username = stripslashes($_REQUEST['username']);
  $username = mysqli_real_escape_string($conn, $username);
  $password = stripslashes($_REQUEST['password']);
  $password = mysqli_real_escape_string($conn, $password);
    $query = "SELECT * FROM `utilisateur` WHERE username='$username' and password='".hash('sha1', $password)."'";
  $result = mysqli_query($conn,$query) or die(mysql_error());
  $rows = mysqli_num_rows($result);
  if($rows==1){
      $_SESSION['username'] = $username;
      header("Location: index.php");
  }else{
    $message = "Le nom d'utilisateur ou le mot de passe est incorrect.";
  }
}
?>
 <div id="container">
    <h1>ExperliMoaMoe</h1>
    <img src="logoExperligence.png" style="width: 200px; height: 150px;">
    <form action="" method="post">
      <p style="margin-right: 10vw;">Nom d'utilisateur</p>
      <input type="text" name="username" placeholder="Nom d'utilisateur" required><br>
      <p style="margin-right: 10vw;">Mot de passe</p>
      <input type="password" name="password" placeholder="Mot de passe" required><br>
      <div class="account">
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Mot de passe oublié ? </a>
      </div>
      <input type="submit" value="Se connecter" name="envoi">
    </form>
  </div>
  <img src="10ansExperligence.png" style="height: 100px; display: block; margin-left: auto; margin-right: auto;">
<?php if (! empty($message)) { ?>
    <p class="errorMessage"><?php echo $message; ?></p>
<?php } ?>

</body>
</html>