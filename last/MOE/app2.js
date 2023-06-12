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

function updateDelay(checkbox, jours) {
  if (checkbox.checked) {
    delais_jour += parseInt(jours);
  }
}

function updateDelayNegative(checkbox, jours) {
  if (checkbox.checked) {
    delais_jour -= parseInt(jours);
  }
}


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


var nouvellesFonctionnalites = [
  { description: "Site disponible sur smartphones et tablettes", jours: 8 },
  { description: "Bouton de partage pour partager facilement sur les réseaux sociaux", jours: 3 },
  { description: "Système de recherche avancée pour trouver rapidement des informations cherchées", jours: 6 },
  { description: "Une section « Actualités » pour voir les dernières mises à jour et fonctionnalités", jours: 5 },
  { description: "Option permettant de personnaliser la couleur, la mise en page, le thème…", jours: 5 },
  { description: "Traduction du site en anglais", jours: 7 }
];

var ameliorationsPerformances = [
  { description: "Temps de chargement de la page d’accueil plus court", jours: 4 },
  { description: "Votre site sera disponible sur tous les navigateurs", jours: 5 },
  { description: "Chargement plus rapide des images", jours: 5 },
  { description: "Réduction de la consommation de données", jours: 6 }
];

var correctionsBugs = [
  { description: "Résolution du problème d’affichage des caractères spéciaux", jours: 3 },
  { description: "Résolution du problème qui empêchait l’affichage correct des images sur certaines pages", jours: 5 },
  { description: "Résolution du problème qui empêchait certains utilisateurs de télécharger des fichiers du site", jours: 5 }
];
var pourcentage =0 ;
var choixSelectionnes = [];
var choixNonSelecionnes = [];
var FonctionnalitésSelec = [];
var FonctionnalitésNonSelec = [];
var AméliorationsSelec = [];
var AméliorationsNonSelec = [];
var BugsSelec = [];
var delais_jour = 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Fonction pour afficher la première étape du jeu
function afficherEtape1() {
  delais_affichage(); 
  updateProgressBar(); 
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
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML =  `
    <div class="container">
	    <h2>Note de lancement</h2>
	    <p>La MOA vous indique qu’elle souhaite que le site soit prêt en 2 mois, avec un coût de 100 000€ et souhaite faire une réunion par semaine pour avoir un suivi continu du projet.</p>
	    <p>Elle vous donne les besoins principaux du projet et vous rédigez une première note de lancement avec les différentes options qui vous semblent cohérentes pour répondre aux besoins énoncés.</p>
      <button class="btn-continuer">Continuer</button>
    </div>
  `;
  
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape3);
}

