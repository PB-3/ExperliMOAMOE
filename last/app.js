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
function delais_affichage() {
  let contentDiv = document.querySelector(".delais_jour");
  contentDiv.innerHTML = `<p>${delais_jour}</p>`;
}

function element_check(event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = [];

  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === "radio" && element.checked) {
      selectedChoice.push(element.value);
    }
  }

  console.log(selectedChoice);
  return selectedChoice;
}

var delais_jour = 0;
var choix_let_MOE = 0;
var rien_faire = 0;
var besoinsValue;
var budgetValue;
var delaisValue;
var suiviValue;
var objectifValue;
var choixNonSelectionnes = [];
var choixSelectionnes = [];
var choixNonSelectionnesListe = ``;
var choixSelectionnesListe = ``;
var NouvellesFonctionnalites = [];
var NouvellesFonctionnalites = [];
var delaisMap = {
  "bouton-partage": 2,
  "resolution-caracteres-speciaux": 2,
  "site-smartphones-tablettes": 4,
  "temps-chargement": 4,
  "section-actualites": 4,
  personnalisation: 4,
  "chargement-rapide-images": 4,
  "resolution-images": 4,
  "resolution-telechargement": 4,
  "recherche-avancee": 5,
  "traduction-anglais": 6,
  "site-tous-navigateurs": 4,
  "reduction-donnees": 5,
};
var pourcentage =0 ;


