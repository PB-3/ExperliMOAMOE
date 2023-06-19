let contentDiv = document.getElementById('quizz');
contentDiv.addEventListener('submit', reponsesQuizz);

let answers = ['b', 'b', 'd', 'a', 'd', 'd', 'd', 'd', 'a', 'd'];
let joueur_reponse=[];

function reponsesQuizz(event) {
  event.preventDefault();
  var contentDiv = document.querySelector('.result');
  contentDiv.innerHTML=``;
  let isAnyCheckboxChecked = false;
  let htmlll = '';

  for (let i = 0; i < 10; i++) {
    const checkboxes = document.querySelectorAll(`input[name="q${i+1}"]:checked`);

    if (checkboxes.length > 0) {
      isAnyCheckboxChecked = true;

      const userAnswer = checkboxes[0].value;
      const correctAnswer = answers[i];

      if (userAnswer === correctAnswer) {
        
      } else {
        htmlll += `<p>Question ${i + 1}: Incorrect answer. Correct answer is ${correctAnswer}</p>`;
      }
    }
  }

  if (!isAnyCheckboxChecked) {
    alert("Veuillez répondre à toutes les questions");
    return false;
  }

  
  quiz_reponse();
}

function quiz_reponse() {
  

  var r1 = document.getElementById('r1');
  r1.innerHTML = '<h2>Question 1</h2><p>This is the first question.</p>';

  window.location.href = "quiz_reponse.html";
  

}