// Fonction pour afficher l'étape 3 du jeu
function afficherEtape3() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  var nouvellesFonctionnalitesCount = getRandomNumber(1, 4);
  var ameliorationsPerformancesCount = getRandomNumber(1, 3);

  var choixSelectionnesTemp = [];

  for (var i = 0; i < nouvellesFonctionnalitesCount; i++) {
    var randomIndex = getRandomNumber(0, nouvellesFonctionnalites.length - 1);
    var fonctionnalite = nouvellesFonctionnalites[randomIndex];

    if (!choixSelectionnesTemp.includes(fonctionnalite.description)) {
      choixSelectionnesTemp.push(fonctionnalite.description);
      FonctionnalitésSelec.push(fonctionnalite);
      delais_jour += fonctionnalite.jours;
    }
  }

  for (var i = 0; i < ameliorationsPerformancesCount; i++) {
    var randomIndex = getRandomNumber(0, ameliorationsPerformances.length - 1);
    var amelioration = ameliorationsPerformances[randomIndex];

    if (!choixSelectionnesTemp.includes(amelioration.description)) {
      choixSelectionnesTemp.push(amelioration.description);
      AméliorationsSelec.push(amelioration);
      delais_jour += amelioration.jours;
    }
  }

  correctionsBugs.forEach(function (bug) {
    if (!choixSelectionnesTemp.includes(bug.description)) {
      choixSelectionnesTemp.push(bug.description);
      BugsSelec.push(bug);
      delais_jour += bug.jours;
    }
  });

  FonctionnalitésNonSelec = nouvellesFonctionnalites.filter(function (fonctionnalite) {
    return !choixSelectionnesTemp.includes(fonctionnalite.description);
  });

  AméliorationsNonSelec = ameliorationsPerformances.filter(function (amelioration) {
    return !choixSelectionnesTemp.includes(amelioration.description);
  });

  var htmll = "<h1>Résumé des choix effectués :</h1>";

  htmll += "<h2>Nouvelles fonctionnalités sélectionnées :</h2>";
  htmll += '<ul class="no-bullets">';
  FonctionnalitésSelec.forEach(function (fonctionnalite) {
    htmll += "<li>" + fonctionnalite.description + " (+" + fonctionnalite.jours + " jours)</li>";
  });
  htmll += "</ul>";

  htmll += "<h2>Améliorations des performances sélectionnées :</h2>";
  htmll += '<ul class="no-bullets">';
  AméliorationsSelec.forEach(function (amelioration) {
    htmll += "<li>" + amelioration.description + " (+" + amelioration.jours + " jours)</li>";
  });
  htmll += "</ul>";

  htmll += "<h2>Corrections de bugs sélectionnées :</h2>";
  htmll += '<ul class="no-bullets">';
  BugsSelec.forEach(function (bug) {
    htmll += "<li>" + bug.description + " (+" + bug.jours + " jours)</li>";
  });
  htmll += "</ul>";

  htmll += '<button class="btn-continuer">Continuer</button>';

  contentDiv.innerHTML = htmll;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape3bis);
}


function afficherEtape3bis(event) {
  delais_affichage(); 
  updateProgressBar(); 
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

  testHTML("Page3bis-MOE.html", function() {
    var form = document.getElementById("page3bis");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Traitements spécifiques à l'étape 6
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "rajout") {
          afficherEtape4_1(event); // Aller à l'étape 4_1
        } else if (valeurChoix === "accepter") {
          afficherEtape5(event); // Aller à l'étape 5
        } else if (valeurChoix === "supprimer") {
          afficherEtape4_2(event); // Aller à l'étape 4_2
        }
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });

    // Ajoutez l'écouteur d'événement pour le bouton "Continuer" ici, à l'intérieur de la fonction testHTML
    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", function(event) {
      event.preventDefault();

      // Vérifiez si une option est sélectionnée avant de permettre la poursuite de l'étape
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "rajout") {
          afficherEtape4_1(event); // Aller à l'étape 4_1
        } else if (valeurChoix === "accepter") {
          afficherEtape5(event); // Aller à l'étape 5
        } else if (valeurChoix === "supprimer") {
          afficherEtape4_2(event); // Aller à l'étape 4_2
        }
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });
  });
}

function afficherEtape4_1() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  var htmll = "<h2>Ajouts de d'option :</h2>";

  htmll += "<p>Vous reprenez les choix avec la MOA afin de rajouter des options.</p>";

  htmll += "<h2>Nouvelles fonctionnalités non sélectionnées :</h2>";
  htmll += '<ul class="no-bullets">';
  FonctionnalitésNonSelec.forEach(function (fonctionnalite) {
    htmll += '<li><input type="checkbox" id="' + fonctionnalite.id + '" onchange="updateDelay(this, ' + fonctionnalite.jours + ')">';
    htmll += '<label for="' + fonctionnalite.id + '">' + fonctionnalite.description + " (" + fonctionnalite.jours + " jours)</label></li>";
  });
  htmll += "</ul>";

  htmll += "<h2>Améliorations des performances non sélectionnées :</h2>";
  htmll += '<ul class="no-bullets">';
  AméliorationsNonSelec.forEach(function (amelioration) {
    htmll += '<li><input type="checkbox" id="' + amelioration.id + '" onchange="updateDelay(this, ' + amelioration.jours + ')">';
    htmll += '<label for="' + amelioration.id + '">' + amelioration.description + " (" + amelioration.jours + " jours)</label></li>";
  });
  htmll += "</ul>";
  htmll += '<button class="btn-continuer">Continuer</button>';

  contentDiv.innerHTML = htmll;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape6);
  }

