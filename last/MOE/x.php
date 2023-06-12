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
    <a href="x.php">Accueil</a>
    <a href="#">Profil</a>
    <a href="#">Paramètres</a>
    <a href="index.html">Déconnexion</a>
  </div>
</div>

    <nav class="navigation">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Paramètres</a></li>
                    <li><a href="index.html">Déconnexion</a></li>
                </ul>
            </nav> 
            <div class="sidebar-left"></div>   <div class="sidebar-right"></div>
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
        <div class="header">
            <h1 class="title">Bienvenue sur ExperliMoaMoe !</h1>
        </div>
        
        <div class="content">
            <img src="78666.jpg" alt="Image" class="image">
        </div>

   
    </div>

   
      
   

</body>
</html>
