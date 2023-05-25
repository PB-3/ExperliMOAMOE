<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="stylex.css">
    <title>Tableau de bord</title>
</head>
<body>
    <div class="container">
        <h1 class="hx">Bienvenue sur le tableau de bord</h1>

        <div class="user-data">
            <?php
            // Vérifiez si les informations de connexion existent dans la session
            session_start();
            if (isset($_SESSION['username']) && isset($_SESSION['email'])) {
                // Les informations de connexion existent
                $username = $_SESSION['username'];
                $email = $_SESSION['email'];
            ?>
                <div class="user-info">
                    <span class="username"><?php  echo "User: $username"; ?></span><br>
                    <span class="email"><?php echo "Email:$email"; ?></span><br>
                </div>
            <?php
            } else {
                echo "Aucune donnée trouvée.";
            }
            ?>
        </div>

        <a href="https://www.example.com">Lien vers Example.com</a>
    </div>
</body>
</html>
