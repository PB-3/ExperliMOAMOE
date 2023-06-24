<!DOCTYPE html>
<html>
<head>
  <title>Quiz MOA</title>
  <link rel="stylesheet" href="quizMOA.css">
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
                         <span class="email"><?php echo "Score: "; ?></span><br>
                    </div>
                <?php
                } else {
                    echo "Aucune donnée trouvée.";
                }
// Create a database connection
$conn = new mysqli('localhost', 'pb', 'Project123!', 'pb');

// Check the database connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve the value of score_moa from the database
$username = $_SESSION['username'];
$stmt = $conn->prepare("SELECT score_moa FROM utilisateur WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($score_moa);
$stmt->fetch();
$stmt->close();

// Check if a value exists for score_moa
if ($score_moa !== null) {
   echo "<script>alert('Le score moa existe déjà.'); window.location.href='../index.php';</script>";
} else {
  if (isset($_POST['score'])) {
    $score = $_POST['score'];

    // Prepare the SQL statement to insert the score into the database
    $stmt = $conn->prepare("UPDATE utilisateur SET score_moa = ? WHERE username = ?");
    $stmt->bind_param("is", $score, $username);  // Assuming the score is an integer and username is a string
    $stmt->execute();

    // Check if the score was inserted successfully
    if ($stmt->affected_rows > 0) {
      echo "<script>alert('Score inséré avec succès!');</script>";
    } else {
      echo "<script>alert('Erreur lors de l'insertion du score.');</script>";
    }

    $stmt->close();
  } else {
    echo "";
  }
}

$conn->close();


?>
  <h1>Quiz MOA</h1>
  <div id="global">
  <div class="quizzdiv">
  <form id="quizz">
  <div class="question" id="q1">
    <p>1. Qu'est-ce que signifie l'acronyme MOA ?</p>
    <input type="radio" name="q1" value="a" > a) Maitrise d'Ouvrage<br>
    <input type="radio" name="q1" value="b" > b) Maitrise d'Oeuvre<br>
    <input type="radio" name="q1" value="c" > c) Méthode d'Organisation Agile<br>
    <input type="radio" name="q1" value="d" > d) Mise en Oeuvre Applicative<br>
  </div>
  
  <div class="question"id="q2">
    <p>2. Quelle est la principale responsabilité de la MOA ?</p>
    <input type="radio" name="q2" value="a" > a) Développer les applications<br>
    <input type="radio" name="q2" value="b" > b) Analyser les besoins des utilisateurs<br>
    <input type="radio" name="q2" value="c" > c) Assurer la maintenance des systèmes<br>
    <input type="radio" name="q2" value="d" > d) Gérer les ressources matérielles<br>
  </div>
  
  <div class="question" id="q3">
    <p>3. Quelle est la différence entre la MOA et la MOE ?</p>
    <input type="radio" name="q3" value="a" > a) La MOA est responsable de la conception, la MOE de la réalisation<br>
    <input type="radio" name="q3" value="b" > b) La MOA est côté client, la MOE côté prestataire<br>
    <input type="radio" name="q3" value="c" > c) La MOA est responsable du budget, la MOE de la qualité<br>
    <input type="radio" name="q3" value="d" > d) Il n'y a pas de différence, ce sont des acronymes interchangeables<br>
  </div>
  
  <div class="question" id="q4">
    <p>4. Quelles sont les étapes principales du cycle de vie d'un projet MOA ?</p>
    <input type="radio" name="q4" value="a"> a) Analyse, conception, développement, test, déploiement<br>
    <input type="radio" name="q4" value="b"> b) Planification, exécution, contrôle, clôture<br>
    <input type="radio" name="q4" value="c"> c) Identification des besoins, spécification des exigences, validation, livraison<br>
    <input type="radio" name="q4" value="d"> d) Initialisation, planification, exécution, clôture<br>
  </div>
  
  <div class="question"id="q5">
    <p>5. Quel est le rôle du chef de projet MOA ?</p>
    <input type="radio" name="q5" value="a"> a) Assurer la réalisation des tâches techniques<br>
    <input type="radio" name="q5" value="b"> b) Coordonner les différents acteurs du projet<br>
    <input type="radio" name="q5" value="c"> c) Programmer les fonctionnalités<br>
    <input type="radio" name="q5" value="d"> d) Assurer la maintenance des systèmes<br>
  </div>
  
  <div class="question" id="q6">
    <p>6. Quels sont les livrables attendus dans la phase d'analyse de la méthode MOA ?</p>
    <input type="radio" name="q6" value="a"> a) Diagramme de Gantt, cahier des charges<br>
    <input type="radio" name="q6" value="b"> b) Document descriptif des besoins, matrice de traçabilité<br>
    <input type="radio" name="q6" value="c"> c) Code source, manuel utilisateur<br>
    <input type="radio" name="q6" value="d"> d) Maquette graphique, test unitaire<br>
  </div>
  
  <div class="question" id="q7">
    <p>7. Quelles sont les compétences requises pour un analyste MOA ?</p>
    <input type="radio" name="q7" value="a"> a) Compétences techniques avancées<br>
    <input type="radio" name="q7" value="b"> b) Capacité à gérer les ressources humaines<br>
    <input type="radio" name="q7" value="c"> c) Aptitude à analyser et modéliser les processus métiers<br>
    <input type="radio" name="q7" value="d"> d) Connaissance approfondie des langages de programmation<br>
  </div>
  
  <div class="question"  id="q8">
    <p>8. Quel est le contenu de la note de lancement d'un projet ?</p>
    <input type="radio" name="q8" value="a"> a) Les objectifs et les enjeux du projet<br>
    <input type="radio" name="q8" value="b"> b) Les résultats attendus et les moyens de réalisation<br>
    <input type="radio" name="q8" value="c"> c) La liste des parties prenantes et le budget du projet<br>
    <input type="radio" name="q8" value="d"> d) Le suivi des étapes du projet et les contraintes temporelles<br>
  </div>
  
  <div class="question" id="q9">
    <p>9. Quel est le rôle du comité de pilotage dans la méthode MOA ?</p>
    <input type="radio" name="q9" value="a"> a) Définir les spécifications techniques<br>
    <input type="radio" name="q9" value="b"> b) Valider les livrables et prendre les décisions stratégiques<br>
    <input type="radio" name="q9" value="c"> c) Rédiger le cahier des charges<br>
    <input type="radio" name="q9" value="d"> d) Assurer la formation des utilisateurs<br>
  </div>
  
  <div class="question" id="q10">
    <p>10. Quels sont les avantages de la méthode MOA/MOE par rapport à d'autres méthodes de gestion de projet ?</p>
    <input type="radio" name="q10" value="a"> a) Meilleure réactivité aux changements et implication des utilisateurs<br>
    <input type="radio" name="q10" value="b"> b) Réduction des coûts et amélioration de la qualité du code<br>
    <input type="radio" name="q10" value="c"> c) Automatisation des processus et réduction des délais de livraison<br>
    <input type="radio" name="q10" value="d"> d) Standardisation des pratiques et optimisation des ressources<br>
  </div>
  
  <button id="btn" class="submit-button" type="submit">Soumettre</button>
  <button id="retourAccueil" class ="submit-button" type="click">Retour à l'accueil</button>


</form>

 

<script src="quizzMOA.js"></script>

</body>

</html>