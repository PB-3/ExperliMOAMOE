function testHTML(url, callback) {
    var contentDiv = document.querySelector(".content");

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



var choixProjet = [];
var retours_desc = [];
var cout = 0 ; 


var choices = {
  "amelioration-vitesse": 1000,
  "section-blog": 500,
  "integration-reseaux-sociaux": 800,
  "referencement": 1200,
  "commerce-electronique": 2000,
  "conception-graphique": 1500,
  "recruter-interne": 2000,
  "externaliser-equipe": 1000,
  "approche-cascade": 1000,
  "approche-agile": 1200,
  "decoupage-phase": 800,
  "decoupage-produit": 1000,
  "recrutement-interne": 2000,
  "agence-recrutement": 3000,
  "externalisation-taches": 1500,
  "sous-traitance": 1800,
  "redistribuer-membres": 1000,
  "formations-internes": 500,
  "analyserOption": 200,
  "extensionOption": 300,
  "reunionOption": 100,
  "groupeTravailOption": 200,
  "classementOption": 150,
  "consultationOption": 250,
  "evaluationOption": 300,
  "techniquesOption": 200,
  "tableauBord": 500,
  "outilGestion": 400,
  "reunionsEtape": 200,
  "tests-acceptation": 800,
  "tests-fonctionnels": 700,
  "tests-unitaires": 600,
  "service-cloud": 1000,
  "serveur-dedie": 1500,
  "serveur-partage": 1200,
  "approbation":10,
  "refus":0,
  "test":400
};





function updateProgressBar() {
  var pourcentage = (cout / 13000) * 100;

  
    if (cout <= 13000) {
      var pourcentageOppose = Math.abs(pourcentage - 100);
      var progressBar = document.querySelector(".progress");
      progressBar.style.width = pourcentageOppose + "%";
      progressBar.style.background = ""; // Réinitialiser la couleur de fond
      progressBar.innerHTML = ""; // Réinitialiser le message
    } else {
      var progressBar = document.querySelector(".progress");
      progressBar.style.width = "100%"; // Remplir la barre à 100%
      progressBar.style.background = "#eb4343"; // Changer la couleur de fond en #ff0000
      progressBar.innerHTML = "Budget dépassé /!\\";
    }
 


}




function checkWinOrLose() {
  var winRange = { min: 10000, max: 13000 };

  if (cout >= winRange.min && cout <= winRange.max) {
    console.log("Congratulations! You win!");
    return true;
  } else if (cout < winRange.min && cout > winRange.max) {
    console.log("Sorry, you lose!");
    return false;
  } 
}



  function afficherEtape1() {
updateProgressBar();
console.log("etape1");
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <h1>PRINCE2-PMBOK</h1>
    <div class="game-title">
      
      <p>En tant que Maître d'Ouvrage (MOA), votre rôle est essentiel pour le succès du projet. Vous devez lancer le projet en définissant vos besoins, votre budget et vos délais, en utilisant les principes du PMBOK et du PRINCE2.</p>
      <p> Une structure de pilotage solide doit être mise en place pour superviser le projet, incluant des réunions régulières de suivi. Votre objectif ultime est de respecter les délais, le budget et d'atteindre un niveau élevé de qualité pour le développement du site web.</p>
     
    </div>
    <button class="btn-continuer">Continuer</button>
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape2);
}


function afficherEtape2()
{
  console.log("etape2");
  updateProgressBar();
  testHTML("page1.html",function(){
    btnContinuer=document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click",afficherEtape3);
  })
}function afficherEtape3() {
  console.log("etape3");
  updateProgressBar();
  console.log("etape3");
  testHTML("page2.html", function() {
    var form = document.querySelector(".btn-continuer");
    form.addEventListener("click", afficherEtape5);
  });
}
function afficherEtape4(event) {
  
  updateProgressBar();
  console.log("etape4");
  event.preventDefault();
  var form = event.target;
  var selectedChoice = null;
  var isOptionSelected = false; // Variable to track if any option is selected


  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    var selectedChoice = element.value;
    if (element.checked && selectedChoice in choices) {
      console.log("selected choice: ", selectedChoice);
      choixProjet.push(selectedChoice);
      cout += choices[selectedChoice];
      console.log(cout);
      isOptionSelected = true; // Set the flag to true if an option is selected
    }
  }
  updateProgressBar();
  // Check if no option is selected
  if (!isOptionSelected) {
    alert("Veuillez sélectionner au moins une option pour continuer.");
    return; // Exit the function if no option is selected
  }

  prince2_1();
}


  


