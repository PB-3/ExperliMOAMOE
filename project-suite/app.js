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





var delais_jour = 0 ;
var choix_let_MOE = 0 ; 
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
  testHTML("page2.html", function() {
    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", afficherEtape3);
  });
}

// Fonction pour afficher l'étape 3 du jeu
function afficherEtape3() {
  var contentDiv = document.querySelector(".content");
  testHTML("page3.html", function() {
    const choixForm = document.getElementById('choixForm');
  
    choixForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
 
      const checkboxes = document.querySelectorAll('input[name="choix"]');
      checkboxes.forEach(function(checkbox) {
        
        if (checkbox.checked) {
          choixSelectionnes.push(checkbox.value);
          console.log(checkbox.value);
          if (checkbox.value == 'site-smartphones-tablettes') {
            NouvellesFonctionnalites.push(checkbox.value);
            
          } else if (checkbox.value == 'bouton-partage') {
            NouvellesFonctionnalites.push(checkbox.value);
          } else if (checkbox.value == 'recherche-avancee') {
            NouvellesFonctionnalites.push(checkbox.value);
          } else if (checkbox.value == 'section-actualites') {
            NouvellesFonctionnalites.push(checkbox.value);
          } else if (checkbox.value == 'personnalisation') {
            NouvellesFonctionnalites.push(checkbox.value);
          } else if (checkbox.value == 'traduction-anglais') {
            NouvellesFonctionnalites.push(checkbox.value);
          }
            
        }
        else {
          choixNonSelectionnes.push(checkbox.value);
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
  event.preventDefault();
  //fonctionnalite_abandon(event,optionsList);

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
  testHTML("page5.html", function() {

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
  testHTML("page6.html", function() {


    var btnContinuer = document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click", afficherEtape7);

  });
}

// Fonction pour afficher l'étape 7 du jeu
function afficherEtape7() {
  var contentDiv = document.querySelector(".content");
  testHTML("choix_partir_vac.html", function(event) {
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
    testHTML("page_accept_vac.html", function() {
      var choixForm = document.getElementById('choixForm');
      choixForm.addEventListener('submit', afficherEtape9);
    });
  } else if (selectedChoice == 'refuser' && selectedChoice != null) {
    testHTML("page_refuser_vac.html", function() {
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
  testHTML("page9.html", function(event) {

    var choixForm = document.getElementById('choixForm');
   // choixForm.addEventListener('submit', afficherEtape11);
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

  if (selectedChoice == 'corriger-mineurs' && selectedChoice != null) {

    // Code à exécuter si l'option "Corriger uniquement les problèmes mineurs" est sélectionnée
    console.log("Corriger uniquement les problèmes mineurs (+2 jours)");
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'corriger-majeur' && selectedChoice != null) {
  
    // Code à exécuter si l'option "Corriger uniquement le problème majeur" est sélectionnée
    console.log("Corriger uniquement le problème majeur (+3 jours)");
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'corriger-ensemble' && selectedChoice != null) {
    // Code à exécuter si l'option "Corriger à la fois les problèmes mineurs et le problème majeur" est sélectionnée

    console.log("Corriger à la fois les problèmes mineurs et le problème majeur (+5 jours)");
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'ne-rien-faire' && selectedChoice != null) {
    // Code à exécuter si l'option "Ne rien faire, le problème majeur n'est pas critique" est sélectionnée
    console.log("Ne rien faire, le problème majeur n'est pas critique");
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',page_fin);
  } else if (selectedChoice == 'laisser-choix-moe' && selectedChoice != null) {
    // Code à exécuter si l'option "Laisser le choix à la MOE" est sélectionnée
  
    console.log("Laisser le choix à la MOE (+5 jours)");
    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit',page_fin);
  }
}
function page_fin(){
  var contentDiv = document.querySelector(".content");
  testHTML("pagefin.html", function(event) {


  });
}

afficherEtape1();






/*function afficherEtape10(){
var contentDiv = document.querySelector(".content");
contentDiv.innerHTML=`
<h2>Aucune action à faire</h2>
<p>Description :</p>
<p>Vous avez testé la version intermédiaire du site et vous êtes amplement satisfait du travail réalisé.</p>
<button class="btn-continuer">Next</button> <p>test</p>`;
var btnContinuer = document.querySelector(".btn-continuer");
btnContinuer.addEventListener('click',afficherEtape11);

};
function afficherEtape11(){

var contentDiv = document.querySelector(".content");
contentDiv.innerHTML=`

<h2>Le projet est dans les temps</h2>
<p>Description :</p>
<p>Votre ami vous propose de partir 10 jours dans une région reculée pour vous reposer.</p>
<p>Choix disponibles :</p>
<form id="choixForm">
  <ul>
    <li>
      <input type="radio" id="accepter" name="choix" value="accepter">
      <label for="accepter">Vous acceptez, un peu de repos ne pourrait pas faire de mal</label>
    </li>
    <li>
      <input type="radio" id="refuser" name="choix" value="refuser">
      <label for="refuser">Vous refusez, vous prendrez vos vacances une fois le projet fini</label>
    </li>
  </ul>
  <button class="btn-continuer" type="submit">Next</button>

</form>

`;

var choixForm = document.getElementById('choixForm');
choixForm.addEventListener('submit', afficherEtape12)
};


function afficherEtape12(event){

  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML=``;  
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

  if (selectedChoice == 'accepter') {
    contentDiv.innerHTML=`

    <h2>Choix multiple (1 choix)</h2>
  <p>Description :</p>
  <p>Vous rentrez de vos vacances. Votre boîte mail est pleine, le manque de réseau fait que vous n’avez pas pu les recevoir. Le chef de projet a tenté en vain de vous appeler. (La mise en place du site web sur Android/ ou une autre option que le joueur choisit) pose des problèmes. Comme vous n’avez pas répondu et qu’il ne pouvait pas vous attendre, il a décidé de continuer à l’implémenter sur Android au risque de prendre du retard et d'augmenter le coût total.</p>
  <p>(+ X jours)</p>
  <p>Choix disponible :</p>
  <form id="choixForm">
    <ul>
      <li>
        <input type="radio" id="abandonner" name="choix" value="abandonner">
        <label for="abandonner">Abandonner une autre fonctionnalité (-X jours)</label>
      </li>
      <li>
        <input type="radio" id="ne-rien-faire" name="choix" value="ne-rien-faire">
        <label for="ne-rien-faire">Ne rien faire</label>
      </li>
    </ul>
    <button class="btn-continuer">Next</button>
  </form>
  
  
    `;
   
  }
  else{
    contentDiv.innerHTML=`
    <h2>Choix multiple</h2>
    <p>Description :</p>
    <p>Vous recevez un mail de la part du chef de projet. (La mise en place du site web sur Android/ ou une autre option que le joueur choisit) pose des problèmes. Il vous propose de résoudre le problème au risque de prendre du retard (X jours en plus) ou d’abandonner cette fonctionnalité.</p>
    <p>Choix disponible :</p>
    <form id="choixForm">
      <ul>
        <li>
          <input type="radio" id="resoudre-probleme" name="choix" value="resoudre-probleme">
          <label for="resoudre-probleme">Résoudre le problème (+ X jours)</label>
        </li>
        <li>
          <input type="radio" id="abandonner-fonctionnalite" name="choix" value="abandonner-fonctionnalite">
          <label for="abandonner-fonctionnalite">Abandonner une fonctionnalité</label>
        </li>
        <li>
          <input type="radio" id="laisser-choix-moe" name="choix" value="laisser-choix-moe">
          <label for="laisser-choix-moe">Laisser le choix à la MOE</label>
        </li>
      </ul>
      <button class="btn-continuer",type="submit">Next</button>
    </form>
    `
  }
  var choixForm = document.getElementById('choixForm');
choixForm.addEventListener('submit', afficherEtape13);

//  var btnContinuer = document.querySelector(".btn-continuer");
 // btnContinuer.addEventListener('click',testHTML);
}

function afficherEtape13(event){
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML=``;  
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

  if (selectedChoice == 'abandonner-fonctionnalite')
  {
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
    choixForm.addEventListener('submit', fonctionnalite_abandon(event,NouvellesFonctionnalites));

  }
  else
  {
      contentDiv.innerHTML=`

  <h2>Choix multiple (1 choix)</h2>
  <p>Description:</p>
  <p>Le chef de projet vous informe que le développement du site est terminé, mais des tests supplémentaires sont nécessaires pour s'assurer du bon fonctionnement. Il vous propose différentes options pour les tests.</p>
  <p>Choix disponibles:</p>
  <form id="choixForm">
  <ul>
    <li>
      <input type="radio" id="testsFonctionnels" name="tests" value="testsFonctionnels">
      <label for="testsFonctionnels">Effectuer des tests fonctionnels approfondis sur toutes les fonctionnalités (+2 jours)</label>
    </li>
    <li>
      <input type="radio" id="testsPerformance" name="tests" value="testsPerformance">
      <label for="testsPerformance">Réaliser des tests de performance et d'optimisation (+1 jour)</label>
    </li>
    <li>
      <input type="radio" id="testsCompatibilite" name="tests" value="testsCompatibilite">
      <label for="testsCompatibilite">Effectuer des tests de compatibilité sur différents navigateurs et appareils (+2 jours)</label>
    </li>
    <li>
      <input type="radio" id="sansTests" name="tests" value="sansTests">
      <label for="sansTests">Ne faire aucun test</label>
    </li>
    <li>
      <input type="radio" id="choixMOE" name="tests" value="choixMOE">
      <label for="choixMOE">Laisser le choix à la MOE (+5 jours)</label>
    </li>
  </ul>

  <button class="btn-continuer",type="submit">Next</button>
  </form>

      `;
      var choixForm = document.getElementById('choixForm');
  choixForm.addEventListener('submit', test_perf_page_8);
  }
  
}

function fonctionnalite_abandon(event,liste)
{
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML=``;  
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
}



function test_perf_page_8(event){
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML=``;  
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
console.log(selectedChoice);
if (selectedChoice=='choixMOE')
{
  console.log('choixMOE++');
  contentDiv.innerHTML=`

  <h2>Aucune action à faire</h2>
  <p>Description:</p>
  <p>Le site est sur le point d'être déployé. Aucune action supplémentaire n'est requise de votre part.</p>
  <p>Texte supplémentaire:</p>
  <p>Le déploiement du site a été effectué avec succès. Toutes les fonctionnalités sont opérationnelles et prêtes à être utilisées. Félicitations pour votre travail!</p>

  <button class="btn-continuer",type="submit">Next</button>
  `;
   var btnContinuer = document.querySelector(".btn-continuer");
btnContinuer.addEventListener('click',afficherEtapeFin);


}
else if (selectedChoice=='sansTests')
{
  contentDiv.innerHTML=`

  <h2>Aucune action à faire</h2>
  <p>Description:</p>
  <p>Le site est sur le point d'être déployé. Aucune action supplémentaire n'est requise de votre part.</p>
  <p>Texte supplémentaire:</p>
  <p>Le déploiement du site a été effectué avec succès. Toutes les fonctionnalités sont opérationnelles et prêtes à être utilisées. Félicitations pour votre travail!</p>

  <button class="btn-continuer",type="submit">Next</button>
  `;
   var btnContinuer = document.querySelector(".btn-continuer");
btnContinuer.addEventListener('click',afficherEtapeFin);
}
else
{
  contentDiv.innerHTML=`

  <h2>Choix multiple (1 choix)</h2>
  <p>Description:</p>
  <p>Le chef de projet vous fait part des résultats des tests effectués sur le site. Il identifie plusieurs problèmes mineurs qui peuvent être corrigés rapidement, ainsi qu'un problème majeur qui nécessite plus de temps pour être résolu.</p>
  <p>Choix disponibles:</p>
  <form id="choixForm">
  <ul>
    <li>
      <input type="radio" id="problemes-mineurs" name="choix" value="correction-mineurs">
      <label for="problemes-mineurs">Corriger uniquement les problèmes mineurs (+2 jours)</label>
    </li>
    <li>
      <input type="radio" id="probleme-majeur" name="choix" value="correction-majeur">
      <label for="probleme-majeur">Corriger uniquement le problème majeur (+3 jours)</label>
    </li>
    <li>
      <input type="radio" id="problemes-mineurs-majeur" name="choix" value="correction-mineurs-majeur">
      <label for="problemes-mineurs-majeur">Corriger à la fois les problèmes mineurs et le problème majeur (+5 jours)</label>
    </li>
    <li>
      <input type="radio" id="ne-rien-faire" name="choix" value="ne-rien-faire">
      <label for="ne-rien-faire">Ne rien faire, le problème majeur n'est pas critique (voir 9,5 bis)</label>
    </li>
    <li>
      <input type="radio" id="choix-moe" name="choix" value="choix-moe">
      <label for="choix-moe">Laisser le choix à la MOE (+5 jours)</label>
    </li>
  </ul>
   <button class="btn-continuer",type="submit">Next</button>
  </form>


  `;
  var choixForm = document.getElementById('choixForm');
  choixForm.addEventListener('submit', afficherEtapeFin);
  
}

}
function afficherEtapeFin()
{
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML=`
  
  <h2>Le site web est déployé avec succès</h2>
  <p>Description:</p>
  <p>Le chef de projet vous informe que tous les problèmes ont été corrigés et que le site est prêt à être déployé.</p>
  <p>Le site web est déployé avec succès sur les plateformes choisies. Les délais et le budget ont été respectés et votre site répond à vos attentes. Vous recevez les retours des utilisateurs sur le site web et constatez leur satisfaction.</p>


  `;  
};

afficherEtape1();


// var contentDiv = document.querySelector(".content");
// contentDiv.innerHTML=`<button class="btn-continuer">Next</button>`;
// var btnContinuer = document.querySelector(".btn-continuer");
// btnContinuer.addEventListener('click',afficherEtape);
*/