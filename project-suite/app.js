function testHTML() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
      <p> CECI EST LA PAGE DE TEST </p>
       

    </div>
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", testHTML);
}




var delais_jour = 0 ;
var choix_let_MOE = 0 ; 
var besoinsValue ;
var budgetValue;
var delaisValue ;
var suiviValue; 
var objectifValue;



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



// Fonction pour afficher la deuxième étape du jeu
function afficherEtape2() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
      <h2>Il faut choisir . . .</h2>
      <p>Pour votre premier rendez-vous avec le chef de projet et son équipe, résumez votre projet en détails. Choisissez le délai, le budget et la régularité des réunions dans le formulaire page suivante.</p>
       <p>Appuyez sur 'Soumettre' pour envoyer vos choix.</p>
        <p>Nous sommes prêts à réaliser votre vision dans les délais et le budget fixés.</p>
         <p>Contactez-nous pour toute question.</p>
         <p> Bonne chance avec votre projet !</p>
      <button class="btn-continuer">Continuer</button>
    </div>
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape3);
}


// Fonction pour afficher la troisième étape du jeu (formulaire)
function afficherEtape3() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
  <div class="affichage-form">
    <h2>Informations du projet</h2>
    <form id="form">
      <label for="besoins">Besoins du projet :</label>
      <textarea id="besoins" name="besoins" rows="4" cols="50"></textarea>

      <label for="budget">Budget alloué :</label>
      <select id="budget" name="budget">
        <option value="100000">100 000€</option>
        <option value="200000">200 000€</option>
        <option value="300000">300 000€</option>
        <option value="400000">400 000€</option>
        <option value="500000">500 000€</option>
      </select>

      <label for="delais">Délais fixés :</label>
      <select id="delais" name="delais">
        <option value="3 mois">3 mois</option>
        <option value="6 mois">6 mois</option>
        <option value="9 mois">9 mois</option>
        <option value="1 an">1 an</option>
        <option value="2 ans">2 ans</option>
      </select>
 <br>
  <label for="reunionSelec">Reccurrence reunions</label>
  <select id="reunionSelect">
    <option value="3 jours">Une réunion tous les trois jours</option>
    <option value="par semaine">Une réunion par semaine</option>
    <option value="toutes les deux semaines">Une réunion toutes les deux semaines</option>
    <option value="par mois">Une réunion par mois</option>
  </select>
<br>
     
      <label for="objectif">Objectif principal :</label>
      <textarea id="objectif" name="objectif" rows="4" cols="50"></textarea>

      <input type="submit" value="Soumettre">
    </form>
  </div>
