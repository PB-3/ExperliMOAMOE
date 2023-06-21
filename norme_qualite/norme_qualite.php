<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="stylex.css">
  <title>Tableau de bord</title>
</head>

<body>
  <div class="container">
    <div class="dropdown">
      <span class="dropbtn">Menu</span>
      <div class="dropdown-content">
        <a href="x.html">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Paramètres</a>
        <a href="index.html">Déconnexion</a>
      </div>
    </div>

    <nav class="navigation">
    </nav>
    <div class="user-data">
      <br>
<?php
                // Vérifiez si les informations de connexion existent dans la session
                session_start();
                if (isset($_SESSION['username']) && isset($_SESSION['email'])) {
                    // Les informations de connexion existent
                    $username = $_SESSION['username'];
                    $email = $_SESSION['email'];
                ?>
                    <div class="user-info">
                        <span class="username"><?php echo "Utilisateur: $username"; ?></span><br>
                        <span class="email"><?php echo "Email: $email"; ?></span><br>
                    </div>
                <?php
                } else {
                    echo "Aucune donnée trouvée.";
                }
                ?>
    </div>
    <br>
    <img src="logoExperligence.png" style="width: 200px; height: 150px;">

    <div class="header">
      <h1 class="title">Bienvenue sur ExperliMoaMoe !</h1>
      <p class="delais_jour"></p>
    </div>


    <div class="content">

      <div class="btns">
        <button id="btn1">Prendre le role</button>
        <button id="btnend">Ne pas prendre le role </button>
      
      </div>
      
      <p id="titlegame">ExperliMoaMoe</p>
      <p class="entrytext">Un auto-entrepreneur a créé seul un site web avec ses connaissances, mais il ne lui convient pas. Il demande donc à une entreprise de le mettre à jour et de l'améliorer.</p>
    

    </div>


  </div>
  <img src="10ansExperligence.png" style=" display: block; margin-left: auto; margin-right: auto;">
  <script src="app.js"></script>
  


</body>

</html>