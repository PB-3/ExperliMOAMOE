
function choix_scenario(event) {
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
  
  if (selectedChoice === 'MOA') {
    window.location.href='MOA/Jeu_MOA.php';
    console.log("Choix : MOA");
  } else if (selectedChoice === 'MOE') {

     // Obtenir l'URL courante
    var currentUrl = window.location.href;

    // Supprimer le nom du fichier (fichier.html) de l'URL
    var parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));

    // Remonter au dossier parent (last)
    var grandParentUrl = parentUrl.substring(0, parentUrl.lastIndexOf("/"));

    // Afficher le chemin d'accès au dossier parent (last)
    console.log(grandParentUrl);
    window.location.href='MOE-code/Jeu_MOE.php';
    
  
  } else if (selectedChoice === 'PRINCE2') {
      // Obtenir l'URL courante
    var currentUrl = window.location.href;

    // Supprimer le nom du fichier (fichier.html) de l'URL
    var parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));

  // Remonter au dossier parent (last)
    var grandParentUrl = parentUrl.substring(0, parentUrl.lastIndexOf("/"));

  // Afficher le chemin d'accès au dossier parent (last)
    console.log(grandParentUrl);  
    window.location.href='prince2_pmbok/Jeu_PRINCE2_PMBOK.php';
  }
  else if (selectedChoice === 'NORME'){
     // Obtenir l'URL courante
    var currentUrl = window.location.href;

    // Supprimer le nom du fichier (fichier.html) de l'URL
    var parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));

    // Remonter au dossier parent (last)
    var grandParentUrl = parentUrl.substring(0, parentUrl.lastIndexOf("/"));

    // Afficher le chemin d'accès au dossier parent (last)
    console.log(grandParentUrl);
    window.location.href='norme_qualite/norme_qualite.php';


  }
}

  
var btn = document.querySelector("#choixForm");
btn.addEventListener("submit",choix_scenario);