function afficherEtape5()

{
  console.log("etape5");
  updateProgressBar();
  testHTML("page3.html",function()
  {
    var btn = document.querySelector(".btn-continuer");
    btn.addEventListener("click", casPRINCE2);
  });
}



function casPRINCE2()

{
  console.log("etape Prince2");
  updateProgressBar();
  testHTML("page4.html",function()
  {
    var btnContinuer=document.querySelector("#choixForm");
    btnContinuer.addEventListener("submit",afficherEtape4);
  })
}

function prince2_1()

{console.log("prince2");
  updateProgressBar();
  testHTML("prince2/prince2_page1.html",function(){
   var btnContinuer=document.querySelector("#choixForm");
   btnContinuer.addEventListener("submit",prince2_2);
  })
}
function prince2_2(event)
{updateProgressBar();
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) 
  {
    var element = form.elements[i];
    if (element.type === "radio" && element.checked)
    {
      selectedChoice = element.value;
      break;
    }
  }
  if(selectedChoice===null)
  {
    alert("veuillez sélectionner une option.");
    return;
  }
  if(selectedChoice=== "recruter-interne")
  {
    choixProjet.push(selectedChoice);
    cout+=choices[selectedChoice];
    console.log(cout);
    
  }
  else if (selectedChoice==="externaliser-equipe")
  {
    choixProjet.push(selectedChoice);
    cout+=choices[selectedChoice];
    console.log(cout);
  }
  console.log(choixProjet);
  updateProgressBar();
  testHTML("prince2/prince2_page2.html",function(){
  var btnContinuer=document.querySelector("#choixForm");
  btnContinuer.addEventListener("submit",prince2_3);
  });
}

function prince2_3(event) {
  event.preventDefault();
  updateProgressBar();
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
  if(selectedChoice===null)
  {
    alert("veuillez sélectionner une option.");
    return;
  }
  if (selectedChoice === "approche-cascade" || selectedChoice === "approche-agile") {
    choixProjet.push(selectedChoice);
    cout+=choices[selectedChoice];
    console.log(choixProjet);
   testHTML("fiche_info_approches.html",function(){
    btn=document.querySelector(".btn-continuer");

    btn.addEventListener("click", function(){
      testHTML("prince2/prince2_page3.html",function(){




        updateProgressBar();
        btn=document.querySelector("#choixForm");
        btn.addEventListener("submit",prince2_4);
      });
    })  
   })
  }
}

function prince2_4(event) { 
  updateProgressBar();
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if ((element.type === "radio" || element.type === "checkbox") && element.checked) {
      selectedChoice = element.value;
      cout+=choices[selectedChoice];
       updateProgressBar(); 
      console.log(cout,"choix decoupzge")
      break;
    }
  }

  event.preventDefault();
  
  // Check if no option is selected
  if (selectedChoice === null) {
    alert("Veuillez sélectionner une option.");
    return;
  }
  
  testHTML("fiche_info_decoupages.html",function(){

    btn=document.querySelector(".btn-continuer");
    btn.addEventListener("click",function(){


        
    let random_alea = Math.floor(Math.random() * 2) + 1;
    console.log(random_alea, "random");
    let link = "prince2/prince2_page4_alea" + random_alea + ".html";
    testHTML(link, function () {
      var btnContinuer = document.querySelector("#choixForm");
      btnContinuer.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche la soumission du formulaire
        form = event.target;
   
        var isOptionSelected = false; // Variable to track if any option is selected
        
        for (var i = 0; i < form.elements.length; i++) {
          var element = form.elements[i];
          selectedChoice = element.value;
          if (selectedChoice === null) {
            alert("Veuillez sélectionner une option.");
            return;
          }
          if (element.type === "checkbox" && element.checked && selectedChoice in choices) {
            choixProjet.push(selectedChoice);
            cout += choices[selectedChoice];
            console.log(cout);
            isOptionSelected = true; // Set the flag to true if any option is selected
          }
        }

        // Check if no option is selected
        if (!isOptionSelected) {
          alert("Veuillez sélectionner au moins une option pour continuer.");
          return;
        }
        updateProgressBar();

        console.log(choixProjet);
        prince2_5();
      });
    });
  



    })
  })
  console.log(choixProjet);


}