`;

  var form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

      besoinsValue = document.getElementById("besoins").value;
      budgetValue = document.getElementById("budget").value;
      delaisValue = document.getElementById("delais").value;
      suiviValue = document.getElementById("reunionSelect").value;
      objectifValue = document.getElementById("objectif").value;
      if (suiviValue == '3 jours'){delais_jour+=2;}
      if (suiviValue == 'par semaine'){delais_jour+=0;}
      if (suiviValue == 'toutes les deux semaines'){delais_jour+=5;}
      if (suiviValue == 'par mois'){delais_jour+=8;}

      
  
      var contentDiv4 = document.querySelector(".content");
      contentDiv4.innerHTML = `
        <div class="recap-form">
          <h2>Récapitulatif du projet</h2>
          <p>Besoins du projet : ${besoinsValue}</p>
          <p>Budget alloué : ${budgetValue}€</p>
          <p>Délais fixés : ${delaisValue}</p>
          <p>Structure de suivi : ${suiviValue}</p>
          <p>Objectif principal : ${objectifValue}</p>
          <button class="btn-continuer">Continuer</button>
        </div>
      `;
      var btnContinuer = document.querySelector(".btn-continuer");
      btnContinuer.addEventListener("click", afficherEtape5);
     
  });

}

const optionsList = [
  'Site disponible sur smartphones et tablettes',
  'Bouton de partage pour partager facilement sur les réseaux sociaux',
  'Système de recherche avancée pour trouver rapidement des informations cherchées',
  'Une section « Actualités » pour voir les dernières mises à jour et fonctionnalités',
  'Option permettant de personnaliser la couleur, la mise en page, le thème…',
  'Traduction du site en anglais',
  'Temps de chargement de la page d’accueil plus court',
  'Votre site sera disponible sur tous les navigateurs',
  'Chargement plus rapide des images',
  'Réduction de la consommation de données',
  'Résolution du problème d’affichage des caractères spéciaux',
  'Résolution du problème qui empêchait l’affichage correct des images sur certaines pages',
  'Résolution du problème qui empêchait certains utilisateurs de télécharger des fichiers du site'
];

NouvellesFonctionnalites = [];
AmeliorationPerf=[];
ResolutionsBug=[];

function fonctionnalites(){ // not used 
  
  var contentDiv = document.querySelector(".content");
  
  if(NouvellesFonctionnalites.length>=2 && AmeliorationPerf.length>=2 && ResolutionsBug.length>=2)
  {
  contentDiv.innerHTML = `
  <p>Nouvelles fonctionnalités : ${NouvellesFonctionnalites}</p>
  <p>Ameliorations Perfs : ${AmeliorationPerf}</p>
  <p>ResolutionsBug : ${ResolutionsBug}</p>
  `;
  
  console.log(NouvellesFonctionnalites)
  }
  else
  {console.log("choix des func en cours")};
  
}


var nombre_choix=2;
function afficherEtape4() {
 
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
  <div class="smart-tablette">
  <h2>Choix disponibles 2 par catégories</h2>
  <h3>Nouvelles fonctionnalités :</h3>
  <ul id="nouvelles-fonctionnalites">
    <li><button class="NouvellesFonctionnalites", onclick="getOptionText(this, NouvellesFonctionnalites,'NouvellesFonctionnalites')">Site disponible sur smartphones et tablettes (+X jours)</button></li>
    <li><button class="NouvellesFonctionnalites", onclick="getOptionText(this, NouvellesFonctionnalites,'NouvellesFonctionnalites')">Bouton de partage pour partager facilement sur les réseaux sociaux (+X jours)</button></li>
    <li><button class="NouvellesFonctionnalites", onclick="getOptionText(this, NouvellesFonctionnalites,'NouvellesFonctionnalites')">Système de recherche avancée pour trouver rapidement des informations cherchées (+X jours)</button></li>
    <li><button  class="NouvellesFonctionnalites",onclick="getOptionText(this, NouvellesFonctionnalites,'NouvellesFonctionnalites')">Une section « Actualités » pour voir les dernières mises à jour et fonctionnalités (+X jours)</button></li>
    <li><button class="NouvellesFonctionnalites", onclick="getOptionText(this, NouvellesFonctionnalites,'NouvellesFonctionnalites')">Option permettant de personnaliser la couleur, la mise en page, le thème… (+X jours)</button></li>
    <li><button class="NouvellesFonctionnalites", onclick="getOptionText(this, NouvellesFonctionnalites,'NouvellesFonctionnalites')">Traduction du site en anglais (+X jours)</button></li>
  </ul>
  <h3>Corrections de bugs :</h3>
  <ul id="corrections-bugs">
    <li><button class="ResolutionsBug", onclick="getOptionText(this, ResolutionsBug,'ResolutionsBug')">Résolution du problème d’affichage des caractères spéciaux (+X jours)</button></li>
    <li><button class="ResolutionsBug", onclick="getOptionText(this, ResolutionsBug,'ResolutionsBug')">Résolution du problème qui empêchait l’affichage correct des images sur certaines pages (+X jours)</button></li>
    <li><button class="ResolutionsBug", onclick="getOptionText(this, ResolutionsBug,'ResolutionsBug')">Résolution du problème qui empêchait certains utilisateurs de télécharger des fichiers du site (+X jours)</button></li>
  </ul>
  <h3>Améliorations des performances :</h3>
  <ul id="ameliorations-performances">
    <li><button class="AmeliorationPerf", onclick="getOptionText(this,AmeliorationPerf,'AmeliorationPerf')">Temps de chargement de la page d’accueil plus court (+X jours)</button></li>
    <li><button class="AmeliorationPerf", onclick="getOptionText(this,AmeliorationPerf,'AmeliorationPerf')">Votre site sera disponible sur tous les navigateurs (+X jours)</button></li>
    <li><button class="AmeliorationPerf", onclick="getOptionText(this,AmeliorationPerf,'AmeliorationPerf')">Chargement plus rapide des images (+X jours)</button></li>
    <li><button class="AmeliorationPerf", onclick="getOptionText(this, AmeliorationPerf,'AmeliorationPerf')">Réduction de la consommation de données (+X jours)</button></li>
  </ul>
  <button class="btn-continuer"> Next </button>

  </div>  
`;
  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape5);

 
}


  
  function getOptionText(button, liste,nom_liste) {
    var newFuncButtons = document.querySelectorAll('nom_liste');
    if (liste.length >= 2) {
      disableButtons(newFuncButtons);
      console.log('disabled');
    }
    if (liste.length<2)
   {
    var optionText = button.innerText;
    liste.push(button.innerText);
    if(optionText=='Site disponible sur smartphones et tablettes') {delais_jour+=7;}
    if (optionText == 'Site disponible sur smartphones et tablettes') {delais_jour += 7;}   
    if (optionText == 'Bouton de partage pour partager facilement sur les réseaux sociaux') {delais_jour += 2;}    
    if (optionText == 'Système de recherche avancée pour trouver rapidement des informations cherchées') {delais_jour += 5;}
    if (optionText == 'Une section « Actualités » pour voir les dernières mises à jour et fonctionnalités') {delais_jour += 4;}
    if (optionText == 'Option permettant de personnaliser la couleur, la mise en page, le thème…') {delais_jour += 4;    
    if (optionText == 'Traduction du site en anglais') {delais_jour += 6;}    
    if (optionText == 'Temps de chargement de la page d’accueil plus court') {delais_jour += 3;}    
    if (optionText == 'Votre site sera disponible sur tous les navigateurs') {delais_jour += 4;}    
    if (optionText == 'Chargement plus rapide des images') {delais_jour += 4;}    
    if (optionText == 'Réduction de la consommation de données') {delais_jour += 3;}    
    if (optionText == 'Résolution du problème d’affichage des caractères spéciaux') {delais_jour += 2;}    
    if (optionText == 'Résolution du problème qui empêchait l’affichage correct des images sur certaines pages') {delais_jour += 4;}    
    if (optionText == 'Résolution du problème qui empêchait certains utilisateurs de télécharger des fichiers du site') {delais_jour += 4};
    

    console.log(liste);
    }
  }
  }
  
  function disableButtons(buttons) {
    buttons.forEach(button => {
      button.disabled = true;
    });
  }

  const choixSelectionnes = [];
  const choixNonSelectionnes = [];
