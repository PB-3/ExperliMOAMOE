function testHTML(url, callback) {
  var contentDiv = document.querySelector(".content");

  fetch(url)
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;  
      if (callback) {
        callback(); // Appel de la fonction callback si elle est définie
      }
    })
    .catch(error => {
      console.log("Une erreur s'est produite lors de la récupération du fichier HTML :", error);
    });
}

function element_check(event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = [];

  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice.push(element.value);
    }
  }

  console.log(selectedChoice);
  return selectedChoice;
}

function generateRandomNumber(X) {
  // Génère un nombre aléatoire entre 0 et 3
  var randomNumber = Math.floor(Math.random() * X);

  // Ajoute 1 au nombre pour obtenir une plage de 1 à 4
  var finalNumber = randomNumber + 1;

  return finalNumber;
}

// Utilisation de la fonction pour générer un nombre aléatoire
var randomNum = generateRandomNumber();
console.log(randomNum);



var NouvellesFonctionnalites = {
  "Sites disponible sur smartphone et tablettes" : 8,
  "Système de recherche avancée pour trouver rapidement des informations cherchées" : 6,
  "Une section « Actualités » pour voir les dernières mises à jour et fonctionnalités" : 5,
  "Option permettant de personnaliser la couleur, la mise en page, le thème" : 5,
  "Traduction du site en anglais" : 7,
};

var AmeliorationPerformances = {
  "Temps de chargement de la page d’accueil plus court" : 4,
  "Votre site sera disponible sur tous les navigateurs" : 5,
  "Chargement plus rapide des images" : 5,
  "Réduction de la consommation de données" : 6,
};

var CorrectionsDeBugs = {
  "Résolution du problème d’affichage des caractères spéciaux" : 3,
  "Résolution du problème qui empêchait l’affichage correct des images sur certaines pages" : 5,
  "Résolution du problème qui empêchait certains utilisateurs de télécharger des fichiers du site" : 5,
};


// Fonction pour afficher la première étape du jeu
function afficherEtape1() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
      <h1>ExperliMOAMOE</h1>
      <p>Dans cette partie du jeu, vous incarnez le rôle de la Maîtrise d'Œuvre (MOE). Votre responsabilité est de mettre en œuvre le projet en tenant compte des besoins, du budget et des délais établis par la Maîtrise d'Ouvrage (MOA). Vous devrez créer une structure de pilotage pour assurer un suivi régulier avec la MOA, où vous effectuerez des évaluations périodiques pour mesurer l'avancement du projet. Votre objectif principal est de respecter les délais et le budget tout en garantissant que le site web soit performant au maximum de ses capacités.</p>
      <button class="btn-continuer">Continuer</button>
    </div>
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape2);
}


// Fonction pour afficher l'étape 2 du jeu
function afficherEtape2() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML =  `
    <div class="container">
	    <h2>Note de lancement</h2>
	    <p>La MOA vous indique qu’elle souhaite que le site soit prêt en 2 mois, avec un coût de X€ et souhaite faire une réunion par semaine pour avoir un suivi continu du projet.</p>
	    <p>Elle vous donne les besoins principaux du projet et vous rédigez une première note de lancement avec les différentes options qui vous semblent cohérentes pour répondre aux besoins énoncés.</p>
    </div>
    <button class="btn-continuer" , type="submit">Continuer</button>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape3);
}

function afficherEtape3() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page7-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page7">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var form = document.getElementById("page7");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    afficherEtape2(); // Exécute l'étape 4
  });
}

function afficherEtape4() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page3-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page3">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape5);
}

function afficherEtape5() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page4-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page4">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape6);
}

function afficherEtape6() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page5-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page5">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape7);
}

function afficherEtape7() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page6-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page6">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape8);
}

function afficherEtape8() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page7-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page7">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape9);
}

function afficherEtape9() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page8-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page8">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape10);
}

function afficherEtape10() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page9-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page9">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape11);
}

function afficherEtape11() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page10-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page10">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape12);
}

function afficherEtape12() {
  var contentDiv = document.querySelector(".content");
  testHTML("Page11-MOE.html");
  contentDiv.innerHTML =  `
  <form id="page11">
    ${htmll}
    <button class="btn-continuer" type="submit">Next</button>
  </form>`;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape1);
}
  
afficherEtape1();