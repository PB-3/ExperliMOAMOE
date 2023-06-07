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



var delais_jour = 0 ;
var choix_let_MOE = 0 ; 
var rien_faire = 0;
var besoinsValue ;
var budgetValue;
var delaisValue ;
var suiviValue; 
var objectifValue;
var choixNonSelectionnes=[];
var choixSelectionnes=[];
var choixNonSelectionnesListe=``;
var choixSelectionnesListe=``;
var NouvellesFonctionnalites = [];
var NouvellesFonctionnalites = [];
var delaisMap = {
  'bouton-partage': 2,
  'resolution-caracteres-speciaux': 2,
  'site-smartphones-tablettes': 4,
  'temps-chargement': 4,
  'section-actualites': 4,
  'personnalisation': 4,
  'chargement-rapide-images': 4,
  'resolution-images': 4,
  'resolution-telechargement': 4,
  'recherche-avancee': 5,
  'traduction-anglais': 6,
  'site-tous-navigateurs': 4,
  'reduction-donnees': 5
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
  testHTML("infos_projets_debut.html", function() {
    const choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
      afficherEtape3(event);
    });
  });
}
  
// Fonction pour afficher l'étape 3 du jeu
function afficherEtape3(event) {
  

    // Récupération des valeurs du formulaire
    var besoins = document.getElementById('besoins').value;
    var budget = document.getElementById('budget').value;
    var delais = document.getElementById('delais').value;
    var reunionSelect = document.getElementById('reunionSelect').value;
    var objectif = document.getElementById('objectif').value;

  // delais jour 

  if(reunionSelect=="3jours"){delais_jour+=2}
  if(reunionSelect=="2semaine"){delais_jour+=5}
  if(reunionSelect=="1mois"){delais_jour+=8}


  var contentDiv = document.querySelector(".content");
  testHTML("choix_fonctionnalites_debut.html", function() {
    const choixForm = document.getElementById('choixForm');

    choixForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
      const checkboxes = document.querySelectorAll('input[name="choix"]');
      checkboxes.forEach(function(checkbox) {
        var value = checkbox.value;
        if(value === "rien-faire") rien_faire+=1;
        
        if (checkbox.checked) {
          choixSelectionnes.push(checkbox.value);
         
          // console.log(value);
          if (value == 'site-smartphones-tablettes') {
            NouvellesFonctionnalites.push(value);
            
          } else if (value == 'bouton-partage') {
            NouvellesFonctionnalites.push(value);
          } else if (value == 'recherche-avancee') {
            NouvellesFonctionnalites.push(value);
          } else if (value == 'section-actualites') {
            NouvellesFonctionnalites.push(value);
          } else if (value == 'personnalisation') {
            NouvellesFonctionnalites.push(value);
          } else if (value == 'traduction-anglais') {
            NouvellesFonctionnalites.push(value);
          }

          // Vérifier la valeur de la case cochée et ajouter les délais correspondants

      
      for (var key in delaisMap) {
        if (key === value) {
          delais_jour += delaisMap[key];
          break;
        }
        
      }
      

      console.log(delais_jour);


        }
        else {
          choixNonSelectionnes.push(value);
        }

      });
     
      // Construction de la liste des choix sélectionnés
      choixSelectionnes.forEach(function(choix) {
        choixSelectionnesListe += `<li>${choix}</li>`;
      });
      choixSelectionnesListe += '</ul>';

      // Construction de la liste des choix non sélectionnés
      choixNonSelectionnes.forEach(function(choix) {
        choixNonSelectionnesListe += `<li>${choix}</li>`;
      });
      choixNonSelectionnesListe += '</ul>';
      
      var text;
      var contentDiv = document.querySelector(".content");
      contentDiv.innerHTML = '';
      
      let htmll = `<p> Choix selectionnes </p>
      <p> Le chef de projet vous indique que les délais sont envisageables si tout se passe parfaitement, mais son expérience lui a appris que ce cas n'arrive que très rarement. Il vous propose de rallonger les délais ou d’enlever certaines fonctionnalités. Vous ne voulez pas rallonger les délais.</p>
      <br>
      <p> supprimer un ou plusieurs choix parmi : </p>`;
      
      choixSelectionnes.forEach(function (choix) {
        htmll += `  
          <ul>
            <li><input type="checkbox" id="${choix}" name="choix" value="${choix}">
            <label for="${choix}">${choix}</label></li>
          </ul>`;
      });

      contentDiv.innerHTML += `
        <form id="choixForm">
          ${htmll}
          <button class="btn-continuer">Next</button>
        </form>`;

      var choixForm = document.getElementById('choixForm');
      choixForm.addEventListener('submit', afficherEtape4);
    });
  });
}


