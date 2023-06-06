let contentDiv = document.getElementById('quizz');
contentDiv.addEventListener('submit', reponsesQuizz);

let answers = ['b', 'b', 'd', 'a', 'd', 'd', 'd', 'd', 'a', 'd'];

function reponsesQuizz(event) {
  event.preventDefault();

  let isAnyCheckboxChecked = false;
  let htmlll = '';

  for (let i = 0; i < 10; i++) {
    const checkboxes = document.querySelectorAll(`input[name="q${i}"]:checked`);

    if (checkboxes.length > 0) {
      isAnyCheckboxChecked = true;

      const userAnswer = checkboxes[0].value;
      const correctAnswer = answers[i];

      if (userAnswer === correctAnswer) {
        htmlll += `<p>Question ${i + 1}: Correct answer</p>`;
      } else {
        htmlll += `<p>Question ${i + 1}: Incorrect answer. Correct answer is ${correctAnswer}</p>`;
      }
    }
  }

  if (!isAnyCheckboxChecked) {
    alert("Veuillez répondre à toutes les questions");
    return false;
  }

  var contentDiv = document.querySelector('.quizzdiv');
  contentDiv.innerHTML += htmlll;
}
