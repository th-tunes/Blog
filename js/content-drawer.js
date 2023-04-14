/* Este script tem o objetivo de alterar o conteúdo do drawer quando a tela estiver com a resolução para dispositivos desktop */

const containerDrawer = document.querySelector(".drawer-list");
let contentDrawer = document.querySelectorAll(".drawer-link");

const linkDrawer = [
                    "strings.html",
                    "woodwinds.html",
                    "brass.html",
                    "percussion.html"
                  ];

const minScreen = window.matchMedia("(min-width: 1200px)").matches;
const maxScreen = window.matchMedia("(max-width: 2000px)").matches;

if ((minScreen === true) && (maxScreen === true)) {
  contentDrawer.forEach(content => {
    containerDrawer.removeChild(content);
  });

  linkDrawer.forEach(link => {
    let containerLink = document.createElement("a");
    containerLink.href = link; 
    switch (link) {
      case  "strings.html": containerLink.innerText = "Família das Cordas"; break;
      case "woodwinds.html": containerLink.innerText = "Família das Madeiras"; break;
      case "brass.html": containerLink.innerText = "Família dos Metais"; break;
      case  "percussion.html": containerLink.innerText = "Família das Percussões"; break;
    }
    containerLink.className = "drawer-link";
    containerDrawer.appendChild(containerLink);
  })
} 