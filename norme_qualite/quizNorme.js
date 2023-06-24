// Array of correct answers
let answers = ['a','d','c','b','d','b','b','c','a','b'];
let liste_explication=[];
explanations = [
  "<p>1. Qu'est-ce qu'une norme qualité ?</p>Les normes qualité sont des documents qui définissent les exigences, les spécifications, les lignes directrices ou les caractéristiques à suivre pour s'assurer que les produits, les processus et les services répondent à des normes de qualité spécifiques.",
  "<p>2. Pourquoi les organisations utilisent-elles des normes de qualité ?</p>Les organisations utilisent des normes de qualité pour satisfaire les exigences de qualité de leurs clients, garantir la sécurité de leurs produits et services, respecter la réglementation, atteindre les objectifs environnementaux et assurer la définition et le contrôle des processus internes.",
  "<p>3. Quelles sont les normes de qualité les plus populaires et adoptées ?</p>Les normes de qualité les plus populaires et adoptées sont celles de l'organisation ISO (International Organization for Standardization).",
  "<p>4. Quelle norme de qualité concerne la gestion de l'environnement ?</p>La norme ISO 14001 concerne la gestion de l'environnement. Elle établit les exigences pour un système de gestion environnementale efficace.",
  "<p>5. Quelle norme de qualité est spécifique à la gestion de la qualité dans le secteur automobile ?</p>La norme IATF 16949 est spécifique à la gestion de la qualité dans le secteur automobile. Elle définit les exigences spécifiques pour un système de gestion de la qualité dans l'industrie automobile.",
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

  // Send the score to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'quizNorme.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(score);
    }
  };
  xhr.send('score=' + score);

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
content.insertAdjacentHTML('beforeend', '<button id="retourAccueil" class="submit-button" type="click">Retour à l\'accueil</button>');
const retourAccueilButton = document.getElementById('retourAccueil');

// Ajoutez un gestionnaire d'événement pour le clic sur le bouton
retourAccueilButton.addEventListener('click', function() {
  var currentUrl = window.location.href;
  var parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
  var grandParentUrl = parentUrl.substring(0, parentUrl.lastIndexOf("/"));

  // Afficher le chemin d'accès au dossier parent (last)
  console.log(grandParentUrl);
  window.location.href = grandParentUrl + '/MOA/x.html';
});
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

const retourAccueilButton = document.getElementById('retourAccueil');

// Ajoutez un gestionnaire d'événement pour le clic sur le bouton
retourAccueilButton.addEventListener('click', function() {
 
  var currentUrl = window.location.href;
  var parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
  var grandParentUrl = parentUrl.substring(0, parentUrl.lastIndexOf("/"));

// Afficher le chemin d'accès au dossier parent (last)
  console.log(grandParentUrl);
  window.location.href=grandParentUrl+'/MOA/x.html';
});