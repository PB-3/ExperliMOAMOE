<!DOCTYPE html>
<html>
<head>
  <title>Quiz normes qualité</title>
  <link rel="stylesheet" href="stylequizz.css">
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



// Create a database connection
$conn = new mysqli('localhost', 'pb', 'Project123!', 'pb');

// Check the database connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve the value of score_norme from the database
$username = $_SESSION['username'];
$stmt = $conn->prepare("SELECT score_norme FROM utilisateur WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($score_norme);
$stmt->fetch();
$stmt->close();

// Check if a value exists for score_norme
if ($score_norme !== null) {
  echo "<script>alert('Le score norme existe déjà.'); window.location.href='../index.php';</script>";
} else {
  if (isset($_POST['score'])) {
    $score = $_POST['score'];

    // Prepare the SQL statement to insert the score into the database
    $stmt = $conn->prepare("UPDATE utilisateur SET score_norme = ? WHERE username = ?");
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
  <h1>Quiz MOE</h1>
  <div class="quizzdiv">
 <form id="quizz">
  <input type="hidden" name="score" id="score" value="">
  
  <div class="question" id="q1">
    <p>1. Qu'est-ce qu'une norme qualité ?</p>
    <label><input type="radio" name="q1" value="a"> a) Un document qui fournit des exigences, des spécifications, des lignes directrices ou des caractéristiques pour garantir que les matériaux, les produits, les processus et les services sont adaptés à leurs objectifs.</label><br>
    <label><input type="radio" name="q1" value="b"> b) Une méthode de gestion utilisée uniquement par les grandes organisations.</label><br>
    <label><input type="radio" name="q1" value="c"> c) Une recommandation non contraignante pour les entreprises.</label><br>
    <label><input type="radio" name="q1" value="d"> d) Une norme qualité est une mesure de satisfaction client.</label><br>
  </div>
  
  <div class="question" id="q2">
    <p>2. Pourquoi les organisations utilisent-elles des normes de qualité ?</p>
    <label><input type="radio" name="q2" value="a"> a) Pour satisfaire les exigences de qualité de leurs clients.</label><br>
    <label><input type="radio" name="q2" value="b"> b) Pour garantir la sécurité de leurs produits et services.</label><br>
    <label><input type="radio" name="q2" value="c"> c) Pour respecter la réglementation.</label><br>
    <label><input type="radio" name="q2" value="d"> d) Toutes les réponses ci-dessus.</label><br>
  </div>
  
  <div class="question" id="q3">
    <p>3. Quelles sont les normes de qualité les plus populaires et adoptées ?</p>
    <label><input type="radio" name="q3" value="a"> a) Normes IT.</label><br>
    <label><input type="radio" name="q3" value="b"> b) Normes de gestion de services IT.</label><br>
    <label><input type="radio" name="q3" value="c"> c) Normes ISO.</label><br>
    <label><input type="radio" name="q3" value="d"> d) Toutes les réponses ci-dessus.</label><br>
  </div>
  
  <div class="question" id="q4">
    <p>4. Quelle norme de qualité concerne la gestion de l'environnement ?</p>
    <label><input type="radio" name="q4" value="a"> a) ISO 9001.</label><br>
    <label><input type="radio" name="q4" value="b"> b) ISO 14001.</label><br>
    <label><input type="radio" name="q4" value="c"> c) ISO 31011.</label><br>
    <label><input type="radio" name="q4" value="d"> d) ISO 26000.</label><br>
  </div>
  
  <div class="question" id="q5">
    <p>5. Quelle norme de qualité est spécifique à la gestion de la qualité dans le secteur automobile ?</p>
    <label><input type="radio" name="q5" value="a"> a) ISO 9001.</label><br>
    <label><input type="radio" name="q5" value="b"> b) ISO 22000.</label><br>
    <label><input type="radio" name="q5" value="c"> c) ISO 31011.</label><br>
    <label><input type="radio" name="q5" value="d"> d) IATF 16949.</label><br>
  </div>
   <div class="question" id="q6">
    <p>6. Quelle norme de qualité concerne la gestion de la sécurité de l'information ?</p>
    <label><input type="radio" name="q6" value="a"> a) ISO 9001.</label><br>
    <label><input type="radio" name="q6" value="b"> b) ISO 27001.</label><br>
    <label><input type="radio" name="q6" value="c"> c) ISO 14001.</label><br>
    <label><input type="radio" name="q6" value="d"> d) ISO 31000.</label><br>
  </div>

  <div class="question" id="q7">
    <p>7. Qu'est-ce qu'une non-conformité dans le contexte de la gestion de la qualité ?</p>
    <label><input type="radio" name="q7" value="a"> a) Une amélioration des processus.</label><br>
    <label><input type="radio" name="q7" value="b"> b) Une déviation par rapport aux exigences spécifiées.</label><br>
    <label><input type="radio" name="q7" value="c"> c) Une réduction des coûts de production.</label><br>
    <label><input type="radio" name="q7" value="d"> d) Un processus d'audit interne.</label><br>
  </div>

  <div class="question" id="q8">
    <p>8. Quelle est la norme de qualité spécifique à l'industrie alimentaire ?</p>
    <label><input type="radio" name="q8" value="a"> a) ISO 9001.</label><br>
    <label><input type="radio" name="q8" value="b"> b) ISO 14001.</label><br>
    <label><input type="radio" name="q8" value="c"> c) ISO 22000.</label><br>
    <label><input type="radio" name="q8" value="d"> d) ISO 45001.</label><br>
  </div>

  <div class="question" id="q9">
    <p>9. Quelle est l'organisation internationale responsable de l'élaboration des normes internationales ?</p>
    <label><input type="radio" name="q9" value="a"> a) ISO (Organisation internationale de normalisation).</label><br>
    <label><input type="radio" name="q9" value="b"> b) IEC (Commission électrotechnique internationale).</label><br>
    <label><input type="radio" name="q9" value="c"> c) ASTM International (Société américaine pour les essais et les matériaux).</label><br>
    <label><input type="radio" name="q9" value="d"> d) ITU (Union internationale des télécommunications).</label><br>
  </div>

  <div class="question" id="q10">
    <p>10. Qu'est-ce qu'un audit de qualité ?</p>
    <label><input type="radio" name="q10" value="a"> a) Un processus de certification des produits.</label><br>
    <label><input type="radio" name="q10" value="b"> b) Une évaluation systématique des activités et des résultats par rapport aux exigences de qualité.</label><br>
    <label><input type="radio" name="q10" value="c"> c) Une analyse des coûts de non-qualité.</label><br>
    <label><input type="radio" name="q10" value="d"> d) Un processus de sélection des fournisseurs.</label><br>
  </div>
  
  <button id="continue" class="submit-button">Continuer</button>
  <button id="retourAccueil" class="submit-button" type="click">Retour à l'accueil</button> 
</form>

</div>
<script src="quizNorme.js"></script>
</body>
</html>
