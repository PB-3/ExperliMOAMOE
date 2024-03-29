<!DOCTYPE html>
<html>
<head>
  <title>Quiz PRINCE2|PMBOK</title>
  <link rel="stylesheet" href="quizz_pmbok_prince2.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</head>
<body>
<?php
session_start();

if (isset($_SESSION['username']) && isset($_SESSION['email'])) {
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
// Create a database connection
$conn = new mysqli('localhost', 'pb', 'Project123!', 'pb');

// Check the database connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve the value of score_prince2_pmbok from the database
$username = $_SESSION['username'];
$stmt = $conn->prepare("SELECT score_prince2_pmbok FROM utilisateur WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($score_prince2_pmbok);
$stmt->fetch();
$stmt->close();

// Check if a value exists for score_prince2_pmbok
if ($score_prince2_pmbok !== null) {
  echo "<script>alert('Le score prince2_pmbok existe déjà.'); window.location.href='../../index.php';</script>";
} else {
  if (isset($_POST['score'])) {
    $score = $_POST['score'];

    // Prepare the SQL statement to insert the score into the database
    $stmt = $conn->prepare("UPDATE utilisateur SET score_prince2_pmbok = ? WHERE username = ?");
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

  <h1>Quiz Prince2 | Pmbok !</h1>

  <div id="global">
    <div class="quizzdiv">
      <form id="quizz" action="" method="POST">
          <input type="hidden" name="score" id="score" value="">
        <div class="question" id="q1">
          <p>1. Qu'est-ce que signifie l'acronyme PRINCE2 ?</p>
          <label for="q1a">a) Projects IN Controlled Environments</label>
          <input type="radio" name="q1" id="q1a" value="a"><br>
          <label for="q1b">b) Project Management Body of Knowledge</label>
          <input type="radio" name="q1" id="q1b" value="b"><br>
          <label for="q1c">c) Projects IN Controlled Environments 2</label>
          <input type="radio" name="q1" id="q1c" value="c"><br>
          <label for="q1d">d) Project Management Institute</label>
          <input type="radio" name="q1" id="q1d" value="d"><br>
        </div>

        <div class="question" id="q2">
          <p>2. Quelle est la principale caractéristique de PRINCE2 ?</p>
          <label for="q2a">a) Approche itérative et adaptative</label>
          <input type="radio" name="q2" id="q2a" value="a"><br>
          <label for="q2b">b) Focus sur les processus et la documentation</label>
          <input type="radio" name="q2" id="q2b" value="b"><br>
          <label for="q2c">c) Gestion centrée sur les risques</label>
          <input type="radio" name="q2" id="q2c" value="c"><br>
          <label for="q2d">d) Orientation vers les technologies de l'information</label>
          <input type="radio" name="q2" id="q2d" value="d"><br>
        </div>

        <div class="question" id="q3">
          <p>3. Qu'est-ce que PMBOK représente ?</p>
          <label for="q3a">a) Project Management Body of Knowledge</label>
          <input type="radio" name="q3" id="q3a" value="a"><br>
          <label for="q3b">b) PRojects IN Controlled Environments</label>
          <input type="radio" name="q3" id="q3b" value="b"><br>
          <label for="q3c">c) Projects IN Controlled Environments 2</label>
          <input type="radio" name="q3" id="q3c" value="c"><br>
          <label for="q3d">d) Project Management Institute</label>
          <input type="radio" name="q3" id="q3d" value="d"><br>
        </div>

        <div class="question" id="q4">
          <p>4. Quel est l'objectif principal de PMBOK ?</p>
          <label for="q4a">a) Fournir un cadre de gestion de projet standardisé</label>
          <input type="radio" name="q4" id="q4a" value="a"><br>
          <label for="q4b">b) Mettre l'accent sur la gouvernance d'entreprise</label>
          <input type="radio" name="q4" id="q4b" value="b"><br>
          <label for="q4c">c) Faciliter la communication avec les parties prenantes</label>
          <input type="radio" name="q4" id="q4c" value="c"><br>
          <label for="q4d">d) Offrir des méthodes agiles pour la gestion de projet</label>
          <input type="radio" name="q4" id="q4d" value="d"><br>
        </div>

        <div class="question" id="q5">
          <p>5. Quelle est la principale différence entre PRINCE2 et PMBOK ?</p>
          <label for="q5a">a) PRINCE2 est un cadre méthodologique complet, tandis que PMBOK est une norme de bonnes pratiques</label>
          <input type="radio" name="q5" id="q5a" value="a"><br>
          <label for="q5b">b) PRINCE2 est spécifique aux projets informatiques, tandis que PMBOK est applicable à tous les types de projets</label>
          <input type="radio" name="q5" id="q5b" value="b"><br>
          <label for="q5c">c) PRINCE2 met l'accent sur la gestion des risques, tandis que PMBOK se concentre sur le contrôle des coûts</label>
          <input type="radio" name="q5" id="q5c" value="c"><br>
          <label for="q5d">d) Il n'y a pas de différence significative entre PRINCE2 et PMBOK</label>
          <input type="radio" name="q5" id="q5d" value="d"><br>
          </div>
          <div class="question" id="q6">
            <p>6. Quelle est l'une des principales différences entre PRINCE2 et PMBOK en termes de structure ?</p>
            <label for="q6a">a) PRINCE2 est basé sur des principes directeurs, tandis que PMBOK est basé sur des processus</label>
            <input type="radio" name="q6" id="q6a" value="a"><br>
            <label for="q6b">b) PRINCE2 est axé sur la gestion des coûts, tandis que PMBOK met l'accent sur la qualité</label>
            <input type="radio" name="q6" id="q6b" value="b"><br>
            <label for="q6c">c) PRINCE2 utilise des méthodes agiles, tandis que PMBOK suit une approche en cascade</label>
            <input type="radio" name="q6" id="q6c" value="c"><br>
            <label for="q6d">d) Il n'y a pas de différence significative entre la structure de PRINCE2 et PMBOK</label>
            <input type="radio" name="q6" id="q6d" value="d"><br>
          </div>
          
          <div class="question" id="q7">
            <p>7. Quel est le rôle principal d'un chef de projet selon PRINCE2 ?</p>
            <label for="q7a">a) Développer le plan de projet</label>
            <input type="radio" name="q7" id="q7a" value="a"><br>
            <label for="q7b">b) Exécuter les tâches opérationnelles du projet</label>
            <input type="radio" name="q7" id="q7b" value="b"><br>
            <label for="q7c">c) Prendre les décisions stratégiques pour le projet</label>
            <input type="radio" name="q7" id="q7c" value="c"><br>
            <label for="q7d">d) Fournir une direction et une vision claires pour le projet</label>
            <input type="radio" name="q7" id="q7d" value="d"><br>
          </div>
          
          <div class="question" id="q8">
            <p>8. Qu'est-ce que le triangle de la gestion de projet ?</p>
            <label for="q8a">a) Une représentation graphique des processus de gestion de projet</label>
            <input type="radio" name="q8" id="q8a" value="a"><br>
            <label for="q8b">b) Un modèle pour évaluer la qualité des livrables du projet</label>
            <input type="radio" name="q8" id="q8b" value="b"><br>
            <label for="q8c">c) Un outil pour gérer les contraintes de délai, de coût et de portée du projet</label>
            <input type="radio" name="q8" id="q8c" value="c"><br>
            <label for="q8d">d) Une technique pour gérer les risques et les problèmes du projet</label>
            <input type="radio" name="q8" id="q8d" value="d"><br>
          </div>
          
          <div class="question" id="q9">
            <p>9. Quelle est l'une des principales étapes du cycle de vie d'un projet selon PMBOK ?</p>
            <label for="q9a">a) Planification du projet</label>
            <input type="radio" name="q9" id="q9a" value="a"><br>
            <label for="q9b">b) Exécution du projet</label>
            <input type="radio" name="q9" id="q9b" value="b"><br>
            <label for="q9c">c) Contrôle et suivi du projet</label>
            <input type="radio" name="q9" id="q9c" value="c"><br>
            <label for="q9d">d) Clôture du projet</label>
            <input type="radio" name="q9" id="q9d" value="d"><br>
          </div>
          
          <div class="question" id="q10">
            <p>10. Quel est l'un des avantages de l'utilisation de PRINCE2 ou PMBOK dans la gestion de projet ?</p>
            <label for="q10a">a) Réduction des coûts du projet</label>
            <input type="radio" name="q10" id="q10a" value="a"><br>
            <label for="q10b">b) Amélioration de la communication entre les parties prenantes</label>
            <input type="radio" name="q10" id="q10b" value="b"><br>
            <label for="q10c">c) Augmentation de la productivité de l'équipe de projet</label>
            <input type="radio" name="q10" id="q10c" value="c"><br>
            <label for="q10d">d) Renforcement de la gouvernance d'entreprise</label>
            <input type="radio" name="q10" id="q10d" value="d"><br>
          </div>
          

        <button id="btn" class="submit-button" type="submit">Soumettre</button>
        <button id="retourAccueil" class ="submit-button" type="click">Retour à l'accueil</button> 
      </form>
      
      

    </div>

  </div>

  <script src="quizPrince2Pmbok.js"></script>
</body>
</html>
