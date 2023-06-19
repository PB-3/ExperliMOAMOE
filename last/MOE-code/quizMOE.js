// Array of correct answers
let answers = [['b'],['a', 'c', 'd'],['b'],['a'],['a'],['a', 'd'],['c'],['c'],['a'],['a', 'b', 'd']];

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
      score++;
    }
  }

  // Show the score
  const content = document.querySelector('.quizzdiv');
  content.innerHTML = ''; // Clear previous content

  const scoreMessage = `Your score: ${score} out of ${answers.length}`;
  const scoreElement = document.createElement('p');
  scoreElement.innerHTML = scoreMessage;
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
document.getElementById('quiz').addEventListener('submit', function (event) {
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