function afficherEtape4_2() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  var htmll = "<h2>Suppression d'option :</h2>";
 
  htmll += "<p>Vous reprenez les choix avec la MOA afin d’enlever des options.</p>";
  htmll += "<h2>Fonctionnalités sélectionnées :</h2>"
  htmll += '<ul class="no-bullets">';
  FonctionnalitésSelec.forEach(function (choix) {
    htmll += '<li><input type="checkbox" id="' + choix.id + '" onchange="updateDelayNegative(this, ' + choix.jours + ')">';
    htmll += '<label for="' + choix.id + '">' + choix.description + " (" + choix.jours + " jours)</label></li>";
  });
  htmll += "</ul>";

  htmll += "<h2>Améliorations sélectionnées :</h2>"
  htmll += '<ul class="no-bullets">';

  AméliorationsSelec.forEach(function (choix) {
    htmll += '<li><input type="checkbox" id="' + choix.id + '" onchange="updateDelayNegative(this, ' + choix.jours + ')">';
    htmll += '<label for="' + choix.id + '">' + choix.description + " (" + choix.jours + " jours)</label></li>";
  });
  htmll += "</ul>";

  htmll += "<h2>Bugs sélectionnés :</h2>"
  htmll += '<ul class="no-bullets">';

  BugsSelec.forEach(function (choix) {
    htmll += '<li><input type="checkbox" id="' + choix.id + '"/>';
    htmll += '<label for="' + choix.id + '">' + choix.description + " (" + choix.jours + " jours)</label></li>";
  });
  htmll += "</ul>";

  htmll += '<button class="btn-continuer">Continuer</button>';
  
  contentDiv.innerHTML = htmll;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape5);
}
  
  

// Fonction pour afficher l'étape 5 du jeu
function afficherEtape5() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  testHTML("Page5-MOE.html", function () {
    const choixForm = document.getElementById("page5");
    choixForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
      
      // Récupération des valeurs des notes de gravité et de chances d'apparition
      var gravite1 = parseInt(document.getElementById("gravite1").value);
      var chances1 = parseInt(document.getElementById("chances1").value);
      
      var gravite2 = parseInt(document.getElementById("gravite2").value);
      var chances2 = parseInt(document.getElementById("chances2").value);
      
      var gravite3 = parseInt(document.getElementById("gravite3").value);
      var chances3 = parseInt(document.getElementById("chances3").value);
      
      var gravite4 = parseInt(document.getElementById("gravite4").value);
      var chances4 = parseInt(document.getElementById("chances4").value);
      
      var gravite5 = parseInt(document.getElementById("gravite5").value);
      var chances5 = parseInt(document.getElementById("chances5").value); 
      
      var btnContinuer = document.querySelector(".btn-continuer");
      btnContinuer.addEventListener("click", function (event) {
      event.preventDefault();
      var gravite1 = document.getElementById("gravite1").value;
      var chances1 = document.getElementById("chances1").value;

      var gravite2 = document.getElementById("gravite2").value;
      var chances2 = document.getElementById("chances2").value;

      var gravite3 = document.getElementById("gravite3").value;
      var chances3 = document.getElementById("chances3").value;

      var gravite4 = document.getElementById("gravite4").value;
      var chances4 = document.getElementById("chances4").value;

      var gravite5 = document.getElementById("gravite5").value;
      var chances5 = document.getElementById("chances5").value;

      if (gravite1 && chances1 && gravite2 && chances2 && gravite3 && chances3 && gravite4 && chances4 && gravite5 && chances5) {
        afficherEtape6(event);
      } else {
        alert("Veuillez remplir toutes les cases.");
      }
    });
    });
  });
}


