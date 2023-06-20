<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tableau de bord</title>
</head>
<body>
    <h1>Bienvenue sur le tableau de bord du dashboard</h1>

    <?php

// Paramètres de connexion à la base de données
$serveur = "localhost";
$utilisateur = "pb2";
$motdepasse = "Project123!";
$basededonnees = "pb";

// Créer une connexion à la base de données
$connexion = new mysqli($serveur, $utilisateur, $motdepasse, $basededonnees);

// Vérifier si la connexion a échoué
if ($connexion->connect_error) {
    die("Erreur de connexion à la base de données : " . $connexion->connect_error);
}

// Récupérer les données du formulaire
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$age=$_POST['age'];
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$telephone=$_POST['telephone'];
$genre=$_POST=['genre'];
// Préparer la requête SQL pour insérer les données
$sql = "INSERT INTO utilisateur (username, password, email) VALUES ('$username', '$password', '$email')";

// Exécuter la requête SQL
if ($connexion->query($sql) === TRUE) {
    echo "Enregistrement des données réussi";
    header("Location: x.php");
    exit();

} else {
    echo "Erreur lors de l'enregistrement des données :\n " . $connexion->error;
}






// Fermer la connexion à la base de données
$connexion->close();


?>

</body>
</html>
