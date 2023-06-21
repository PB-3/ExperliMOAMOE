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




// Fonction pour afficher la première étape du jeu
function afficherEtape1() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
  <head>
  <title>Introduction aux normes de qualité et leur importance dans les organisations</title>
  <link rel="stylesheet" type="text/css" href="stylex.css">
</head>
<body>
  <div id="page1" class="">
    <h1>Introduction</h1>
    <p>
      Les normes de qualité jouent un rôle crucial dans les organisations modernes, qu'il s'agisse de secteurs industriels, de services ou d'institutions gouvernementales. Elles fournissent des directives, des spécifications et des exigences pour garantir que les matériaux, les produits, les processus et les services atteignent des niveaux de qualité élevés et sont adaptés à leurs objectifs spécifiques. Dans ce cours, nous explorerons les principaux aspects des normes de qualité, leur utilisation par les organisations et quelques exemples de normes largement adoptées.
    </p>
  </div>

  <button class="btn-continuer">Continuer</button>
</body>
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape2);
}

function afficherEtape2() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
  <head>
  <title>Introduction aux normes de qualité et leur importance dans les organisations</title>
 
</head>
<body>
  <div id="page2">
    <h1>Qu'est-ce qu'une norme qualité?</h1>
    <p>
      Une norme qualité est un document qui définit les exigences, les spécifications, les lignes directrices ou les caractéristiques à suivre pour garantir que les produits, les processus et les services répondent à des normes de qualité spécifiques. Ces normes sont développées par des organismes de normalisation tels que l'International Organization for Standardization (ISO) et d'autres organismes nationaux ou internationaux. Les normes qualité fournissent un cadre permettant aux organisations de mettre en œuvre des pratiques cohérentes et d'assurer la satisfaction des clients, la sécurité des produits et services, ainsi que la conformité réglementaire.
    </p>
  </div>
  <button class="btn-continuer">Continuer</button>
</body>
  `;


  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape3);
}

function afficherEtape3() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
  <head>
  <title>Introduction aux normes de qualité et leur importance dans les organisations</title>

</head>
<body>
  <div id="page3">
    <h1>Importance des normes de qualité pour les organisations</h1>
    <p>
      Les organisations utilisent des normes de qualité pour diverses raisons, qui incluent :
      <ul>
        <li>Satisfaction des exigences de qualité des clients</li>
        <li>Garantie de la sécurité des produits et services</li>
        <li>Respect de la réglementation</li>
        <li>Amélioration des processus et de la performance</li>
      </ul>
    </p>
  </div>
  <button class="btn-continuer">Continuer</button>

</body>
   
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape4);
}

function afficherEtape4() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
  <head>
  <title>Introduction aux normes de qualité et leur importance dans les organisations</title>
</head>
<body>
  <div id="page4">
    <h1>Exemples de normes de qualité</h1>
    <p>
      Il existe de nombreuses normes de qualité utilisées dans différents domaines. Quelques exemples courants comprennent :
      <ul>
        <li>ISO 9001:2015 - Systèmes de gestion de la qualité</li>
        <li>ISO 14001:2015 - Systèmes de gestion environnementale</li>
        <li>ISO/IEC 27001:2013 - Systèmes de gestion de la sécurité de l'information</li>
        <li>ISO 45001:2018 - Systèmes de gestion de la santé et de la sécurité au travail</li>
      </ul>
    </p>
  </div>
  <button class="btn-continuer">Continuer</button>

</body>
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", afficherEtape5);
}

function afficherEtape5() {
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = `
  <head>
  <title>Introduction aux normes de qualité et leur importance dans les organisations</title>
</head>
<body>
  <div id="page5">
    <h1>Conclusion</h1>
    <p>
      Les normes de qualité sont essentielles pour les organisations afin d'assurer la conformité, la satisfaction des clients et l'amélioration continue. Elles fournissent des directives et des spécifications pour garantir que les produits, les processus et les services répondent à des normes élevées de qualité, de sécurité et de performance. Les normes de qualité les plus couramment utilisées sont développées par des organismes de normalisation tels que l'ISO.
    </p>
    <p>
      En comprenant l'importance des normes de qualité et en les appliquant de manière appropriée, les organisations peuvent renforcer leur réputation, gagner la confiance des clients, réduire les risques et accroître leur compétitivité sur le marché. Il est essentiel de rester à jour avec les dernières normes de qualité et de les intégrer dans les processus et les pratiques organisationnels.
    </p>
    <p>
      En conclusion, les normes de qualité sont un outil précieux pour les organisations, les aidant à atteindre l'excellence opérationnelle, à respecter les réglementations et à fournir des produits et services de qualité supérieure.
    </p>
  </div>
  <button class="btn-continuer">Continuer</button>
</body>
  `;

  var btnContinuer = document.querySelector(".btn-continuer");
  btnContinuer.addEventListener("click", quiz);
}

function quiz() {
  window.location.href='quizNorme.html';
}

afficherEtape1();