function afficherEtape6(event) {
  delais_affichage(); 
  updateProgressBar();  
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

  testHTML("Page6-MOE.html", function() {
    var form = document.getElementById("page6");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Traitements spécifiques à l'étape 6
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "réécriture") {
          updateDelay(choix, 7);
        } else if (valeurChoix === "commentaire") {
          updateDelay(choix, 4);
        } else if (valeurChoix === "reference") {
          updateDelay(choix, 5);
        } else if (valeurChoix === "expert") {
          updateDelay(choix, 3);
        }

        afficherEtape7(event);
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });
  });

  // Ajoutez l'écouteur d'événement pour le bouton "Continuer" ici, à l'extérieur de la fonction testHTML
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", function(event) {
    event.preventDefault();

    // Vérifiez si une option est sélectionnée avant de permettre la poursuite de l'étape
    var choix = document.querySelector('input[name="choix"]:checked');
    if (choix) {
      afficherEtape7(event);
    } else {
      alert("Veuillez sélectionner une option.");
    }
  });
}




function afficherEtape7(event) {
  delais_affichage(); 
  updateProgressBar(); 
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

  testHTML("Page7-MOE.html", function() {
    var form = document.getElementById("page7");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Traitements spécifiques à l'étape 7
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "rien-faire") {
          updateDelay(choix, 5);
        } else if (valeurChoix === "mediateur") {
          updateDelay(choix, 3);
        } else if (valeurChoix === "tps_perso") {
          updateDelay(choix, 1);
        }

        afficherEtape8(event);
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });
  });

  // Ajoutez l'écouteur d'événement pour le bouton "Continuer" ici, à l'extérieur de la fonction testHTML
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", function(event) {
    event.preventDefault();

    // Vérifiez si une option est sélectionnée avant de permettre la poursuite de l'étape
    var choix = document.querySelector('input[name="choix"]:checked');
    if (choix) {
      afficherEtape8(event);
    } else {
      alert("Veuillez sélectionner une option.");
    }
  });
}


  



function afficherEtape8(event) {
  delais_affichage(); 
  updateProgressBar(); 
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

  testHTML("Page8-MOE.html", function() {
    var form = document.getElementById("page8");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Traitements spécifiques à l'étape 8
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "réécriture") {
          updateDelay(choix, 5);
        } else if (valeurChoix === "reconstruction") {
          updateDelay(choix, 10);
        } else if (valeurChoix === "documentation") {
          updateDelay(choix, 4);
        } else if (valeurChoix === "expert") {
          updateDelay(choix, 7);
        }

        afficherEtape9(event);
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });

    // Ajoutez l'écouteur d'événement pour le bouton "Continuer" ici, à l'intérieur de la fonction testHTML
    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", function(event) {
      event.preventDefault();

      // Vérifiez si une option est sélectionnée avant de permettre la poursuite de l'étape
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        afficherEtape9(event);
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });
  });
}


function afficherEtape9(event) {
  delais_affichage(); 
  updateProgressBar(); 
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

  testHTML("Page9-MOE.html", function() {
    var form = document.getElementById("page9");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

        // Traitements spécifiques à l'étape 9
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "ask_MOA") {
          // Actions lorsque "Vous demandez à la MOA s’il y a d'autres fonctionnalités qui lui paraissent essentielles" est choisi
        } else if (valeurChoix === "stop") {
          // Actions lorsque "Vous ne rajoutez rien" est choisi
        } else if (valeurChoix === "initiative") {
          // Actions lorsque "Vous rajoutez une des fonctionnalités proposées par la MOA qui n’a pas été choisie lors du démarrage du projet" est choisi
        }

        afficherEtape10(event);
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });

    // Ajoutez l'écouteur d'événement pour le bouton "Continuer" ici, à l'intérieur de la fonction testHTML
    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", function(event) {
      event.preventDefault();

      // Vérifiez si une option est sélectionnée avant de permettre la poursuite de l'étape
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        afficherEtape10(event);
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });
  });
}