// Fonction pour afficher la première étape du jeu
function afficherEtape1() {
  updateProgressBar();
  delais_affichage();
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
      <h1>ExperliMOAMOE</h1>
      <p>Dans cette partie du jeu, vous incarnez le rôle de la Maîtrise d'Œuvre (MOE). Votre responsabilité est de mettre en œuvre le projet en tenant compte des besoins, du budget et des délais établis par la Maîtrise d'Ouvrage (MOA). Vous devrez créer une structure de pilotage pour assurer un suivi régulier avec la MOA, où vous effectuerez des évaluations périodiques pour mesurer l'avancement du projet. Votre objectif principal est de respecter les délais et le budget tout en garantissant que le site web soit performant au maximum de ses capacités.</p>
     
    </div>
    <button class="btn-continuer">Continuer</button>
  `;
  updateProgressBar();
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape2);
}

// Fonction pour afficher l'étape 2 du jeu
function afficherEtape2() {
  updateProgressBar();
  delais_affichage();
  var contentDiv = document.querySelector(".content");
  testHTML("infos_projets_debut.html", function () {
    const choixForm = document.getElementById("choixForm");
    choixForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
       // Récupération des valeurs du formulaire
  var besoins = document.getElementById("besoins").value;
  var budget = document.getElementById("budget").value;
  var delais = document.getElementById("delais").value;
  var reunionSelect = document.getElementById("reunionSelect").value;
  var objectif = document.getElementById("objectif").value;

  // delais jour

  if (reunionSelect == "3jours") {
    delais_jour += 2;
  }
  if (reunionSelect == "2semaine") {
    delais_jour += 5;
  }
  if (reunionSelect == "1mois") {
    delais_jour += 8;
  }
      updateProgressBar();
      afficherEtape3();
    });
  });
}

// Fonction pour afficher l'étape 3 du jeu
function afficherEtape3() {
  updateProgressBar();
  delais_affichage();

  var contentDiv = document.querySelector(".content");
  testHTML("choix_fonctionnalites_debut.html", function () {
    delais_affichage();
    updateProgressBar();
    const choixForm = document.getElementById("choixForm");

    choixForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

      const checkboxes = document.querySelectorAll('input[name="choix"]');
      console.log('lenght', checkboxes.length)

      var isAnyCheckboxChecked = false; // Variable pour suivre si au moins une case est cochée

      checkboxes.forEach(function (checkbox) {
        var value = checkbox.value;
        if (value === "rien-faire") rien_faire += 1;
        if (checkbox.checked) {
          isAnyCheckboxChecked = true; // Met à true si une case est cochée
          choixSelectionnes.push(value);

          if (value == "site-smartphones-tablettes") {
            NouvellesFonctionnalites.push(value);
          } else if (value == "bouton-partage") {
            NouvellesFonctionnalites.push(value);
          } else if (value == "recherche-avancee") {
            NouvellesFonctionnalites.push(value);
          } else if (value == "section-actualites") {
            NouvellesFonctionnalites.push(value);
          } else if (value == "personnalisation") {
            NouvellesFonctionnalites.push(value);
          } else if (value == "traduction-anglais") {
            NouvellesFonctionnalites.push(value);
          }

          for (var key in delaisMap) {
            if (key === value) {
              delais_jour += delaisMap[key];
              break;
            }
          }
        }
      });

      if (isAnyCheckboxChecked) {
        // Au moins une case est cochée, permet la soumission du formulaire
        choixSelectionnes.forEach(function (choix) {
          choixSelectionnesListe += `<li>${choix}</li>`;
        });
        choixSelectionnesListe += "</ul>";

        var choixNonSelectionnesListe = ""; // Réinitialise la liste des choix non sélectionnés

        checkboxes.forEach(function (checkbox) {
          if (!checkbox.checked) {
            choixNonSelectionnesListe += `<li>${checkbox.value}</li>`;
          }
        });

        choixNonSelectionnesListe += "</ul>";

        var contentDiv = document.querySelector(".content");
        contentDiv.innerHTML = "";

        if (delais_jour >= 10) {
          delais_affichage();
          updateProgressBar();
          let htmll = `
            <p>Le chef de projet vous indique que les délais sont envisageables si tout se passe parfaitement, mais son expérience lui a appris que ce cas n'arrive que très rarement. Il vous propose de rallonger les délais ou d'enlever certaines fonctionnalités. Vous ne voulez pas rallonger les délais.</p>
            <br>
            <p>Supprimer un ou plusieurs choix parmi :</p>`;

          choixSelectionnes.forEach(function (choix) {
            htmll += `<ul class="no-bullets">
              <li>
                <input type="checkbox" id="${choix}" name="choix" value="${choix}">
                <label for="${choix}">${choix}</label>
              </li>
            </ul>`;
          });

          contentDiv.innerHTML += `
            <form id="choixForm">
              ${htmll}
              <button class="btn-continuer">Next</button>
            </form>`;

          var choixForm = document.getElementById("choixForm");
          choixForm.addEventListener("submit", afficherEtape4);
        } 
        else if (delais_jour < 10) {

          delais_affichage();
          updateProgressBar();
          console.log("delais<10");
          var contentDiv = document.querySelector(".content");

          let htmll = `<p>Choix non sélectionnés :</p>
    
            <p>Le chef de projet vous indique que son équipe n'aura pas de difficulté à répondre à vos demandes et que les délais seront largement respectés. Il vous propose de rajouter quelques fonctionnalités qui s'inscrivent dans les délais demandés (Attention au budget quand même).</p>`;

          checkboxes.forEach(function (checkbox) {
            if (!checkbox.checked) {
              htmll += `<ul class="no-bullets">
                <li>
                  <input type="checkbox" id="${checkbox.value}" name="choix" value="${checkbox.value}">
                  <label for="${checkbox.value}">${checkbox.value}</label>
                </li>
              </ul>`;
            }
          });

          contentDiv.innerHTML += `
            <form id="choixForm">
              ${htmll}
              <button class="btn-continuer" type="submit">Next</button>
            </form>`;

          var btnContinuer = document.getElementById("choixForm");
          btnContinuer.addEventListener("submit", afficherEtape4);
        }
      } else {
        // Aucune case n'est cochée, empêche la soumission du formulaire
        alert("Veuillez sélectionner au moins une option.");
        return false;
      }
    });
  });
}


function afficherEtape4(event) {
  updateProgressBar();
  delais_affichage();
  let isAnyCheckboxChecked =false;
  console.log("etape4");
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  const checkboxes = document.querySelectorAll('input[name="choix"]');
  checkboxes.forEach(function (checkbox) {
    value = checkbox.value;
    if (value === "rien-faire") rien_faire += 1;
    if (checkbox.checked) {
      isAnyCheckboxChecked = true;}});

    if(isAnyCheckboxChecked){
     
    checkboxes.forEach(function (checkbox){
      if(checkbox.checked){
      if (delais_jour >= 10) {
        delais_jour -= delaisMap[checkbox.value];
      } else if (delais_jour < 10) {
        delais_jour += delaisMap[checkbox.value];
      }
      console.log(delais_jour);
    }
    
  });
}
else{
  alert("Veuillez sélectionner au moins une option.");
  return false;
}
  
  updateProgressBar();
  afficherEtape5();
}

// Fonction pour afficher l'étape 5 du jeu
function afficherEtape5() {
  delais_affichage();
  updateProgressBar();
  var contentDiv = document.querySelector(".content");
  testHTML("Moe_test_mid_version.html", function () {
    var choix = document.getElementById("choixForm");
    choix.addEventListener("submit", function (event) {
      event.preventDefault();
      var form = event.target;
      var selectedChoice = null;

      // Parcours des éléments du formulaire pour trouver le choix sélectionné
      for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        if (element.type === "radio" && element.checked) {
          selectedChoice = element.value;
          break;
        }
      }
      if(selectedChoice==null)
      {
        alert("Veuillez sélectionner au moins une option.");
        return false;
      }
      if (selectedChoice === "tester") {
        delais_jour += 5;
        console.log("deali");
      } else {
        rien_faire += 1;
        console.log("rien");
      }
      updateProgressBar();
      afficherEtape6();
    });
  });
}

// Fonction pour afficher l'étape 6 du jeu
function afficherEtape6() {
  delais_affichage();
  updateProgressBar();
  var contentDiv = document.querySelector(".content");
  testHTML("site_teste_satisfait.html", function () {
    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", afficherEtape7);
  });
}

// Fonction pour afficher l'étape 7 du jeu
function afficherEtape7() {
  delais_affichage();
  updateProgressBar();
  var contentDiv = document.querySelector(".content");
  testHTML("cas_choix_vacances/choix_partir_vac.html", function (event) {
    var choixForm = document.getElementById("choixForm");
    choixForm.addEventListener("submit", afficherEtape8);
  });
}

function afficherEtape8(event) {
  delais_affichage();
  updateProgressBar();
  var contentDiv = document.querySelector(".content");

  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === "radio" && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }

  if (selectedChoice == "accepter" && selectedChoice != null) {
    testHTML("cas_choix_vacances/page_accept_vac.html", function () {
      delais_affichage();
      updateProgressBar();
      var choixForm = document.querySelector('.btn-continuer');
      choixForm.addEventListener("click", afficherEtape10);
    });
  } else if (selectedChoice == "refuser" && selectedChoice != null) {
    testHTML("cas_choix_vacances/page_refuser_vac.html", function () {
      delais_affichage();
      updateProgressBar();
      var choixForm = document.getElementById("choixForm");
      choixForm.addEventListener("submit", afficherEtape9);
    });
  } else if (selectedChoice == null) {
    alert("Veuillez sélectionner au moins une option.");
    return false;
  }
  
}
function afficherEtape9(event) {
  delais_affichage();
  updateProgressBar();
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;
  var contentDiv = document.querySelector(".content");

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === "radio" && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }

  if (selectedChoice == null) {
    alert("Veuillez sélectionner au moins une option.");
    return false;
  }

  if (selectedChoice === "abandonner-fonctionnalite") {
    var htmlll = "";
    NouvellesFonctionnalites.forEach(function (fonctionnalite) {
      htmlll += `<li>
                 <input type="radio" id="${fonctionnalite}" name="choix" value="${fonctionnalite}">
                 <label for="${fonctionnalite}">${fonctionnalite}</label>
               </li>`;
    });

    contentDiv.innerHTML = `<h2>Choix multiple</h2>
    <p>Description :</p>
    <p>Quelle fonctionnalité souhaitez-vous annuler?</p>
    <p>Choix disponible :</p>
    <form id="choixForm">
      <ul class="no-bullets">
        ${htmlll}
      </ul>
      <button class="btn-continuer" type="submit">Next</button>
    </form>`;

    var choixForm = document.getElementById("choixForm");
    choixForm.addEventListener("submit", function (event) {
      fonctionnalite_abandon(event, NouvellesFonctionnalites);
    });

    if (selectedChoice == null) {
      alert("Veuillez sélectionner au moins une option.");
      return false;
    }

    console.log("Vous avez choisi d'abandonner une autre fonctionnalité.");
  } else if (selectedChoice === "ne-rien-faire") {
    afficherEtape10();
    console.log("Vous avez choisi de ne rien faire.");
  } else if (selectedChoice === "resoudre-probleme") {
    afficherEtape10();
    console.log("Vous avez choisi de résoudre le problème.");
  } else if (selectedChoice === "abandonner-fonctionnalite") {
    console.log("Vous avez choisi d'abandonner la fonctionnalité.");
  } else if (selectedChoice === "laisser-choix-moe") {
    afficherEtape10();
    console.log("Vous avez choisi de laisser le choix à la MOE.");
  }
}



function afficherEtape10() {
  delais_affichage();
  updateProgressBar();
  var contentDiv = document.querySelector(".content");
  testHTML("page_test_supp.html", function (event) {
    var choixForm = document.getElementById("choixForm");

    // Vérifier si l'événement d'écoute a déjà été attaché
    if (!choixForm.hasAttribute("data-event-attached")) {
      choixForm.setAttribute("data-event-attached", "true"); // Marquer l'événement comme étant attaché

      choixForm.addEventListener("submit", afficherEtape11);
    }

    // Ajouter un écouteur d'événement pour les changements de choix
    var choixRadios = choixForm.elements["choix"];
    for (var i = 0; i < choixRadios.length; i++) {
      choixRadios[i].addEventListener("change", function (event) {
        // Récupérer la valeur du choix sélectionné
        var selectedChoice = event.target.value;
        console.log("Choix sélectionné :", selectedChoice);
      });
    }

    
  });
}



function fonctionnalite_abandon(event, liste) {
  delais_affichage();
  updateProgressBar();
  console.log("fonc");
  var contentDiv = document.querySelector(".content");

  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === "radio" && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }
  
  console.log(liste);
  var index = liste.indexOf(selectedChoice);
  if (index !== -1) {
    liste.splice(index, 1);
    console.log("delais", delais_jour);
    delais_jour -= delaisMap[selectedChoice];
    console.log("delais apres ", delais_jour);
    console.log(liste);
    updateProgressBar();
    afficherEtape10();
  }
}

function afficherEtape11(event) {
  delais_affichage();
  updateProgressBar();
  var contentDiv = document.querySelector(".content");

  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === "radio" && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }
  if (selectedChoice == null) {
    alert("Veuillez sélectionner au moins une option.");
    return false;
  }
  if (selectedChoice === "ne-faire-aucun-test") {
    afficher_9_bis();
  } else {
    afficher_page_9();
  }
}

function afficher_page_9() {
  delais_affichage();
  updateProgressBar();
  var contentDiv = document.querySelector(".content");
  testHTML("Correction_problemes_fin.html", function (event) {
    var choixForm = document.getElementById("choixForm");
    choixForm.addEventListener("submit", afficherEtape12);
  });
}

function afficher_9_bis() {
  delais_affichage();
  updateProgressBar();
  var contentDiv = document.querySelector(".content");
  testHTML("aucun_test_page9.html", function (event) {
    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", page_fin);
  });
}

function afficherEtape12(event) {
  delais_affichage();
  updateProgressBar();
  var contentDiv = document.querySelector(".content");

  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === "radio" && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }
  if (selectedChoice == null) {
    alert("Veuillez sélectionner au moins une option.");
    return false;
  }
  var choixx = {
    "corriger-mineurs": 2,
    "corriger-ensemble": 3,
    "corriger-majeur": 5,
    "ne-rien-faire": 0,
    "laisser-choix-moe": 5,
  };
  for (var key in choixx) {
    if (selectedChoice == key) {
      page_fin();
      delais_jour += choixx[selectedChoice];
    }
  }
}

function page_fin() {
  
  var contentDiv = document.querySelector(".content");
  testHTML("pagefin.html", function (event) {
    contentDiv.innerHTML += `<p> Delais en jours rajoutés durant le projet : ${delais_jour} </p>
    <button class="btn-continuer" id="quizzz", type="submit">Quizz</button>`;
    delais_affichage(); 
    updateProgressBar(); 
    btnContinuer=document.getElementById('quizzz');
    btnContinuer.addEventListener('click',quizz);

  });
}
function quizz()
{
  window.location.href='quizzMOA.html';
}
afficherEtape1();
updateProgressBar();


// Utilisez cette fonction pour mettre à jour la barre de progression à chaque changement de pourcentage
updateProgressBar();

function updateProgressBar() {
var pourcentage = (delais_jour/50) * 100

if (delais_jour>= 48 ) {
  if (delais_jour<=50 ) {
    var pourcentageOppose = Math.abs(pourcentage - 100);
    var progressBar = document.querySelector(".progress");
    progressBar.style.width = pourcentageOppose + "%";
  }
  
    
  else {
    var progressBar = document.querySelector(".progress");
  progressBar.style.width = "100%"; // Remplir la barre à 100%
  progressBar.style.background = "#eb4343"; // Changer la couleur de fond en #ff0000
  progressBar.innerHTML = "Délai dépassé /!\\";

  }  
}

else{
var pourcentageOppose = Math.abs(pourcentage - 100);
var pourcentageOppose = pourcentageOppose + (pourcentageOppose * 0.05);

var progressBar = document.querySelector(".progress");
progressBar.style.width = pourcentageOppose + "%";
}
}