function afficherEtape4(event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
      const checkboxes = document.querySelectorAll('input[name="choix"]');
      checkboxes.forEach(function(checkbox) {
        if(value === "rien-faire") rien_faire+=1;
        if (checkbox.checked) {
          delais_jour-= delaisMap[checkbox.value];
          console.log(delais_jour);
        }});


  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML=`<button class="btn-continuer">Next</button>`;
 let htmll = `<p> Choix non selectionnes`;
  choixNonSelectionnes.forEach(function (choix) {
     htmll += `
      <ul>
        <li><input type="checkbox" id="${choix}" name="choix" value="${choix}">
        <label for="${choix}">${choix}</label></li>
      </ul>
  
     
    `;
   
  });
  contentDiv.innerHTML+=` 
  

  <form id="choixForm">
  ${htmll}

  </form>`;

  contentDiv.addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
      // Gérer les modifications des cases à cocher ici
      var checkbox = event.target;
      if (checkbox.checked) {
        // La case à cocher a été cochée
        choixSelectionnes.push(checkbox.value);
        console.log(checkbox.value);
        console.log(choixSelectionnes);
      } 
    }
  });

  var choixForm = document.getElementById('choixForm');
choixForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
   

});
var btnContinuer = document.querySelector(".btn-continuer");

btnContinuer.addEventListener('click', afficherEtape5,console.log('ksjdf'));

}


// Fonction pour afficher l'étape 5 du jeu
function afficherEtape5() {
  var contentDiv = document.querySelector(".content");
  testHTML("Moe_test_mid_version.html", function() {

    var contentDiv = document.querySelector(".content");
    contentDiv.innerHTML=``;
    choixSelectionnes.forEach(function (choix) {contentDiv.innerHTML+=`<p>${choix}</p>`});
      contentDiv.innerHTML+=`<button class="btn-continuer">Next</button> <p>test</p>`;
  

    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", afficherEtape6);
  });
}

// Fonction pour afficher l'étape 6 du jeu
function afficherEtape6() {
  var contentDiv = document.querySelector(".content");
  testHTML("site_teste_satisfait.html", function() {


    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", afficherEtape7);

  });
}

// Fonction pour afficher l'étape 7 du jeu
function afficherEtape7() {
  var contentDiv = document.querySelector(".content");
  testHTML("cas_choix_vacances/choix_partir_vac.html", function(event) {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape8);
  });
}

function afficherEtape8(event) {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = '';
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }

  if (selectedChoice == 'accepter' && selectedChoice != null) {
    testHTML("cas_choix_vacances/page_accept_vac.html", function() {
      var choixForm = document.getElementById('choixForm');
      choixForm.addEventListener('submit', afficherEtape9);
    });
  } else if (selectedChoice == 'refuser' && selectedChoice != null) {
    testHTML("cas_choix_vacances/page_refuser_vac.html", function() {
      var choixForm = document.getElementById('choixForm');
      choixForm.addEventListener('submit', afficherEtape9);
    });
  } else if (selectedChoice == null) {
    afficherEtape7();
  }
}


