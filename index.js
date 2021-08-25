const table = [
    { "nom": "ADJAHO Venance", "annif": "19 juillet" },
    { "nom": "Sourou", "annif": "25 août" },
    { "nom": "APLOGAN Dorcas", "annif": "25 août" },
    { "nom": "Olène", "annif": "28 août" },
    { "nom": "MAFLON Barma", "annif": "10 juillet" },
    { "nom": "APLOGAN Judith", "annif": "13 mai" },
    { "nom": "MAFLON Gisèle", "annif": "24 septembre" },
    { "nom": "ADJAHO Habib", "annif": "10 main" },
    { "nom": "APLOGAN Léa", "annif": "28 juin" },
    { "nom": "AHOUANSE Judicaelle", "annif": "19 février" },
    { "nom": "AHOUANSE Judith", "annif": "19 février" },
    { "nom": "AHOUANSE Linite", "annif": "18 mai" },
    { "nom": "APLOGAN Vicariat", "annif": "6 main" },
    { "nom": "MAFLON Charles", "annif": "25 août" },
    { "nom": "TOHOUN Loick", "annif": "7 janvier" },
    { "nom": "TOHOUN Zackiel", "annif": "5 juillet" },
];

table.forEach(element => {
    console.log(element.nom, element.annif);

})

const color = ["blue", "gray", "green", "rgba(5, 65, 65, 0.907)", "teal"];
const bienvenue = document.querySelector("h1");
const contentH1 = document.querySelector(".container-h1");
const input = document.querySelectorAll("input");
const h1 = document.querySelector("h1");
const info = document.querySelector(".info-head");
const infoMain = document.querySelector(".info-main");


input.forEach(i => {
    i.addEventListener("click", (e) => {
        let valeur = e.target.value;
        i.classList.toggle("colorAdd");
        info.innerHTML = `<span class="info-head"> : ${i.value} </span>`;

        if (valeur === "ANNIVERSAIRES") {

        }
        else if (valeur === "PARTICIPATION") {

        }
        else if (valeur === "EVENEMENTS") {

        }
        else if (valeur === "LISTE DES MEMBRES") {

        }


    })

});

(() => {
    let i = -1;
    let temps = setInterval(() => {
        i++;
        bienvenue.style.color = color[i];
        h1.style.boxShadow = `2px 2px 5px white, 2px 2px 5px ${color[i]}`;
        if (i === color.length) {
            i = -1;
        };
    }, 1000)
})();


