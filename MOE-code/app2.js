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
  var pourcentage = (delais_jour / 50) * 100;

  if (delais_jour >= 48) {
    if (delais_jour <= 50) {
      var pourcentageOppose = Math.abs(pourcentage - 100);
      var progressBar = document.querySelector(".progress");
      progressBar.style.width = pourcentageOppose + "%";
      progressBar.style.background = ""; // Réinitialiser la couleur de fond
      progressBar.innerHTML = ""; // Réinitialiser le message
    } else {
      var progressBar = document.querySelector(".progress");
      progressBar.style.width = "100%"; // Remplir la barre à 100%
      progressBar.style.background = "#eb4343"; // Changer la couleur de fond en #ff0000
      progressBar.innerHTML = "Délai dépassé /!";
    }
  } else {
    var pourcentageOppose = Math.abs(pourcentage - 100);
    pourcentageOppose = pourcentageOppose + pourcentageOppose * 0.05;

    var progressBar = document.querySelector(".progress");
    progressBar.style.width = pourcentageOppose + "%";

    // Réinitialiser le message et la couleur de fond
    progressBar.style.background = ""; // Réinitialiser la couleur de fond
    progressBar.innerHTML = ""; // Réinitialiser le message
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
var marque = false;

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
      <h1>EXPERLIMoaMoe</h1>
      <p>Dans cette partie, vous jouez le rôle de la MOE (Maîtrise d'Œuvre). Votre responsabilité est de mettre en œuvre le projet en fonction des besoins, du budget et des délais fixés par la MOA (Maîtrise d'Ouvrage). Tout au long du projet, la MOE doit concevoir la solution au problème proposé, en établir les spécificités, coordonner les intervenants, gérer les risques, suivre le budget et le planning, et enfin assurer la maintenance.</p>
      <button class="btn-continuer">Continuer</button>
    </div>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape1_5);
}

function afficherEtape1_5() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
      <h1>EXPERLIMoaMoe</h1>
      <p>Durant la phase de lancement de projet, la MOE doit donc analyser les risques, préparer un planning à respecter, et aider la MOA à choisir les spécificités du projet afin de respecter les délais et le budget. Voici 10 recommandations qui sont sont faites aux responsables de projet en général:</p>
      <ul>
        <li>Structurer le projet en lots de travaux réalistes et affectables.</li>
        <li>Définir des jalons pertinents.</li>
        <li>Définir les flux entre maître d'œuvre et maître ouvrage.</li>
        <li>Construire un planning initial réaliste avec de la marge.</li>
        <li>Utiliser un planning directeur, consolidant les plannings détaillés.</li>
        <li>Planifier avec le logiciel choisi en intégrant des marges.</li>
        <li>Définir au moins un indicateur clé de délais.</li>
        <li>Mettre à jour régulièrement le « reste à faire » du projet.</li>
        <li>Analyser régulièrement les dérives de charges et définir les plans d'action en conséquence.</li>
        <li>Analyser les risques de glissement de planning, définir et mettre en place des plans d'actions préventifs.</li>
      </ul>
      <button class="btn-continuer">Continuer</button>
    </div>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape1_8);
}

