// Array of correct answers
let answers = ['a','b','b','c','b','b','b','a','b','d'];
let liste_explication = [];
explanations = [
"<p>Qu'est-ce que signifie l'acronyme MOA ?</p><p>C'est la Maitrise d'Ouvrage.</p>",
"<p>Quelle est la principale responsabilité de la MOA ?</p><p>La responsabilité principale de la MOA est donc d'analyser les besoins des utilisateurs, de les comprendre, de les traduire en spécifications fonctionnelles et de s'assurer que le projet ou le système développé répondra à ces besoins de manière efficace et satisfaisante pour les utilisateurs finaux.</p>",
"<p>Quelle est la différence entre la MOA et la MOE ?</p><p>La MOA représente les intérêts des utilisateurs et s'assure que le projet répond à leurs besoins, tandis que la MOE est responsable de la conception et de la réalisation technique du projet. Les deux entités travaillent en étroite collaboration pour assurer la réussite du projet.</p>",
"<p>Quelles sont les étapes principales du cycle de vie d'un projet MOA ?</p><p>Les étapes principales du cycle de vie d'un projet MOA (Maîtrise d'Ouvrage) sont les suivantes : </p> <p> Identification des besoins : Cette étape consiste à identifier et à comprendre les besoins des utilisateurs et des parties prenantes impliquées dans le projet. Cela implique des entretiens, des sondages, des observations sur le terrain et d'autres techniques pour recueillir les informations nécessaires.</p><p> Spécification des exigences : Une fois les besoins identifiés, cette étape consiste à traduire ces besoins en spécifications fonctionnelles claires et détaillées. Les spécifications définissent les fonctionnalités, les contraintes et les objectifs du projet. Elles servent de base de référence pour le développement et la mise en œuvre ultérieurs.</p><p> Validation : Cette étape vise à s'assurer que les spécifications des exigences sont complètes, cohérentes, réalistes et alignées sur les attentes des utilisateurs. La validation implique souvent des revues, des réunions de validation et des échanges entre la MOA, les utilisateurs et les parties prenantes afin de valider les spécifications.</p><p> Livraison : Une fois les spécifications validées, la MOA est responsable de la livraison du projet. Cela peut inclure la coordination avec l'équipe de la MOE (Maîtrise d'Œuvre) pour la mise en œuvre, le suivi de l'avancement, la gestion des risques, la gestion des changements et la communication avec les parties prenantes. La MOA veille à ce que le projet soit livré conformément aux spécifications et aux attentes des utilisateurs.</p>",
"<p>Quel est le rôle du chef de projet MOA ?</p><p>Le chef de projet MOA joue un rôle central dans la coordination de l'équipe de la MOA, la communication avec les parties prenantes, la planification du projet, la gestion des risques et la garantie de la qualité des livrables. Son objectif principal est de mener à bien le projet en veillant à ce que toutes les parties travaillent de manière harmonieuse et que les objectifs du projet soient atteints.</p>",
"<p>Quels sont les livrables attendus dans la phase d'analyse de la méthode MOA ?</p><p>Dans la phase d'analyse de la méthode MOA, les livrables attendus comprennent un document descriptif des besoins et une matrice de traçabilité. Le document descriptif des besoins décrit en détail les exigences des utilisateurs et des parties prenantes. Il spécifie les fonctionnalités, les caractéristiques et les contraintes du projet. La matrice de traçabilité permet de suivre les relations entre les besoins, les spécifications et les composants du système, assurant ainsi la cohérence et la gestion du changement. Ces livrables sont essentiels pour une compréhension claire des besoins des utilisateurs et pour maintenir la traçabilité tout au long du projet MOA.</p>",
"<p>Quelles sont les compétences requises pour un analyste MOA ?</p><p>la gestion des ressources humaines dans le cadre de la méthode MOA est essentielle pour assurer la collaboration efficace de l'équipe de la MOA, la satisfaction des besoins des utilisateurs et la réussite globale du projet. Un analyste MOA compétent doit être capable de coordonner l'équipe, de gérer les parties prenantes, de motiver et de diriger, de gérer les compétences et de résoudre les conflits. La gestion des ressources humaines est un élément clé pour maximiser les performances de l'équipe et atteindre les objectifs fixés.</p>",
"<p>Quel est le contenu de la note de lancement d'un projet ?</p><p>La note de lancement d'un projet, rédigée par la MOA et la MOE, établit les bases et l'orientation du projet. Elle comprend les objectifs et enjeux du projet, ainsi que le champ d'étude et éventuellement les résultats attendus. Elle précise les modalités de déroulement du projet, incluant l'organisation, le cadre méthodologique, les contraintes structurantes (moyens, budget, délais), et propose un découpage et une planification générale des étapes du projet.</p>",
"<p>Quel est le rôle du comité de pilotage dans la méthode MOA ?</p><p>Le rôle du comité de pilotage dans la méthode MOA (Maîtrise d'Ouvrage) est de valider les livrables, c'est-à-dire les résultats intermédiaires ou finaux du projet, et de prendre les décisions stratégiques qui guident la direction du projet.Son objectif est d'assurer le suivi et la gouvernance du projet, en prenant des décisions importantes pour garantir sa réussite.</p>",
"<p>Quels sont les avantages de la méthode MOA/MOE par rapport à d'autres méthodes de gestion de projet ?</p><p>La gestion des ressources humaines dans le cadre de la méthode MOA est essentielle pour assurer la collaboration efficace de l'équipe de la MOA, la satisfaction des besoins des utilisateurs et la réussite globale du projet. Un analyste MOA compétent doit être capable de coordonner l'équipe, de gérer les parties prenantes, de motiver et de diriger, de gérer les compétences et de résoudre les conflits. La gestion des ressources humaines est un élément clé pour maximiser les performances de l'équipe et atteindre les objectifs fixés.</p>",
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