function afficherEtape9(event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;
  var contentDiv=document.querySelector(".content");

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }

  if (selectedChoice === 'abandonner') {
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
      <ul>
        ${htmlll}
      </ul>
      <button class="btn-continuer",type="submit">Next</button>
    </form>`;
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', (event) => fonctionnalite_abandon(event,NouvellesFonctionnalites));
    
    console.log("Vous avez choisi d'abandonner une autre fonctionnalité.");
  } else if (selectedChoice === 'ne-rien-faire') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape10);
    console.log("Vous avez choisi de ne rien faire.");
  } else if (selectedChoice === 'resoudre-probleme') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficherEtape10);
    console.log("Vous avez choisi de résoudre le problème.");
  } else if (selectedChoice === 'abandonner-fonctionnalite') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficherEtape10);
    console.log("Vous avez choisi d'abandonner la fonctionnalité.");
  } else if (selectedChoice === 'laisser-choix-moe') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficherEtape10);
    console.log("Vous avez choisi de laisser le choix à la MOE.");
  }
}

function afficherEtape10(){
  var contentDiv = document.querySelector(".content");
  testHTML("page_test_supp.html", function(event) {




    
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape11);
  });
}
function fonctionnalite_abandon(event,liste)
{
  var contentDiv = document.querySelector(".content");
  
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }
  console.log(liste);
  console.log('-----------------------');

  var index = liste.indexOf(selectedChoice);
  if (index !== -1) {
    liste.splice(index, 1);
  }
  
  console.log(liste); 
  afficherEtape10();
}



function afficherEtape11(event){
  var contentDiv = document.querySelector(".content");

  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }

  if (selectedChoice == 'tests-fonctionnels') {
    
    console.log("Effectuer des tests fonctionnels approfondis sur toutes les fonctionnalités (+2 jours)");
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_page_9);
  } else if (selectedChoice == 'tests-performance') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_page_9);
    console.log("Réaliser des tests de performance et d'optimisation (+1 jour)");
  } else if (selectedChoice == 'tests-compatibilite') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_page_9);
    console.log("Effectuer des tests de compatibilité sur différents navigateurs et appareils (+2 jours)");
  } else if (selectedChoice == 'ne-faire-aucun-test') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_9_bis);
    console.log("Ne faire aucun test");
  } else if (selectedChoice == 'laisser-choix-moe') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_page_9);
    console.log("Laisser le choix à la MOE (+5 jours)");
  }

}
function afficher_page_9(){
  var contentDiv = document.querySelector(".content");
  testHTML("Correction_problemes_fin.html", function(event) {

    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape12);
  });
}
function afficher_9_bis()
{
  var contentDiv = document.querySelector(".content");
  testHTML("aucun_test_page9.html", function(event) {

    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape12);
  });
}

function afficherEtape12(event)
{
  var contentDiv = document.querySelector(".content");
 
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }
  var choixForm = document.getElementById('choixForm');
  if (selectedChoice == 'corriger-mineurs' && selectedChoice != null) {

    // Code à exécuter si l'option "Corriger uniquement les problèmes mineurs" est sélectionnée
    console.log("Corriger uniquement les problèmes mineurs (+2 jours)");
    
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'corriger-majeur' && selectedChoice != null) {
  
    // Code à exécuter si l'option "Corriger uniquement le problème majeur" est sélectionnée
    console.log("Corriger uniquement le problème majeur (+3 jours)");
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'corriger-ensemble' && selectedChoice != null) {
    // Code à exécuter si l'option "Corriger à la fois les problèmes mineurs et le problème majeur" est sélectionnée

    console.log("Corriger à la fois les problèmes mineurs et le problème majeur (+5 jours)");
   
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'ne-rien-faire' && selectedChoice != null) {
    // Code à exécuter si l'option "Ne rien faire, le problème majeur n'est pas critique" est sélectionnée
    console.log("Ne rien faire, le problème majeur n'est pas critique");
 
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'laisser-choix-moe' && selectedChoice != null) {
    // Code à exécuter si l'option "Laisser le choix à la MOE" est sélectionnée
  
    console.log("Laisser le choix à la MOE (+5 jours)");
  
    choixForm.addEventListener('submit',page_fin);
  }
}
function page_fin(){
  var contentDiv = document.querySelector(".content");
  testHTML("pagefin.html", function(event) {


  });
}

afficherEtape1();


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



var delais_jour = 0 ;
var choix_let_MOE = 0 ; 
var rien_faire = 0;
var besoinsValue ;
var budgetValue;
var delaisValue ;
var suiviValue; 
var objectifValue;
var choixNonSelectionnes=[];
var choixSelectionnes=[];
var choixNonSelectionnesListe=``;
var choixSelectionnesListe=``;
var NouvellesFonctionnalites = [];
var NouvellesFonctionnalites = [];
var delaisMap = {
  'bouton-partage': 2,
  'resolution-caracteres-speciaux': 2,
  'site-smartphones-tablettes': 4,
  'temps-chargement': 4,
  'section-actualites': 4,
  'personnalisation': 4,
  'chargement-rapide-images': 4,
  'resolution-images': 4,
  'resolution-telechargement': 4,
  'recherche-avancee': 5,
  'traduction-anglais': 6,
  'site-tous-navigateurs': 4,
  'reduction-donnees': 5
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
  testHTML("infos_projets_debut.html", function() {
    const choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
      afficherEtape3(event);
    });
  });
}
  
// Fonction pour afficher l'étape 3 du jeu
function afficherEtape3(event) {
  

    // Récupération des valeurs du formulaire
    var besoins = document.getElementById('besoins').value;
    var budget = document.getElementById('budget').value;
    var delais = document.getElementById('delais').value;
    var reunionSelect = document.getElementById('reunionSelect').value;
    var objectif = document.getElementById('objectif').value;

  // delais jour 

  if(reunionSelect=="3jours"){delais_jour+=2}
  if(reunionSelect=="2semaine"){delais_jour+=5}
  if(reunionSelect=="1mois"){delais_jour+=8}


  var contentDiv = document.querySelector(".content");
  testHTML("choix_fonctionnalites_debut.html", function() {
    const choixForm = document.getElementById('choixForm');

    choixForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
      const checkboxes = document.querySelectorAll('input[name="choix"]');
      checkboxes.forEach(function(checkbox) {
        var value = checkbox.value;
        if(value === "rien-faire") rien_faire+=1;
        
        if (checkbox.checked) {
          choixSelectionnes.push(checkbox.value);
         
          // console.log(value);
          if (value == 'site-smartphones-tablettes') {
            NouvellesFonctionnalites.push(value);
            
          } else if (value == 'bouton-partage') {
            NouvellesFonctionnalites.push(value);
          } else if (value == 'recherche-avancee') {
            NouvellesFonctionnalites.push(value);
          } else if (value == 'section-actualites') {
            NouvellesFonctionnalites.push(value);
          } else if (value == 'personnalisation') {
            NouvellesFonctionnalites.push(value);
          } else if (value == 'traduction-anglais') {
            NouvellesFonctionnalites.push(value);
          }

          // Vérifier la valeur de la case cochée et ajouter les délais correspondants

      
      for (var key in delaisMap) {
        if (key === value) {
          delais_jour += delaisMap[key];
          break;
        }
        
      }
      

      console.log(delais_jour);


        }
        else {
          choixNonSelectionnes.push(value);
        }

      });
     
      // Construction de la liste des choix sélectionnés
      choixSelectionnes.forEach(function(choix) {
        choixSelectionnesListe += `<li>${choix}</li>`;
      });
      choixSelectionnesListe += '</ul>';

      // Construction de la liste des choix non sélectionnés
      choixNonSelectionnes.forEach(function(choix) {
        choixNonSelectionnesListe += `<li>${choix}</li>`;
      });
      choixNonSelectionnesListe += '</ul>';
      
      var text;
      var contentDiv = document.querySelector(".content");
      contentDiv.innerHTML = '';
      
      let htmll = `<p> Choix selectionnes </p>
      <p> Le chef de projet vous indique que les délais sont envisageables si tout se passe parfaitement, mais son expérience lui a appris que ce cas n'arrive que très rarement. Il vous propose de rallonger les délais ou d’enlever certaines fonctionnalités. Vous ne voulez pas rallonger les délais.</p>
      <br>
      <p> supprimer un ou plusieurs choix parmi : </p>`;
      
      choixSelectionnes.forEach(function (choix) {
        htmll += `  
          <ul>
            <li><input type="checkbox" id="${choix}" name="choix" value="${choix}">
            <label for="${choix}">${choix}</label></li>
          </ul>`;
      });

      contentDiv.innerHTML += `
        <form id="choixForm">
          ${htmll}
          <button class="btn-continuer">Next</button>
        </form>`;

      var choixForm = document.getElementById('choixForm');
      choixForm.addEventListener('submit', afficherEtape4);
    });
  });
}


function afficherEtape4(event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
      const checkboxes = document.querySelectorAll('input[name="choix"]');
      checkboxes.forEach(function(checkbox) {
        if(value === "rien-faire") rien_faire+=1;
        if (checkbox.checked) {
          delais_jour-= delaisMap[checkbox.value];
          console.log(delais_jour);
        }});


  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML=`<button class="btn-continuer">Next</button>`;
 let htmll = `<p> Choix non selectionnes`;
  choixNonSelectionnes.forEach(function (choix) {
     htmll += `
      <ul>
        <li><input type="checkbox" id="${choix}" name="choix" value="${choix}">
        <label for="${choix}">${choix}</label></li>
      </ul>
  
     
    `;
   
  });
  contentDiv.innerHTML+=` 
  

  <form id="choixForm">
  ${htmll}

  </form>`;

  contentDiv.addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
      // Gérer les modifications des cases à cocher ici
      var checkbox = event.target;
      if (checkbox.checked) {
        // La case à cocher a été cochée
        choixSelectionnes.push(checkbox.value);
        console.log(checkbox.value);
        console.log(choixSelectionnes);
      } 
    }
  });

  var choixForm = document.getElementById('choixForm');
choixForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
   

});
var btnContinuer = document.querySelector(".btn-continuer");

btnContinuer.addEventListener('click', afficherEtape5,console.log('ksjdf'));

}


// Fonction pour afficher l'étape 5 du jeu
function afficherEtape5() {
  var contentDiv = document.querySelector(".content");
  testHTML("Moe_test_mid_version.html", function() {

    var contentDiv = document.querySelector(".content");
    contentDiv.innerHTML=``;
    choixSelectionnes.forEach(function (choix) {contentDiv.innerHTML+=`<p>${choix}</p>`});
      contentDiv.innerHTML+=`<button class="btn-continuer">Next</button> <p>test</p>`;
  

    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", afficherEtape6);
  });
}

// Fonction pour afficher l'étape 6 du jeu
function afficherEtape6() {
  var contentDiv = document.querySelector(".content");
  testHTML("site_teste_satisfait.html", function() {


    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", afficherEtape7);

  });
}

// Fonction pour afficher l'étape 7 du jeu
function afficherEtape7() {
  var contentDiv = document.querySelector(".content");
  testHTML("cas_choix_vacances/choix_partir_vac.html", function(event) {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape8);
  });
}

function afficherEtape8(event) {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = '';
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }

  if (selectedChoice == 'accepter' && selectedChoice != null) {
    testHTML("cas_choix_vacances/page_accept_vac.html", function() {
      var choixForm = document.getElementById('choixForm');
      choixForm.addEventListener('submit', afficherEtape9);
    });
  } else if (selectedChoice == 'refuser' && selectedChoice != null) {
    testHTML("cas_choix_vacances/page_refuser_vac.html", function() {
      var choixForm = document.getElementById('choixForm');
      choixForm.addEventListener('submit', afficherEtape9);
    });
  } else if (selectedChoice == null) {
    afficherEtape7();
  }
}


function afficherEtape9(event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;
  var contentDiv=document.querySelector(".content");

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }

  if (selectedChoice === 'abandonner') {
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
      <ul>
        ${htmlll}
      </ul>
      <button class="btn-continuer",type="submit">Next</button>
    </form>`;
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', (event) => fonctionnalite_abandon(event,NouvellesFonctionnalites));
    
    console.log("Vous avez choisi d'abandonner une autre fonctionnalité.");
  } else if (selectedChoice === 'ne-rien-faire') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape10);
    console.log("Vous avez choisi de ne rien faire.");
  } else if (selectedChoice === 'resoudre-probleme') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficherEtape10);
    console.log("Vous avez choisi de résoudre le problème.");
  } else if (selectedChoice === 'abandonner-fonctionnalite') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficherEtape10);
    console.log("Vous avez choisi d'abandonner la fonctionnalité.");
  } else if (selectedChoice === 'laisser-choix-moe') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficherEtape10);
    console.log("Vous avez choisi de laisser le choix à la MOE.");
  }
}

