const choix = document.querySelector(".choix");
const span = document.querySelectorAll(".span-1");
const choixBouton = document.getElementById("boutonChoix");
let tableau = [];
const spanVide = document.querySelector(".vide");
const msgFin = document.querySelector("h3");
const date = document.querySelector(".date");

let tableCode = [
  "A40S19",
  "E7JFU3",
  "MCC1L9",
  "SX11RL",
  "5LAS45",
  "W745F2",
  "GJL323",
  "C321ED",
  "IU8A74",
  "Z7XBV9",
];

//

boutonChoix.addEventListener("click", () => {
  choix.classList.add("addColorChoix");
  boutonChoix.classList.add("addClassButton");
  choixBouton.setAttribute("disabled", "off");
  autoPlay();
  numberChoice();
  audio("clic.mp3");
});

/*-------------------------------------------------*/
const autoPlay = () => {
  setTimeout(() => {
    boutonChoix.classList.toggle("addClassButton");
    choixBouton.removeAttribute("disabled");
  }, 200);
};

const audio = (lien) => {
  let lecteur = new Audio();
  lecteur.src = `./${lien}`;
  lecteur.play();
};

const numberChoice = () => {
  let cul = Math.floor(Math.random() * 10) + 1;
  if (tableau.length === 10) {
    msgFin.textContent = "Tous les numéros sont pris !";
    msgFin.style.color = "orange";
    setTimeout(() => {
      choix.textContent = "Merci !";
      choix.style.color = "orange";
    }, 100);
    return;
  } else {
    span.forEach((element) => {
      if (cul === parseInt(element.id)) {
        element.classList.add("addClassSpan");
        element.textContent = "ok";
        if (tableau.includes(cul)) {
          numberChoice();
        } else {
          choix.textContent = cul;
          tableau[tableau.length] = cul;
        }
      }
    });
  }
};

const functionDate = (chaine) => {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
};

let jour = new Date();
let heureActu = functionDate(jour);

date.innerHTML = `
  ${heureActu}
`;
