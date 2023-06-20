// Array of correct answers
let answers = ['b','c','b','a','b','c','d','c','a','d'];
let liste_explication=[];
explanations = [
  "<p>1. Qu'est-ce que signifie l'acronyme MOE ?</p>Il signifie Maîtrise d’Oeuvre",
  "<p>2. Quelle sont les principales responsabilités de la MOE ?</p>Lors du déroulement d’un projet, la MOA présente les besoins (les siens et ceux des futurs utilisateurs) et définit un budget et des délais initiaux. La MOE a pour rôle de concevoir une solution au projet, définir et évaluer les risques, coordonner les équipes qui participent au projet, et contrôler l’avancement de celui-ci. ",
  "<p>3. Quelle est la différence entre la MOA et la MOE ?</p>Comme vu à la question précédente, la MOE est à la fois responsable de la conception et de la réalisation du projet. Si la MOA définit le budget initial c’est bien à la MOE de faire en sorte que la production du produit respecte ce budget tout en ayant. Enfin la MOE crée le produit qui servira à la MOA, on peut donc assimiler la MOA au côté client et la MOE au côté prestataire.",
  "<p>4. Quelles sont les tâches principales de la MOE lors du lancement du projet ?</p>Au lancement du projet la MOA et la MOE travaillent ensemble. C’est la MOA qui s’occupe de définir les besoins, les délais, le budget et la structure de pilotage. Le contrôle de l'avancement, l’exécution, les tests et la clôture sont bien des tâches de la MOE mais celles-ci sont effectuées sur la durée dans le projet. En revanche, le choix de l'équipe, trouver la solution au problème, l’analyse des risques et la création d'un planning sont du ressort de la MOE au lancement du projet.",
  "<p>5. Agile ?</p>Agile",
  "<p>6. Quels conseils donne-t-on au chef de projet MOE ?</p><p>Durant la phase de lancement de projet, la MOE doit donc analyser les risques, préparer un planning à respecter, et aider la MOA à choisir les spécificités du projet afin de respecter les délais et le budget. Voici 10 recommandations qui sont sont faites aux responsables de projet en général:</p><p>Structurer le projet en lots de travaux réalistes et affectables.</p><p>Définir des jalons pertinents.</p><p>Définir les flux entre maître d'œuvre et maître ouvrage.</p><p>Construire un planning initial réaliste avec de la marge.</p><p>Utiliser un planning directeur, consolidant les plannings détaillés.</p><p>Planifier avec le logiciel choisi en intégrant des marges.</p><p>Définir au moins un indicateur clé de délais.</p><p>Mettre à jour régulièrement le « reste à faire » du projet.</p><p>Analyser régulièrement les dérives de charges et définir les plans d'action en conséquence.</p><p>Analyser les risques de glissement de planning, définir et mettre en place des plans d'actions préventifs.</p>",
  "<p>7. Parmis les propositions suivantes, laquelle décrit le mieux les compétences nécessaires à la MOE ?</p><p>Les tâches de la MOE sont : faire un planning → Organisation</p><p>Définir les risques → Analyse</p><p>Rendre compte de l’avancement du projet et gérer ses équipes → Communication</p><p>Faire face aux imprévus et compenser les risques → Adaptabilité</p><p>Produire un rendu de qualité → Maîtrise technique</p>",
  "<p>8. Pour un groupe temporaire, quelles sont les différentes étapes de développement du groupe et leur ordre?</p>Le développement d’une équipe passent par 4 ou 5 étapes : la formation du groupe, l’agitation pendant laquelle les leaders du groupe se distinguent et les objectifs du groupe sont fixés, la stabilisation pendant laquelle les relations se solidifient et la cohésion du groupe se développe, l’action pendant laquelle l’énergie du groupe se concentre sur les tâches à réaliser, c’est la dernière étape des groupes définitifs, et enfin, pour les équipes temporaires, la dispersion pendant laquelle le groupe se prépare à se séparer et où l’énergie du groupe est tourné vers la conclusion du projet en cours.",
  "<p>9. 'Ce type de contrat implique que la MOA pilote le projet. En effet le coût final du projet n'est pas fixe et dépend des dépenses du fournisseurs. Ainsi il est nécessaire que certains accords soit passés entre les deux partis.' A quel type de contrat correspond cette description?</p><p>Dans le cadre des relations MOA/MOE il existe trois types de contrat.</p> <p>Le contrat en engagement de résultat est un contrat idéal lorsque le produit et le périmètre sont complètement définis. C’est un contrat à prix fixe ou dit “au forfait”, le prix ne peut être modifié que si les conditions de réalisation ou les caractéristiques du projet sont modifiées.</p><p>Le contrat en engagement de moyens est un contrat qui se base sur les moyens que met le fournisseur à disposition du client. Dans ce type de contrat, le client pilote le projet puisque les coûts et délais dépendent du temps passé, du matériel et de la prestation du fournisseur.</p><p>Pour cela, le fournisseur fait un bilan régulier sur l’avancement du projet. De plus, il existe des accords clairs entre les deux parties sur les limites de livraisons, les modalités de modification et le traitement des problèmes.</p><p>Le dernier type de contrat est le contrat “contre remboursement”. Il n’y a pas d’écart entre le coût réel du projet et le paiement réalisé, la MOE présente régulièrement les avancements contre paiement. Ce contrat s’accompagne généralement de primes et de bonus en cas de respect du délais et d’atteinte des objectifs.</p>",
  "<p>10. La MOE doit créer et respecter un système qualité. De quoi traite ce système?</p><p>La MOE a aussi pour objectif de définir et respecter un système qualité</p><p>Le système qualité du projet prend en compte tous les domaines de management et de réalisation et traite notamment des sujets suivants :</p><p>respect des engagements,</p><p>maîtrise des documents, plans et normes de la documentation,</p><p>contrôles, revues et audits,</p><p>organisation du projet, coordination entre maîtrise d'ouvrage et maîtrise d'œuvre,</p><p>structuration du projet, plans projet, plans opérationnels,</p><p>conduite du projet coordination des partenaires,</p><p>procédures et méthodes spécifiques à la réalisation,</p><p>traitement des non-conformités et actions correctives.</p>",
];



