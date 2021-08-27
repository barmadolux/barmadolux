const color = ["blue", "gray", "green", "rgba(5, 65, 65, 0.907)", "teal"];
const bienvenue = document.querySelector("h1");
const contentH1 = document.querySelector(".container-h1");
const input = document.querySelectorAll("input");
const h1 = document.querySelector("h1");
const info = document.querySelector(".info-head");
const infoMain = document.querySelector(".info-main");
const date = new Date();

const table = [
    { "nom": "ADJAHO Venance", "annif": "19 juillet", "photo": "avenance.png" },
    { "nom": "Sourou", "annif": "25 août", "photo": "sourou.png" },
    { "nom": "APLOGAN Dorcas", "annif": "25 août", "photo": "adorcas.png" },
    { "nom": "TOHOUN Olène", "annif": "28 août", "photo": "tolene.png" },
    { "nom": "MAFLON Barma", "annif": "10 juillet", "photo": "mbarma.png" },
    { "nom": "APLOGAN Judith", "annif": "13 mai", "photo": "null.jpg" },
    { "nom": "MAFLON Gisèle", "annif": "24 septembre", "photo": "mgisele.png" },
    { "nom": "ADJAHO Habib", "annif": "10 mai", "photo": "null.jpg" },
    { "nom": "APLOGAN Léa", "annif": "28 juin", "photo": "null.jpg" },
    { "nom": "AHOUANSE Judicaelle", "annif": "19 février", "photo": "ajudicaelle.png" },
    { "nom": "AHOUANSE Judith", "annif": "19 février", "photo": "ajudi.png" },
    { "nom": "AHOUANSE Linite", "annif": "18 mai", "photo": "alinite.png" },
    { "nom": "APLOGAN Vicariat", "annif": "6 mai", "photo": "avicariat.png" },
    { "nom": "MAFLON Charles", "annif": "25 août", "photo": "mcharles.png" },
    { "nom": "TOHOUN Loic", "annif": "7 janvier", "photo": "tloic.png" },
    { "nom": "TOHOUN Zackiel", "annif": "5 juillet", "photo": "tzackiel.png" },
    { "nom": "AHOUANSE Dossou Gérard", "annif": "4 octobre", "photo": "ado.png" },
    { "nom": "AHOUANSE David", "annif": "23 septembre", "photo": "null.jpg" },
    { "nom": "MAFLON Géoffroy", "annif": "Non définie", "photo": "mgeofroi.png" },
    { "nom": "MAFLON Carine", "annif": "Non définie", "photo": "null.jpg" },
];



const newDate = (dat) => {
    let ndate = new Date(date).toLocaleDateString("FR-fr", {
        month: "long",
        day: "numeric"
    })
    return ndate;
}







input.forEach(i => {
    i.addEventListener("click", (e) => {
        let valeur = e.target.value;

        i.classList.add("colorAdd");
        info.innerHTML = `<span class="info-head" > : ${i.value} </span > `;
        if (valeur === "ANNIVERSAIRES") {
            if (i.type === "click") {
                console.log("bien fait");

            }
            infoMain.innerHTML = table
                .map((user) =>
                    `
                <div class='dispo'>
                    <h5>${user.nom}</h5>
                    <p class="dispoPara">Annif : ${user.annif}</p>
                    <p class="dispoPara second">Dans: ${newDate(date)} jours</p>
                </div>
                 `
                ).join("");
            infoMain.classList.add("addInfoMain");
        }
        else if (valeur === "PARTICIPATION") {

        }
        else if (valeur === "EVENEMENTS") {

        }
        else if (valeur === "LISTE DES MEMBRES") {
            infoMain.classList.add("addInfoMain");
            infoMain.innerHTML = table
                .map((user) =>
                    `
                <div class='dispo'>
                    <h5>${user.nom}</h5> 
                    <div class='ok'><img src="${user.photo}" class='image' "></div>        
                </div>
                 `
                ).join("");

        }

    })

});

(() => {
    let i = -1;
    let temps = setInterval(() => {
        i++;
        bienvenue.style.color = color[i];
        h1.style.boxShadow = `2px 2px 5px white, 2px 2px 5px ${color[i]} `;
        if (i === color.length) {
            i = -1;
        };
    }, 1000)
})();


