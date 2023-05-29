function testHTML() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
      <p> TEST </p>
      <p>Nouvelles fonctionnalités : ${NouvellesFonctionnalites}</p>
      <button class="btn-continuer">Continuer</button>

    </div>
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", testHTML);
}













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
      

      <label for="suivi">Structure de suivi :</label>
      <textarea id="suivi" name="suivi" rows="4" cols="50"></textarea>

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
      suiviValue = document.getElementById("suivi").value;
      objectifValue = document.getElementById("objectif").value;
  
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
      btnContinuer.addEventListener("click", afficherEtape4);
     
  });

}
NouvellesFonctionnalites = [];
AmeliorationPerf=[];
ResolutionsBug=[];
function fonctionnalites(){
  var contentDiv = document.querySelector(".content");

  contentDiv.innerHTML = `
  <p>Nouvelles fonctionnalités : ${NouvellesFonctionnalites}</p>
  <p>Ameliorations Perfs : ${AmeliorationPerf}</p>
  <p>ResolutionsBug : ${ResolutionsBug}</p>
  <button class="next" onclick="getOptionText(this)">Next</button>
  `;
  var btnContinuer = document.querySelector(".next");
  btnContinuer.addEventListener("click", testHTML);
  console.log(NouvellesFonctionnalites)
}



function afficherEtape4() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
  <div class="smart-tablette">
  <h2>Choix disponibles</h2>
  <h3>Nouvelles fonctionnalités :</h3>
  <ul id="nouvelles-fonctionnalites">
    <li><button  onclick="getOptionText(this, NouvellesFonctionnalites)">Site disponible sur smartphones et tablettes (+X jours)</button></li>
    <li><button  onclick="getOptionText(this, NouvellesFonctionnalites)">Bouton de partage pour partager facilement sur les réseaux sociaux (+X jours)</button></li>
    <li><button onclick="getOptionText(this, NouvellesFonctionnalites)">Système de recherche avancée pour trouver rapidement des informations cherchées (+X jours)</button></li>
    <li><button onclick="getOptionText(this, NouvellesFonctionnalites)">Une section « Actualités » pour voir les dernières mises à jour et fonctionnalités (+X jours)</button></li>
    <li><button  onclick="getOptionText(this, NouvellesFonctionnalites)">Option permettant de personnaliser la couleur, la mise en page, le thème… (+X jours)</button></li>
    <li><button  onclick="getOptionText(this, NouvellesFonctionnalites)">Traduction du site en anglais (+X jours)</button></li>
  </ul>
  
  <h3>Améliorations des performances :</h3>
  <ul id="ameliorations-performances">
    <li><button  onclick="getOptionText(this,AmeliorationPerf)">Temps de chargement de la page d’accueil plus court (+X jours)</button></li>
    <li><button  onclick="getOptionText(this,AmeliorationPerf)">Votre site sera disponible sur tous les navigateurs (+X jours)</button></li>
    <li><button  onclick="getOptionText(this,AmeliorationPerf)">Chargement plus rapide des images (+X jours)</button></li>
    <li><button onclick="getOptionText(this, AmeliorationPerf)">Réduction de la consommation de données (+X jours)</button></li>
  </ul>
  
  <h3>Corrections de bugs :</h3>
  <ul id="corrections-bugs">
    <li><button  onclick="getOptionText(this, ResolutionsBug)">Résolution du problème d’affichage des caractères spéciaux (+X jours)</button></li>
    <li><button  onclick="getOptionText(this, ResolutionsBug)">Résolution du problème qui empêchait l’affichage correct des images sur certaines pages (+X jours)</button></li>
    <li><button onclick="getOptionText(this, ResolutionsBug)">Résolution du problème qui empêchait certains utilisateurs de télécharger des fichiers du site (+X jours)</button></li>
  </ul>
  </div>
  
</div>

  `;
  var btnContinuer = document.querySelector(".smart-tablette");
  btnContinuer.addEventListener("click", fonctionnalites);

 
}
function getOptionText(button,listes) {
  var optionText = button.innerText;
  listes.push(button.innerText)
  console.log(optionText);
}



afficherEtape1();