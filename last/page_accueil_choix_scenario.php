
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Choix_Scenario</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='stylesheet' type='text/css' media='screen' href='stylex.css'>
  <script src='main.js'></script>
</head>
<body>
  
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
  </ul>
  <button class="btn-continuer", type="submit">Jouer</button>

</form>
</div>
<script src="Choix_Jeu.js"></script>

</body>
</html>