function afficherEtape1_8() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
    <h1>Livrables MOE dans un projet</h1>
    <p>
        Dans un projet, la MOE (Maîtrise d'Oeuvre) est responsable de la conception, du développement et de la réalisation des solutions techniques.
        Elle produit plusieurs livrables clés tout au long du projet, en fonction de ses responsabilités et de la nature spécifique du projet.
        Dans le cadre de la méthode agile, la MOE pésente très tôt son produit. Cela permet à la MOA de faire des retours utilisateur. C'est sur ceux-ci que se base la MOE et donc le seul livrable attendu est le produit final.
    </p>
    <strong>Exemples courants de livrables MOE :</strong>
    <ul>
        <li>Spécifications fonctionnelles et techniques : Ce document définit les exigences fonctionnelles et techniques du projet, en décrivant les fonctionnalités attendues, les contraintes techniques, les interfaces, etc.</li>
        <li>Cahier des charges : Ce document détaille les spécifications du projet, y compris les besoins des utilisateurs, les contraintes, les délais, les ressources nécessaires, les risques identifiés, etc.</li>
        <li>Conception technique : Il s'agit de la documentation détaillée de l'architecture technique du système, y compris les diagrammes, les schémas, les choix technologiques, les flux de données, les bases de données, etc.</li>
        <li>Code source et documentation : La MOE est responsable de développer le code source de la solution technique et de fournir une documentation claire et complète pour permettre la maintenance et l'évolution du système.</li>
        <li>Plans de tests : La MOE doit élaborer des plans de tests détaillés pour valider la conformité des solutions techniques aux spécifications fonctionnelles et techniques. Les rapports de tests font également partie des livrables.</li>
        <li>Rapports d'avancement : La MOE doit fournir des rapports réguliers sur l'avancement du projet, en mettant en évidence les réalisations, les problèmes rencontrés, les risques et les actions correctives mises en place.</li>
        <li>Manuel utilisateur : Si le projet comprend une interface utilisateur, la MOE doit fournir un manuel utilisateur détaillé pour guider les utilisateurs finaux dans l'utilisation de la solution.</li>
        <li>Support technique : La MOE peut être tenue de fournir un support technique après la mise en production du système, pour résoudre les problèmes éventuels et assurer la stabilité et la performance du système.</li>
    </ul>
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
      

      var diffgravite1 = Math.abs(gravite1 - 4);
      var diffgravite2 = Math.abs(gravite2 - 3);
      var diffgravite3 = Math.abs(gravite3 - 5);
      var diffgravite4 = Math.abs(gravite4 - 2);
      var diffgravite5 = Math.abs(gravite5 - 4);

      var diffchances1 = Math.abs(chances1 - 3);
      var diffchances2 = Math.abs(chances2 - 4);
      var diffchances3 = Math.abs(chances3 - 2);
      var diffchances4 = Math.abs(chances4 - 3);
      var diffchances5 = Math.abs(chances5 - 2);

      // Vérification de la différence et incrémentation de delais_jour si nécessaire
     if (diffgravite1 > 1) {
       delais_jour += 1;
     }
      if (diffgravite2 > 1) {
       delais_jour += 1;;
     }
     if (diffgravite3 > 1) {
        delais_jour += 1;
      }
      if (diffgravite4 > 1) {
        delais_jour += 1;
     }
      if (diffgravite5 > 1) {
        delais_jour += 1;
     }

     if (diffchances1 > 1) {
      delais_jour += 1;
    }
     if (diffchances2 > 1) {
       delais_jour += 1;
    }
    if (diffchances3 > 1) {
       delais_jour += 1;
     }
     if (diffchances4 > 1) {
       delais_jour += 1;
    }
     if (diffchances5 > 1) {
       delais_jour += 1;
    }

      if (gravite1 && chances1 && gravite2 && chances2 && gravite3 && chances3 && gravite4 && chances4 && gravite5 && chances5) {
        afficherEtape5_1(event);
      } else {
        alert("Veuillez remplir toutes les cases.");
      }
    });
    });
  });
}

function afficherEtape5_1(event) {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <p>Pendant le déroulement du projet la MOE à un rôle de contrôle en parallèle de la création du produit. En effet, elle doit gérer les risques anticipés au lancement, réagir aux imprévus, définir et appliquer un système qualité, suivre les coûts et respecter les délais en suivant régulièrement l’avancement. L’une des composantes principales de cette étape est la communication. Celle-ci est indispensable dans le cadre de la relation MOA/MOE pour les compte-rendus par exemple mais pas que. En effet la communication est autant nécessaire au sein des équipes de la MOE afin que les différentes étapes de processus se fassent sans accroc. Le développement de ces équipes passent par 4 ou 5 étapes : la formation du groupe, l’agitation pendant laquelle les leaders du groupe se distinguent et les objectifs du groupe sont fixés, la stabilisation pendant laquelle les relations se solidifient et la cohésion du groupe se développe, l’action pendant laquelle l’énergie du groupe se concentre sur les tâches à réaliser, c’est la dernière tâche des groupes définitifs, et enfin, pour les équipes temporaires, la dispersion pendant laquelle le groupe se prépare à se séparer et où l’énergie du groupe est tourné vers la conclusion du projet en cours.</p>
    <button class="btn-continuer">Continuer</button>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", function (event) {
    event.preventDefault();
    afficherEtape5_2(event);
  });
}

function afficherEtape5_2(event) {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <p>Dans le cadre des relations MOA/MOE il existe trois types de contrat.</p>
    <p>Le contrat en engagement de résultat est un contrat idéal lorsque le produit et le périmètre sont complètement définis. C’est un contrat à prix fixe ou dit “au forfait”, le prix ne peut être modifié que si les conditions de réalisation ou les caractéristiques du projet sont modifiées.</p>
    <p>Le contrat en engagement de moyens est un contrat qui se base sur les moyens que met le fournisseur à disposition du client. Dans ce type de contrat, le client pilote le projet puisque les coûts et délais dépendent du temps passé, du matériel et de la prestation du fournisseur. Pour cela, le fournisseur fait un bilan régulier sur l’avancement du projet. De plus, il existe des accords clairs entre les deux parties sur les limites de livraisons, les modalités de modification et le traitement des problèmes.
    <p>Le dernier type de contrat est le contrat “contre remboursement”. Il n’y a pas d’écart entre le coût réel du projet et le paiement réalisé, la MOE présente régulièrement les avancements contre paiement. Ce contrat s’accompagne généralement de primes et de bonus en cas de respect du délais et d’atteinte des objectifs.</p>
    <button class="btn-continuer">Continuer</button>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", function (event) {
    event.preventDefault();
    afficherEtape5_3(event);
  });
}

