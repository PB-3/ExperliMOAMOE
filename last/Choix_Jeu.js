 
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
        window.location.href = 'MOA/Jeu_MOA.php';
      console.log("Choix : MOA");
    } else if (selectedChoice === 'MOE') {
      window.location.href = 'MOE-code/Jeu_MOE.php';
      console.log("Choix : MOEE");
    } else if (selectedChoice === 'PRINCE2') {
        window.location.href = 'prince2_pmbok/Jeu_PRINCE2_PMBOK.php';
      console.log("Choix : PRINCE2");
    }
  }
  
var btn = document.querySelector("#choixForm");
btn.addEventListener("submit",choix_scenario);