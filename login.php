<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tableau de bord</title>
</head>
<body>
    <h1>Bienvenue sur le tableau de bord de login</h1>

    <?php
// Paramètres de connexion à la base de données
$serveur = "localhost";
$utilisateur = "pb";
$motdepasse = "Project123!";
$basededonnees = "pb";

// Créer une connexion à la base de données
$connexion = new mysqli($serveur, $utilisateur, $motdepasse, $basededonnees);

// Vérifier si la connexion a échoué
if ($connexion->connect_error) {
    die("Erreur de connexion à la base de données : " . $connexion->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM nom_de_la_table WHERE username = '$username'";
$resultat = $connexion->query($sql);
if ($resultat->num_rows > 0) {
    $utilisateur = $resultat->fetch_assoc();

    // Récupérer le mot de passe de l'utilisateur
    $motdepasse_bdd = $utilisateur['password'];
    echo "$motdepasse_bdd <-mdp ";
    echo"$password <-mdp 2";
    

    // Vérifier le mot de passe
    if ($password == $motdepasse_bdd)
    
{
session_start();

    
    // Récupérer la première ligne de résultat
    $row = $resultat->fetch_assoc();

    // Stocker les valeurs dans les variables de session
    $_SESSION['username'] = $utilisateur['username'];
    $_SESSION['email'] = $utilisateur['email'];

    // Redirigez vers la page "x.php"
    header("Location: x.php");
    exit();

}


}

else {
    // Le mot de passe est incorrect
    echo "Mot de passe incorrect.";

}
// Fermer la connexion à la base de données
$connexion->close();
?>
</body>
</html>