function afficherEtape10(){
  var contentDiv = document.querySelector(".content");
  testHTML("page_test_supp.html", function(event) {




    
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape11);
  });
}
function fonctionnalite_abandon(event,liste)
{
  var contentDiv = document.querySelector(".content");
  
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }
  console.log(liste);
  console.log('-----------------------');

  var index = liste.indexOf(selectedChoice);
  if (index !== -1) {
    liste.splice(index, 1);
  }
  
  console.log(liste); 
  afficherEtape10();
}



function afficherEtape11(event){
  var contentDiv = document.querySelector(".content");

  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }

  if (selectedChoice == 'tests-fonctionnels') {
    
    console.log("Effectuer des tests fonctionnels approfondis sur toutes les fonctionnalités (+2 jours)");
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_page_9);
  } else if (selectedChoice == 'tests-performance') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_page_9);
    console.log("Réaliser des tests de performance et d'optimisation (+1 jour)");
  } else if (selectedChoice == 'tests-compatibilite') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_page_9);
    console.log("Effectuer des tests de compatibilité sur différents navigateurs et appareils (+2 jours)");
  } else if (selectedChoice == 'ne-faire-aucun-test') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_9_bis);
    console.log("Ne faire aucun test");
  } else if (selectedChoice == 'laisser-choix-moe') {
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',afficher_page_9);
    console.log("Laisser le choix à la MOE (+5 jours)");
  }

}
function afficher_page_9(){
  var contentDiv = document.querySelector(".content");
  testHTML("Correction_problemes_fin.html", function(event) {

    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape12);
  });
}
function afficher_9_bis()
{
  var contentDiv = document.querySelector(".content");
  testHTML("aucun_test_page9.html", function(event) {

    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape12);
  });
}