function afficherEtape10(event) {
  delais_affichage(); 
  updateProgressBar(); 
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

  testHTML("Page10-MOE.html", function() {
    var form = document.getElementById("page10");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

        // Traitements spécifiques à l'étape 10
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "expert-dev") {
          // Actions lorsque "Vous décidez de faire appel à un expert en développement pour analyser et résoudre le bug" est choisi
        } else if (valeurChoix === "reaffecter_ekip") {
          // Actions lorsque "Vous choisissez de réaffecter une partie de l'équipe de développement pour résoudre le bug" est choisi
        } else if (valeurChoix === "continuer") {
          // Actions lorsque "Vous demandez à la MOA s’il est possible de reporter la résolution du bug à la phase de maintenance ultérieure du site" est choisi
        }

        afficherEtape11(event);
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });

    // Ajoutez l'écouteur d'événement pour le bouton "Continuer" ici, à l'intérieur de la fonction testHTML
    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", function(event) {
      event.preventDefault();

      // Vérifiez si une option est sélectionnée avant de permettre la poursuite de l'étape
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        afficherEtape11(event);
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });
  });
}

function afficherEtape11(event) {
  delais_affichage(); 
  updateProgressBar(); 
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

  testHTML("Page11-MOE.html", function() {
    var form = document.getElementById("page11");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Traitements spécifiques à l'étape 11
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "diminuer-qualite") {
          // Actions lorsque "Vous réduisez la qualité des fonctionnalités pour être sûr d’être dans les temps" est choisi
        } else if (valeurChoix === "continuer") {
          // Actions lorsque "Vous continuez sur votre lancée car vous ne pensez pas avoir besoin de plus de temps" est choisi
        }

        afficherEtapeFin_Bad_Option();
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });

    // Ajoutez l'écouteur d'événement pour le bouton "Continuer" ici, à l'intérieur de la fonction testHTML
    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", function(event) {
      event.preventDefault();

      // Vérifiez si une option est sélectionnée avant de permettre la poursuite de l'étape
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        afficherEtapeFin_Bad_Option();
      } else {
        alert("Veuillez sélectionner une option.");
      }
    });
  });
}

function afficherEtapeFin_Bad_Option() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
    <h1>Votre projet est incomplet</h1>
    <p>Lors du rendu du projet, le site propose peu d’options.</p>
    <p>Vous auriez pu proposer un site plus complet mais vous avez surestimé la quantité de travail initiale</p>
    <p>et vous vous êtes retrouvés à finir votre projet bien avant la limite imposée, cela déplaît à la MOA.</p>
    <button class="btn-continuer">Continuer</button>
    </div>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtapeFin_Bad_Time);
}

function afficherEtapeFin_Bad_Time() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
      <h1>Votre projet n’est pas près dans les délais.</h1>
      <p>Même si le projet a eu plusieurs problèmes, vous auriez dû limiter les dégâts et vous adapter en conséquence.</p>
      <p>Le commanditaire est furibond.</p>
      <button class="btn-continuer">Continuer</button>
    </div>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtapeFin_Good);
}

function afficherEtapeFin_Good() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title"> 
      <h1>Votre projet est dans les délais</h1>
      <p>Vous avez réussi à mener votre barque à travers les problèmes.</p>
      <p>Le commanditaire est satisfait.</p>
      <button class="btn-continuer">Continuer</button>
    </div>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtapeFin_GoodwMark);
}

function afficherEtapeFin_GoodwMark() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title"> 
    <h1>Votre projet est dans les délais</h1>
    <p>Même si vous avez fait des concessions, votre avance a permis de tout remettre au propre avant la fin du projet.</p>
    <p>Le commanditaire est satisfait.</p>
    <button class="btn-continuer">Continuer</button>
    </div>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtapeFin_Mid_MOE);
}

function afficherEtapeFin_Mid_MOE() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title"> 
    <h1>Votre projet est dans les délais</h1>
    <p>Même s’il y a eu des concessions, le projet a été rendu à temps.</p>
    <p>Cependant, le commanditaire n’est pas totalement satisfait du résultat final.<p>
    <button class="btn-continuer">Continuer</button>
    </div>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape2);
}


afficherEtape1();
updateProgressBar();