function prince2_5() {
  updateProgressBar();
  testHTML("prince2/prince2_page5.html", function () {
    var form = document.querySelector("#choixForm");
    var inputs = form.querySelectorAll("input[type='radio']");
    var selectedChoice = null;

    inputs.forEach(function (input) {
      input.addEventListener("change", function () {
        selectedChoice = input.value;
        isOptionSelected = true;
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (selectedChoice !== null) {
        choixProjet.push(selectedChoice);
        cout += choices[selectedChoice];
        console.log(cout);
        prince2_6();
      } else {
        // Handle the case where no option is selected
        alert("Veuillez sélectionner une option.");
      }
    });
  });
}



function prince2_6() {
  updateProgressBar();
  testHTML("prince2/prince2_page6.html", function () {
    let btnContinuer = document.querySelector("#choixForm");
    btnContinuer.addEventListener("submit", function (event) {
      event.preventDefault();
      var textarea = document.getElementById("retour");

      if (textarea.value === "") {
        alert("Veuillez sélectionner une option.");
        return;
      }

      retours_desc.push(textarea.value);
      console.log(retours_desc);
      prince2_7();
    });
  });
}
function prince2_7() {

  updateProgressBar();
  testHTML("prince2/prince2_page7.html", function () {
    let choixForm = document.getElementById("choixForm");
    console.log("func7");
    choixForm.addEventListener("submit", function (event) {
      event.preventDefault();
      form = event.target;
      selectedChoice = null;
      var isOptionSelected = false; // Flag variable

      for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        if (element.type === "radio" && element.checked) {
          isOptionSelected = true;
          selectedChoice = element.value;
          cout+=choices[selectedChoice];
          console.log(cout);
          choixProjet.push(selectedChoice);
          cout += choices[selectedChoice];
          console.log(choixProjet);
        }
      }

      if (!isOptionSelected) { // Check if no option is selected
        alert("Veuillez sélectionner une option.");
        return;
      }

      prince2_8();
    });
  });
}

function prince2_8() {
  updateProgressBar();

  testHTML("prince2/prince2_page8.html", function () {
    let btn = document.querySelector("#choixForm");
    console.log("func8");
    btn.addEventListener("submit", function(event){
      
      event.preventDefault();
      form = event.target;
      selectedChoice = null;
      var isOptionSelected = false; // Flag variable

      for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        if (element.type === "radio" && element.checked) {
          isOptionSelected = true;
          selectedChoice = element.value;
          cout+=choices[selectedChoice];
          console.log(cout);
          choixProjet.push(selectedChoice);
          cout += choices[selectedChoice];
          console.log(choixProjet);
          
        }
      if(selectedChoice=="refus")
      {
        prince2_9();
        return;
      }
      if(selectedChoice=="test")
      {
        testHTML("prince2/prince2_page8_test.html",function(){
          btn=document.querySelector(".btn-continuer");
          btn.addEventListener("click",prince2_9);
        });
      }
      }
      if (!isOptionSelected) { // Check if no option is selected
        alert("Veuillez sélectionner une option.");
        return;
      }
      prince2_9();
    });
  });
}

function prince2_9() {
  updateProgressBar();
  testHTML("prince2/prince2_page9.html", function () {
    console.log("func9");
    var form = document.querySelector("#choixForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var selectedChoice = null;

      for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        if (element.type === "radio" && element.checked && element.value in choices) {
          selectedChoice = element.value;
          choixProjet.push(selectedChoice);
          cout += choices[selectedChoice];
          updateProgressBar();
          console.log(cout);
          if(checkWinOrLose()) prince2_10_win();
          else
            prince2_10_loose();
          return; // Exit the loop if an option is selected
        }
      }

   
    });
  });
}




function prince2_10_win() {
  testHTML("prince2/prince2_page10_win.html");
}
function prince2_10_loose() {
  testHTML("prince2/prince2_page10_loose.html");
}


afficherEtape1();
