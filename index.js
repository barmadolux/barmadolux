const table = {
    "nom": ["ADJAHO Venance", "19 juillet"],
    "nom": ["Sourou", "25 août"],
    "nom": ["APLOGAN Dorcas", "25 août"],
    "nom": ["Olène", "28 août"],
    "nom": ["MAFLON Barma", "10 juillet"],
    "nom": ["APLOGAN Judith", "13 mai"],
    "nom": ["MAFLON Gisèle", "24 septembre"],
    "nom": ["ADJAHO Habib", "10 main"],
    "nom": ["APLOGAN Léa", "28 juin"],
    "nom": ["AHOUANSE Judicaelle", "19 février"],
    "nom": ["AHOUANSE Judith", "19 février"],
    "nom": ["AHOUANSE Linite", "18 mai"],
    "nom": ["APLOGAN Vicariat", "6 main"],
    "nom": ["AHOUANSE Judicaelle", "25 août"],
    "nom": ["TOHOUN Loick", "7 janvier"],
    "nom": ["TOHOUN Zackiel", "5 juillet"],
};

console.log(table.nom[0] + " " + table.nom[1]);

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


