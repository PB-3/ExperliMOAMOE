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



  function afficherEtape1() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
    <div class="game-title">
      <h1>PRINCE2-PMBOK</h1>
      <p>En tant que Maître d'Ouvrage (MOA), votre rôle est essentiel pour le succès du projet. Vous devez lancer le projet en définissant vos besoins, votre budget et vos délais, en utilisant les principes du PMBOK et du PRINCE2.</p>
      <p> Une structure de pilotage solide doit être mise en place pour superviser le projet, incluant des réunions régulières de suivi. Votre objectif ultime est de respecter les délais, le budget et d'atteindre un niveau élevé de qualité pour le développement du site web.</p>
     
    </div>
    <button class="btn-continuer">Continuer</button>
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape2);
}

// var contentDiv = document.querySelector(".content");
// testHTML("infos_projets_debut.html", function () {});
// var btnContinuer = document.getElementById("");
// btnContinuer.addEventListener("submit",);

function afficherEtape2()
{
  var contentDiv = document.querySelector(".content");
  testHTML("page1.html",function(){
    btnContinuer=document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click",afficherEtape3);
  })
}
function afficherEtape3()
{ console.log("etape3");
  var contentDiv = document.querySelector(".content");
  testHTML("page2.html",function()
  {
    var form = document.querySelector("#choixForm"); // Remplacez "formId" par l'ID de votre formulaire
    form.addEventListener("submit", afficherEtape4);
  })
}
function afficherEtape4(event)
{   console.log("etape4");
    event.preventDefault();
    var form = event.target;
    var selectedChoice = null;

    // Parcours des éléments du formulaire pour trouver le choix sélectionné
    for (var i = 0; i < form.elements.length; i++)
     {
      var element = form.elements[i];
      var value = element.value
      if (element.checked)
       {
        
        console.log("selected choice : ",selectedChoice)
        choixProjet.push(value);
        console.log("element : ",value);
       }
    }
    choices = [
      "amelioration-vitesse",
      "section-blog",
      "integration-reseaux-sociaux",
      "referencement",
      "commerce-electronique",
      "conception-graphique"
  ];
  
console.log(choixProjet);
afficherEtape5();
}   
  


function afficherEtape5()
{
  testHTML("page3.html",function()
  {
    var choix = document.getElementById("choixForm");
    choix.addEventListener("submit", function (event)
 {
      
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
  if(selectedChoice=="PRINCE2")
    {
      casPRINCE2();
    
    }
  else if (selectedChoice=="PMBOK")
  {
    casPMBOK();
     
  }

 });
  })
}

function casPRINCE2()
{
  testHTML("page4.html",function()
  {
    var btnContinuer=document.querySelector(".btn-continuer");
    btnContinuer.addEventListener("click",prince2_1);
  })
}

function prince2_1()
{
  testHTML("prince2/prince2_page1.html",function(){
   var btnContinuer=document.querySelector("#choixForm");
   btnContinuer.addEventListener("submit",prince2_2);
  })
}
function prince2_2(event)
{
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
  if(selectedChoice=== "recruter-interne")
  {
    choixProjet.push(selectedChoice);
  }
  else if (selectedChoice==="externaliser-equipe")
  {
    choixProjet.push(selectedChoice);
  }
  console.log(choixProjet);
  testHTML("prince2/prince2_page2.html",function(){
  var btnContinuer=document.querySelector("#choixForm");
  btnContinuer.addEventListener("submit",prince2_3);
  });
}

function prince2_3(event) {
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

  if (selectedChoice === "approche-cascade" || selectedChoice === "approche-agile") {
    choixProjet.push(selectedChoice);
    console.log(choixProjet);
    testHTML("prince2/prince2_page3.html", function () {
      var btnContinuer = document.querySelector("#choixForm");
      btnContinuer.addEventListener("submit", prince2_4); // Correction : Suppression de l'argument "event"
    });
  }
}

function prince2_3(event) {
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

  if (selectedChoice === "approche-cascade" || selectedChoice === "approche-agile") {
    choixProjet.push(selectedChoice);
    console.log(choixProjet);
    testHTML("prince2/prince2_page3.html", function () {
      var btnContinuer = document.querySelector("#choixForm");
      btnContinuer.addEventListener("submit", prince2_4); // Correction : Suppression de l'argument "event"
    });
  }
}
function prince2_4(event) {
  var form = event.target;
  var selectedChoice = null;

  // Parcours des éléments du formulaire pour trouver le choix sélectionné
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if ((element.type === "radio" || element.type === "checkbox") && element.checked) {
      selectedChoice = element.value;
      break;
    }
  }

  event.preventDefault();

  if (selectedChoice === "decoupage-phase" || selectedChoice === "decoupage-produit") {
    choixProjet.push(selectedChoice);
    let random_alea = Math.floor(Math.random() * 2) + 1;
    console.log(random_alea, "random");
    let link = "prince2/prince2_page4_alea" + random_alea + ".html";
    testHTML(link, function () {
      var btnContinuer = document.querySelector("#choixForm");
      btnContinuer.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche la soumission du formulaire
        form = event.target;
        let choix = [
          "recrutement-interne",
          "agence-recrutement",
          "externalisation-taches",
          "sous-traitance",
          "redistribuer-membres",
          "formations-internes",
          "analyserOption",
          "extensionOption",
          "reunionOption",
          "groupeTravailOption",
          "classementOption",
          "consultationOption",
          "evaluationOption",
          "techniquesOption"
        ];

        for (var i = 0; i < form.elements.length; i++) {
          var element = form.elements[i];
          if (element.type === "checkbox" && element.checked) {
            selectedChoice = element.value;
            choixProjet.push(selectedChoice);
          }
        }

        console.log(choixProjet);
        prince2_5();
      });
    });
  }

  console.log(choixProjet);
}

function  prince2_5()
{
  testHTML("prince2/prince2_page5.html",function()
  {
    var btnContinuer=document.querySelector("#choixForm");
    btnContinuer.addEventListener("submit",function(event){
      event.preventDefault();
      var inputValues = [
        "tableau-de-bord-visuel",
        "outil-gestion-projet-en-ligne",
        "reunions-etape-regulieres"
      ];
      
      form = event.target;
      selectedChoice=null;
      for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        if (element.type === "radio" && element.checked) {
          selectedChoice = element.value;
          choixProjet.push(selectedChoice);
        }
      }
      console.log(choixProjet);
    })

    })
}
afficherEtape1();