var choixSelectionnesListe = '<ul>';
 var choixNonSelectionnesListe = '<ul>';


  function afficherEtape5() {
    var contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = `
      <h2>Choix multiple</h2>
      <p>Description :</p>
      <p>Le chef de projet vous indique que les délais sont envisageables si tout se passe parfaitement, mais son expérience lui a appris que ce cas n'arrive que très rarement. Il vous propose de rallonger les délais ou d’enlever certaines fonctionnalités. Vous ne voulez pas rallonger les délais.</p>
      <p>Choix disponibles :</p>
      <form id="choixForm">
        <ul class="no-bullets">
          <li>
            <input type="checkbox" id="site-smartphones-tablettes" name="choix" value="site-smartphones-tablettes">
            <label for="site-smartphones-tablettes">Site disponible sur smartphones et tablettes</label>
          </li>
          <li><input type="checkbox" id="bouton-partage" name="choix" value="bouton-partage">
          <label for="bouton-partage">Bouton de partage pour partager facilement sur les réseaux sociaux</label></li>
        <li><input type="checkbox" id="recherche-avancee" name="choix" value="recherche-avancee">
          <label for="recherche-avancee">Système de recherche avancée pour trouver rapidement des informations cherchées</label></li>
        <li><input type="checkbox" id="section-actualites" name="choix" value="section-actualites">
          <label for="section-actualites">Une section « Actualités » pour voir les dernières mises à jour et fonctionnalités</label></li>
        <li><input type="checkbox" id="personnalisation" name="choix" value="personnalisation">
          <label for="personnalisation">Option permettant de personnaliser la couleur, la mise en page, le thème...</label></li>
        <li><input type="checkbox" id="traduction-anglais" name="choix" value="traduction-anglais">
          <label for="traduction-anglais">Traduction du site en anglais</label></li>
        <li><input type="checkbox" id="temps-chargement" name="choix" value="temps-chargement">
          <label for="temps-chargement">Temps de chargement de la page d’accueil plus court</label></li>
        <li><input type="checkbox" id="site-tous-navigateurs" name="choix" value="site-tous-navigateurs">
          <label for="site-tous-navigateurs">Votre site sera disponible sur tous les navigateurs</label></li>
        <li><input type="checkbox" id="chargement-rapide-images" name="choix" value="chargement-rapide-images">
          <label for="chargement-rapide-images">Chargement plus rapide des images</label></li>
        <li><input type="checkbox" id="reduction-donnees" name="choix" value="reduction-donnees">
          <label for="reduction-donnees">Réduction de la consommation de données</label></li>
        <li><input type="checkbox" id="resolution-caracteres-speciaux" name="choix" value="resolution-caracteres-speciaux">
          <label for="resolution-caracteres-speciaux">Résolution du problème d’affichage des caractères spéciaux</label></li>
        <li><input type="checkbox" id="resolution-images" name="choix" value="resolution-images">
          <label for="resolution-images">Résolution du problème qui empêchait l’affichage correct des images sur certaines pages</label></li>
        <li><input type="checkbox" id="resolution-telechargement" name="choix" value="resolution-telechargement">
          <label for="resolution-telechargement">Résolution du problème qui empêchait certains utilisateurs de télécharger des fichiers du site</label></li>
        <li><input type="checkbox" id="rien-faire" name="choix" value="rien-faire">
          <label for="rien-faire">Ne rien faire, tout se passera bien</label></li>
        </ul>
        <button class="btn-continuer" , type="submit">Valider</button>
      </form>
    `;

    // Récupérer la case à cocher "Ne rien faire"
var rienFaireCheckbox = document.getElementById("rien-faire");

// Récupérer toutes les autres cases à cocher
var checkboxes = document.querySelectorAll("#choixForm input[type='checkbox']:not(#rien-faire)");

// Ajouter un événement de changement à la case "Ne rien faire"
rienFaireCheckbox.addEventListener("change", function() {
  if (rienFaireCheckbox.checked) {
    // Si "Ne rien faire" est coché, décocher toutes les autres cases
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  }
});

// Ajouter un événement de changement à chaque autre case à cocher
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      // Si une autre case est cochée, décocher "Ne rien faire"
      rienFaireCheckbox.checked = false;
    }
  });
});

  
    const choixForm = document.getElementById('choixForm');
  
    choixForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
 
  const checkboxes = document.querySelectorAll('input[name="choix"]');
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      choixSelectionnes.push(checkbox.value);
    } else {
      choixNonSelectionnes.push(checkbox.value);
    }});
     
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
      contentDiv.innerHTML=``;
      
      let htmll = `<p> Choix selectionnes </p>
      <p> Le chef de projet vous indique que les délais sont envisageables si tout se passe parfaitement, mais son expérience lui a appris que ce cas n'arrive que très rarement. Il vous propose de rallonger les délais ou d’enlever certaines fonctionnalités. Vous ne voulez pas rallonger les délais.</p>
      <br>
      <p> supprimer un ou plusieurs choix parmi : </p>
      `;
      
    choixSelectionnes.forEach(function (choix) {
       htmll += `  
        <ul class="no-bullets">
          <li><input type="checkbox" id="${choix}" name="choix" value="${choix}">
          <label for="${choix}">${choix}</label></li>
        </ul>
    
       
      `;
     
    });

    contentDiv.innerHTML+=` 
    

    <form id="choixForm">
    ${htmll}
    <button class="btn-continuer">Next</button>
    </form>`;

    var choixForm = document.getElementById('choixForm');
    choixForm.addEventListener('submit', afficherEtape6)
           
    });
  }



  function afficherEtape6(event) {
    event.preventDefault();
    //fonctionnalite_abandon(event,optionsList);

    var contentDiv = document.querySelector(".content");
    contentDiv.innerHTML=`<button class="btn-continuer">Next</button>`;
   let htmll = `<p> Choix non selectionnes`;
    choixNonSelectionnes.forEach(function (choix) {
       htmll += `
        <ul class="no-bullets">
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
 
  btnContinuer.addEventListener('click', afficherEtape7,console.log('ksjdf'));

  }
  
function afficherEtape7(){
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML=``;
  choixSelectionnes.forEach(function (choix) {contentDiv.innerHTML+=`<p>${choix}</p>`});
    contentDiv.innerHTML+=`<button class="btn-continuer">Next</button> <p>test</p>`;


var btnContinuer = document.querySelector(".btn-continuer");
btnContinuer.addEventListener('click',afficherEtape8);


}
function afficherEtape8(){
  var contentDiv = document.querySelector(".content");
contentDiv.innerHTML=`
 <p>test</p>
<h2>Choix multiple (1 option)</h2>
<p>Description :</p>
<p>L’équipe de la MOE a réalisé une version intermédiaire du site web et vous propose de le tester.</p>
<p>Choix disponibles :</p>
<form id="choixForm">
  <ul class="no-bullets">
    <li>
      <input type="radio" id="tester" name="choix" value="tester">
      <label for="tester">Le tester (+ X jours)</label>
    </li>
    <li>
      <input type="radio" id="rien-faire" name="choix" value="rien-faire">
      <label for="rien-faire">Ne rien faire, vous leur faîtes confiance</label>
    </li>
  </ul>
  <button class="btn-continuer", type="submit">Valider</button>
</form>
`;

var choixForm = document.getElementById('choixForm');
choixForm.addEventListener('submit', afficherEtape9)

}; 


function afficherEtape9(event){
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
  
    if (selectedChoice !== null) {
      contentDiv.innerHTML = `<p>${selectedChoice} sélectionné</p>
      <button class="btn-continuer">Next</button> <p>test</p>
      `;
    }
  
  var btnContinuer = document.querySelector(".btn-continuer");
btnContinuer.addEventListener('click',afficherEtape10);
};

function afficherEtape10(){
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
  <ul class="no-bullets">
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
    <ul class="no-bullets">
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
      <ul class="no-bullets">
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
      <ul class="no-bullets">
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
  <ul class="no-bullets">
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
  <ul class="no-bullets">
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