// Variable to store the current question index
let currentQuestionIndex = 0;

// Function to show the current question
function showQuestion() {
  // Hide all questions
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => question.style.display = 'none');

  // Show the current question
  questions[currentQuestionIndex].style.display = 'block';
}

// Function to check the quiz results
function checkResults() {
  // Get all selected answers
  const selectedAnswers = Array.from(document.querySelectorAll('input[type="radio"]:checked'))
    .map(input => input.value);

  // Compare selected answers with correct answers
  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (selectedAnswers[i] === answers[i]) {
      liste_explication.push(true);
      score++;

    }
    else{
      liste_explication.push(false);
    }
  }
// Show the score
const content = document.querySelector('.quizzdiv');
content.innerHTML = ''; // Clear previous content

let scoreMessage = `Votre score: ${score} sur ${answers.length}`;
const scoreElement = document.createElement('div');

for (let i = 0; i < explanations.length; i++) {
  if (!liste_explication[i]) {
    const explanationElement = document.createElement('p');
    explanationElement.innerHTML = `<strong>Explication pour la question ${i + 1}:</strong> ${explanations[i]}`;
    scoreElement.appendChild(explanationElement);

    const lineBreak = document.createElement('br');
    scoreElement.appendChild(lineBreak);
  }
}

const scoreMessageElement = document.createElement('p');
scoreMessageElement.textContent = scoreMessage;
scoreElement.appendChild(scoreMessageElement);

content.appendChild(scoreElement);
}

// Event listener for form submission
document.getElementById('quizz').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  if (currentQuestionIndex < answers.length - 1) {
    // Show the next question
    currentQuestionIndex++;
    showQuestion();
  } else {
    // Show the results
    checkResults();
  }
});

// Show the first question when the page loads
showQuestion();
