// Array of correct answers
let answers = ['a','b','a','a','a','a','d','c','a','a'];
let liste_explication=[];
explanations = [
  "L'acronyme PRINCE2 signifie 'PRojects IN Controlled Environments.' C'est la bonne réponse, car PRINCE2 est une méthodologie de gestion de projet qui se concentre sur la gestion structurée des projets dans des environnements contrôlés.",
  "La principale caractéristique de PRINCE2 est le 'focus sur les processus et la documentation.' C'est la réponse correcte, car PRINCE2 met l'accent sur l'utilisation de processus bien définis et sur la documentation détaillée pour assurer une gestion efficace des projets.",
  "PMBOK représente 'Project Management Body of Knowledge.' C'est la bonne réponse, car PMBOK est une norme reconnue mondialement qui compile les connaissances et les meilleures pratiques en gestion de projet.",
  "L'objectif principal de PMBOK est de 'fournir un cadre de gestion de projet standardisé.' C'est la réponse correcte, car PMBOK fournit un ensemble de connaissances et de processus standardisés pour la gestion de projet, facilitant ainsi la planification et l'exécution des projets.",
  "La principale différence entre PRINCE2 et PMBOK est que 'PRINCE2 est un cadre méthodologique complet, tandis que PMBOK est une norme de bonnes pratiques.' C'est la bonne réponse, car PRINCE2 offre une méthodologie complète avec des principes directeurs, tandis que PMBOK fournit un ensemble de meilleures pratiques pour la gestion de projet.",
  "Selon PRINCE2, le rôle principal d'un chef de projet est de 'fournir une direction et une vision claires pour le projet.' C'est la réponse correcte, car le chef de projet dans PRINCE2 est chargé de définir la direction du projet et de fournir une vision claire à l'équipe.",
  "Le 'triangle de la gestion de projet' est un outil pour 'gérer les contraintes de délai, de coût et de portée du projet.' C'est la réponse correcte, car le triangle représente les trois contraintes principales d'un projet et la nécessité de les gérer de manière équilibrée.",
  "L'une des principales étapes du cycle de vie d'un projet selon PMBOK est la 'planification du projet.' C'est la bonne réponse, car la planification est une étape essentielle pour définir les objectifs, les livrables, les ressources et les activités nécessaires à la réalisation du projet.",
  "L'un des avantages de l'utilisation de PRINCE2 ou PMBOK dans la gestion de projet est 'l'amélioration de la communication entre les parties prenantes.' C'est la réponse correcte, car ces approches fournissent des structures de communication claires et favorisent l'engagement et la collaboration entre toutes les parties prenantes du projet.",
  "L'utilisation de PRINCE2 ou PMBOK dans la gestion de projet contribue au 'renforcement de la gouvernance d'entreprise.' C'est la bonne réponse, car ces approches favorisent une gestion rigoureuse, transparente et conforme aux bonnes pratiques, ce qui renforce la gouvernance globale du projet au sein de l'organisation."
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
    explanationElement.textContent = `Explication pour la question ${i + 1}: ${explanations[i]}`;
    scoreElement.appendChild(explanationElement);

    const lineBreak = document.createElement('br');
    scoreElement.appendChild(lineBreak);
  }
}

const scoreMessageElement = document.createElement('p');
scoreMessageElement.textContent = scoreMessage;
scoreElement.appendChild(scoreMessageElement);

content.appendChild(scoreElement);



  // Add the "Recommencer" button
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Recommencer';
  restartButton.id = 'restart';
  restartButton.type = 'button';
  restartButton.className = 'submit-button';
  content.appendChild(restartButton);

  // Event listener for "Recommencer" button
  restartButton.addEventListener('click', restartQuiz);
}

// Function to restart the quiz
function restartQuiz() {
  // Reload the page to restart the quiz
  location.reload();
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

// Event listener for "Recommencer" button
document.getElementById('restart').addEventListener('click', restartQuiz);

// Show the first question when the page loads
showQuestion();
