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
                ?>
  <h1>Quiz MOE</h1>
  <div class="quizzdiv">
  <form id="quizz">
    <div class="question" id="q1">
        <p>1. Qu'est-ce qu'une norme qualité ?</p>
        <input type="radio" name="q2" value="a"> a) Un document qui fournit des exigences, des spécifications, des lignes directrices ou des caractéristiques pour garantir que les matériaux, les produits, les processus et les services sont adaptés à leurs objectifs.<br>
        <input type="radio" name="q2" value="b"> b) Une méthode de gestion utilisée uniquement par les grandes organisations.<br>
        <input type="radio" name="q2" value="c"> c) Une recommandation non contraignante pour les entreprises.<br>
        <input type="radio" name="q1" value="d"> d) Une norme qualité est une mesure de satisfaction client.<br>
      </div>
       
      <div class="question" id="q2">
        <p>2. Pourquoi les organisations utilisent-elles des normes de qualité ?</p>
        <input type="radio" name="q2" value="a"> a) Pour satisfaire les exigences de qualité de leurs clients.<br>
        <input type="radio" name="q2" value="b"> b) Pour garantir la sécurité de leurs produits et services.<br>
        <input type="radio" name="q2" value="c"> c) Pour respecter la réglementation.<br>
        <input type="radio" name="q2" value="d"> d) Toutes les réponses ci-dessus.<br>
      </div>
      
      <div class="question" id="q3">  
        <p>3. Quelles sont les normes de qualité les plus populaires et adoptées ?</p>
        <input type="radio" name="q3" value="a"> a) Normes IT.<br>
        <input type="radio" name="q3" value="b"> b) Normes de gestion de services IT.<br>
        <input type="radio" name="q3" value="c"> c) Normes ISO.<br>
        <input type="radio" name="q3" value="d"> d) Toutes les réponses ci-dessus.<br>
      </div>
      
      <div class="question" id="q4">
        <p>4. Quelle norme de qualité concerne la gestion de l'environnement ?</p>
        <input type="radio" name="q4" value="a"> a) ISO 9001.<br>
        <input type="radio" name="q4" value="b"> b) ISO 14001.<br>
        <input type="radio" name="q4" value="c"> c) ISO 31011.<br>
        <input type="radio" name="q4" value="d"> d) ISO 26000.<br>
      </div>
      
      <div class="question" id="q5">
        <p>5. Quelle norme de qualité est spécifique à la gestion de la qualité dans le secteur automobile ?</p>
        <input type="radio" name="q5" value="a"> a) ISO 9001.<br>
        <input type="radio" name="q5" value="b"> b) ISO 22000.<br>
        <input type="radio" name="q5" value="c"> c) ISO 31011.<br>
        <input type="radio" name="q5" value="d"> d) IATF 16949.<br>
      </div>
      
 
  <button id="continue" class="submit-button">Continuer</button>
  <button id="retourAccueil" class ="submit-button" type="click">Retour à l'accueil</button> 
</form>
</div>
<script src="quizNorme.js"></script>
</body>
</html>