function afficherEtape12(event)
{
  var contentDiv = document.querySelector(".content");
 
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === 'radio' && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }
  var choixForm = document.getElementById('choixForm');
  if (selectedChoice == 'corriger-mineurs' && selectedChoice != null) {

    // Code à exécuter si l'option "Corriger uniquement les problèmes mineurs" est sélectionnée
    console.log("Corriger uniquement les problèmes mineurs (+2 jours)");
    
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'corriger-majeur' && selectedChoice != null) {
  
    // Code à exécuter si l'option "Corriger uniquement le problème majeur" est sélectionnée
    console.log("Corriger uniquement le problème majeur (+3 jours)");
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'corriger-ensemble' && selectedChoice != null) {
    // Code à exécuter si l'option "Corriger à la fois les problèmes mineurs et le problème majeur" est sélectionnée

    console.log("Corriger à la fois les problèmes mineurs et le problème majeur (+5 jours)");
   
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'ne-rien-faire' && selectedChoice != null) {
    // Code à exécuter si l'option "Ne rien faire, le problème majeur n'est pas critique" est sélectionnée
    console.log("Ne rien faire, le problème majeur n'est pas critique");
 
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'laisser-choix-moe' && selectedChoice != null) {
    // Code à exécuter si l'option "Laisser le choix à la MOE" est sélectionnée
  
    console.log("Laisser le choix à la MOE (+5 jours)");
  
    choixForm.addEventListener('submit',page_fin);
  }
}
function page_fin(){
  var contentDiv = document.querySelector(".content");
  testHTML("pagefin.html", function(event) {


  });
}

afficherEtape1();


