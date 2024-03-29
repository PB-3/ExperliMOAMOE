<!DOCTYPE html>
<html>
<head>
  <title>Quiz MOE</title>
  <link rel="stylesheet" href="stylequiz.css">
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

// Retrieve the value of score_moa from the database
$username = $_SESSION['username'];
$stmt = $conn->prepare("SELECT score_moe FROM utilisateur WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($score_moe);
$stmt->fetch();
$stmt->close();

// Check if a value exists for score_moa
if ($score_moa !== null) {
   echo "<script>alert('Le score moe existe déjà.'); window.location.href='../index.php';</script>";
} else {
  if (isset($_POST['score'])) {
    $score = $_POST['score'];

    // Prepare the SQL statement to insert the score into the database
    $stmt = $conn->prepare("UPDATE utilisateur SET score_moe = ? WHERE username = ?");
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
  <div class="question" id="q1">
    <p>1. Qu'est-ce que signifie l'acronyme MOE ?</p>
    <input type="radio" name="q1" value="a"> a) Maitrise d'Ouvrage<br>
    <input type="radio" name="q1" value="b"> b) Maitrise d'Oeuvre<br>
    <input type="radio" name="q1" value="c"> c) Méthode d'Organisation des Entreprises<br>
    <input type="radio" name="q1" value="d"> d) Mesure d'Optimisation Ethique<br>
  </div>
 
  <div class="question"id="q2">
    <p>2. Quelle responsabilités n'appartient pas à la MOE ?</p>
    <input type="radio" name="q2" value="a"> a) Concevoir une solution au projet proposé et en définir les spécificités<br>
    <input type="radio" name="q2" value="b"> b) Coordonner les intervenants et gérer les risques<br>
    <input type="radio" name="q2" value="c"> c) Analyser les besoins des utilisateurs et définir un budget pour le projet<br>
    <input type="radio" name="q2" value="d"> d) Contrôler l'avancement du projet en surveillant le budget et les délais<br>
  </div>
 
  <div class="question" id="q3">
    <p>3. Quelle est la différence entre la MOA et la MOE ?</p>
    <input type="radio" name="q3" value="a"> a) La MOA est responsable de la conception, la MOE de la réalisation<br>
    <input type="radio" name="q3" value="b"> b) La MOA est le côté client, la MOE le côté prestataire<br>
    <input type="radio" name="q3" value="c"> c) La MOA est responsable de gérer le budget, la MOE de la qualité<br>
    <input type="radio" name="q3" value="d"> d) Il n'y a pas de différence, ce sont des acronymes interchangeables<br>
  </div>
 
  <div class="question" id="q4">
    <p>4. Quelles sont les tâches principales de la MOE lors du lancement du projet ?</p>
    <input type="radio" name="q4" value="a"> a) Choix de l'équipe, solution au problème, analyse des risques, création d'un planning<br>
    <input type="radio" name="q4" value="b"> b) Contrôle de l'avancement, exécution, test, clôture<br>
    <input type="radio" name="q4" value="c"> c) Choix du budget et des délais, définition des besoins, mise en place des structures de pilotage<br>
    <input type="radio" name="q4" value="d"> d) La MOE n'intervient pas au lancement, c'est la MOA qui fait tout<br>
  </div>
 
  <div class="question" id="q5">
    <p>5. Parmi ces options, laquelle ne correspond pas aux librables attendus que doit produire la MOE</p>
    <input type="radio" name="q5" value="a"> a) Cahier des charges<br>
    <input type="radio" name="q5" value="b"> b) Démos et revues de sprint<br>
    <input type="radio" name="q5" value="c"> c) Code source<br>
    <input type="radio" name="q5" value="d"> d) Manuel utilisateur<br>
  </div>


  <div class="question"id="q6">
    <p>6. Quel conseil ne donne-t-on pas au chef de projet MOE ?</p>
    <input type="radio" name="q6" value="a"> a) Définir des jalons pertinents pour subdiviser les tâches<br>
    <input type="radio" name="q6" value="b"> b) Analyser régulièrement les dérives de charges et définir les plans d'action en conséquence<br>
    <input type="radio" name="q6" value="c"> c) Changer régulièrement d'équipe au cours du projet pour apporter une vision nouvelle de ce dernier<br>
    <input type="radio" name="q6" value="d"> d) Créer un planning et mettre régulièrement à jour les tâche restantes pour une vision sur ce qu'il reste à faire<br>
  </div>
 
  <div class="question" id="q7">
    <p>7. Parmis les propositions suivantes, laquelle décrit le mieux les compétences nécessaires à la MOE ?</p>
    <input type="radio" name="q7" value="a"> a) Perfectionnisme, communication, prise de décision, prise de risque, adaptabilité<br>
    <input type="radio" name="q7" value="b"> b) Organisation, ambition, adaptabilité, prise de risque, maîtrise technique<br>
    <input type="radio" name="q7" value="c"> c) Travail en solo, prise de décision, analyse, ambition, perfectionnisme<br>
    <input type="radio" name="q7" value="d"> d) Organisation, analyse, communication, adaptabilité, maîtrise technique<br>
  </div>
 
  <div class="question"  id="q8">
    <p>8. Pour un groupe temporaire, quelles sont les différentes étapes de développement du groupe et leur ordre?</p>
    <input type="radio" name="q8" value="a"> a) Formation, agitation, stabilisation, action<br>
    <input type="radio" name="q8" value="b"> b) Formation, action, stabilisation, agitation, dispersion<br>
    <input type="radio" name="q8" value="c"> c) Formation, agitation, stabilisation, action, dispersion<br>
    <input type="radio" name="q8" value="d"> d) Formation, action, stabilisation, agitation<br>
  </div>
 
  <div class="question" id="q9">
    <p>9. "Ce type de contrat implique que la MOA pilote le projet. En effet le coût final du projet n'est pas fixe et dépend des dépenses du fournisseurs. Ainsi il est nécessaire que certains accords soit passés entre les deux partis." A quel type de contrat correspond cette description?</p>
    <input type="radio" name="q9" value="a"> a) Contrat en engagement de moyens<br>
    <input type="radio" name="q9" value="b"> b) Contrat d'engagement de résultat<br>
    <input type="radio" name="q9" value="c"> c) Contrat "contre remboursement"<br>
    <input type="radio" name="q9" value="d"> d) Contrat conclu avec un groupement d'employeurs<br>
  </div>
 
  <div class="question" id="q10">
    <p>10. La MOE doit créer et respecter un système qualité. Quelle réponse ne correspond pas à ce système ?</p>
    <input type="radio" name="q10" value="a"> a) Organisation et structuration du projet, conduite du projet<br>
    <input type="radio" name="q10" value="b"> b) Procédures et méthodes spécifiques, actions correctives<br>
    <input type="radio" name="q10" value="c"> c) Respect des engagements, maîtrise des documents, contrôles<br>
    <input type="radio" name="q10" value="d"> d) Analyse des besoins utilisateurs, validation des étapes proposée par la MOA<br>
  </div>
 
  <button id="continue" class="submit-button">Continuer</button>
  <button id="retourAccueil" class ="submit-button" type="click">Retour à l'accueil</button>
</form>
</div>
<script src="quizMOE.js"></script>
</body>

</html>