function afficherEtape5_3(event) {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <p>La MOE a aussi pour objectif de définir et respecter un système qualité.</p>
    <p>Le système qualité du projet prend en compte tous les domaines de management et de réalisation et traite notamment des sujets suivants :</p>
    <ul>
      <li>respect des engagements</li>
      <li>maîtrise des documents, plans et normes de la documentation</li>
      <li>contrôles, revues et audits</li>
      <li>organisation du projet, coordination entre maîtrise d'ouvrage et maîtrise d'œuvre</li>
      <li>structuration du projet, plans projet, plans opérationnels</li>
      <li>conduite du projet coordination des partenaires</li>
      <li>procédures et méthodes spécifiques à la réalisation</li>
      <li>traitement des non-conformités et actions correctives</li>
    </ul>
    <button class="btn-continuer">Continuer</button>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", function (event) {
    event.preventDefault();
    afficherEtape6(event);
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
          delais_jour += 5;
        } else if (valeurChoix === "commentaire") {
          delais_jour += 2;
        } else if (valeurChoix === "reference") {
          delais_jour += 3;
        } else if (valeurChoix === "expert") {
          delais_jour += 1;
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
        if (valeurChoix === "rien_faire") {
          delais_jour += 3;
        } else if (valeurChoix === "mediateur") {
          delais_jour += 2;
        } else if (valeurChoix === "tps_perso") {
          delais_jour += 1;
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

      // Traitements spécifiques à l'étape 7
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "réécriture") {
          delais_jour += 3;
        } else if (valeurChoix === "reconstruction") {
          delais_jour += 7;
        } else if (valeurChoix === "documentation") {
          delais_jour += 2;
        } else if (valeurChoix === "expert") {
          delais_jour += 4;
        } 

        delais_affichage();
        updateProgressBar();

        if(delais_jour < 33){
          afficherEtape9(event);
        }

        else {
          afficherEtape10(event);
        }


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
      afficherEtape9(event);
    } else {
      alert("Veuillez sélectionner une option.");
    }
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

      // Traitements spécifiques à l'étape 7
      var choix = document.querySelector('input[name="choix"]:checked');
      if (choix) {
        var valeurChoix = choix.value;
        // Effectuer les actions en fonction de la valeur du choix sélectionné
        if (valeurChoix === "demander_MOA") {
          delais_jour += 5;
        } else if (valeurChoix === "stop") {
          //rien à faire
        } else if (valeurChoix === "initiative") {
          delais_jour += 5;
        }

        // Vérifier si la case "stop" est cochée
        if (valeurChoix === "stop") {
          afficherEtapeFin_Bad_Option(); 
        } else {
          afficherEtape10(event); 
        }
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
      afficherEtape10(event);
    } else {
      alert("Veuillez sélectionner une option.");
    }
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
          delais_jour += 2;
        } else if (valeurChoix === "reaffecter_equipe") {
          delais_jour += 4;
        } else if (valeurChoix === "continuer") {
          marque = true;
        }


        if(delais_jour > 46){
          afficherEtape11(event);
        }
        else {
          afficherEtapeFin_Good();
        }

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
      afficherEtape11(event);
    } else {
      alert("Veuillez sélectionner une option.");
    }
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
          delais_jour -= 4;
        } else if (valeurChoix === "continuer") {
        } 

        delais_affichage();
        updateProgressBar();

        if(delais_jour > 50){
          afficherEtapeFin_Bad_Time();
        } else {
          afficherEtapeFin_GoodwMark();
        }

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
      afficherEtapeFin_GoodwMark(event);
    } else {
      alert("Veuillez sélectionner une option.");
    }
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
  btnContinuer.addEventListener("click", afficherEtape1);
}

function afficherEtapeFin_Bad_Time() {
  delais_affichage(); 
  updateProgressBar(); 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
      <h1>Votre projet n’est pas près dans les délais.</h1>
      <p>Même si le projet a eu plusieurs problèmes, vous auriez dû limiter les dégâts et vous adapter en conséquence.</p>
      <p>Le commanditaire est mécontent.</p>
      <button class="btn-continuer">Continuer</button>
    </div>
  `;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape1);
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
  btnContinuer.addEventListener("click", quizz);
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
  btnContinuer.addEventListener("click", quizz);
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
  btnContinuer.addEventListener("click", quizz);
}

function quizz()
{
  window.location.href='quizMOE.html';
}


afficherEtape1();
updateProgressBar();


