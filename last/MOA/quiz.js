let contentDiv = document.getElementById('quizz');
contentDiv.addEventListener('submit', reponsesQuizz);

let answers = ['a', 'b', 'b', 'a', 'd', 'a', 'b', 'b', 'a', 'd'];
let explain = ["<p>Réponse fausse</p>", "<p>La MOA doit comprendre les besoins des futures utilisateurs.</p>", "<p>Réponse fausse</p>", "<p>Réponse fausse</p>", "<p>Réponse fausse</p>", "<p>Réponse fausse</p>", "<p>Réponse fausse</p>", "<p>Réponse fausse</p>", "<p>Réponse fausse</p>", "<p>Réponse fausse</p>"];
let player_answers = [];

function reponsesQuizz(event) {
  event.preventDefault();
  var contentDiv = document.querySelector('.result');
  let res=document.getElementById('restart');
  res.addEventListener('click',function (){
    window.location.href = "quizzMOA.html";
    return;
  })
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
        htmlll += player_answers.push(1);
      } else {
        htmlll += player_answers.push(0);
      }
    }
  }

  if (!isAnyCheckboxChecked) {
    alert("Veuillez répondre à toutes les questions");
    return false;
  }

  contentDiv.innerHTML += htmlll;
  page_Reponse();
}








function page_Reponse() {
  var contentDiv = document.querySelector(".content");
  testHTML("quiz_reponse.html", function () {
    for (let i = 0; i < 10; i++) {
      var divElement = document.getElementById("r" + i);
      if (player_answers[i] == 1) {
        divElement.innerHTML = "<p>Bonne réponse.</p>";
      } else {
        divElement.innerHTML = explain[i];
      }
    }
  });
}

function testHTML(url, callback) {
  var contentDiv = document.querySelector(".content");
  delais_affichage();
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
      if (callback) {
        callback(); // Appel de la fonction callback si elle est définie
      }
    })
    .catch((error) => {
      console.log(
        "Une erreur s'est produite lors de la récupération du fichier HTML :",
        error
      );
    });
}
