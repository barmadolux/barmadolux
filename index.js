const color = ["blue", "gray", "green", "rgba(5, 65, 65, 0.907)", "teal"];
const bienvenue = document.querySelector("h1");
const contentH1 = document.querySelector(".container-h1");
const input = document.querySelectorAll("input");
const h1 = document.querySelector("h1");
const info = document.querySelector(".info-head");
const infoMain = document.querySelector(".info-main");
const inputContainer = document.querySelector(".item-container");
const para = document.querySelector(".dispoPara.second");

const date = new Date();

const table = [
    { "nom": "ADJAHO Venance", "annif": "07/19", "photo": "./image/avenance.png" },
    { "nom": "LINHOUME Sourou", "annif": "08/25", "photo": "./image/sourou.png" },
    { "nom": "AHOUANSE Linite", "annif": "05/18", "photo": "./image/alinite.png" },
    { "nom": "MAFLON Charles", "annif": "08/25", "photo": "./image/mcharles.png" },
    { "nom": "TOHOUN Olène", "annif": "08/28", "photo": "./image/tolene.png" },
    { "nom": "MAFLON Barma", "annif": "07/10", "photo": "./image/mbarma.png" },
    { "nom": "MAFLON Gisèle", "annif": "09/24", "photo": "./image/mgisele.png" },
    { "nom": "AHOUANSE Judicaelle", "annif": "02/19", "photo": "./image/ajudicaelle.png" },
    { "nom": "AHOUANSE Judith", "annif": "02/19", "photo": "./image/ajudi.png" },
    { "nom": "APLOGAN Vicariat", "annif": "05/6", "photo": "./image/avicariat.png" },
    { "nom": "TOHOUN Loic", "annif": "01/7", "photo": "./image/tloic.png" },
    { "nom": "APLOGAN Dorcas", "annif": "08/25", "photo": "./image/adorcas.png" },
    { "nom": "TOHOUN Zackiel", "annif": "07/5", "photo": "./image/tzackiel.png" },
    { "nom": "AHOUANSE Dossou Gérard", "annif": "10/4", "photo": "./image/ado.png" },
    { "nom": "MAFLON Géoffroy", "annif": "01/01", "photo": "./image/mgeofroi.png" },
    { "nom": "AGBON Furginette", "annif": "01/01", "photo": "./image/afurginette.png" },
    { "nom": "AHOUANSE David", "annif": "09/23", "photo": "./image/adavid.png" },
    { "nom": "APLOGAN Judith", "annif": "05/13", "photo": "./image/ajudithi.png" },
    { "nom": "MAFLON Carine", "annif": "01/01", "photo": "./image/mcarine.png" },
    { "nom": "APLOGAN Léa", "annif": "06/28", "photo": "./image/alea.png" },
    { "nom": "MEHOU Cédric", "annif": "1/1", "photo": "./image/null.jpg" },
    { "nom": "ADJAHO Habib", "annif": "05/10", "photo": "./image/null.jpg" },
];


const functionAnnif = (jourString) => {
    let getJour = new Date(jourString).toLocaleDateString("FR-fr", {
        month: "long",
        day: "numeric"
    })
    return getJour;
};

const afficherEvenement = (info) => {
    let evenementMal = { premier: "Déces de Yvette MAFLON le 10/08/2021" }
    let evenementHeur = { deuc: "Déces de Yvette MAFLON le 10/08/2021" }

    let heurEvent = () => {
        let vivi = document.getElementById("heureux");
        console.log(vivi);

    }

    let malEvent = () => {

    }
    info.innerHTML =
        `
        <div class="event">
            <ul class="tabs">
                <li class="active"><a href="#heureux" >Heureux</a></li>
                <li><a href="#malheureux">Malheureux</a></li>            
            </ul>
            <div class="tabs-content">
                <div class="tab-content active" id="heureux">${heurEvent()}</div>
                <div class="tab-content" id="malheureux">${malEvent()}</div>
            </div>
        </div>
    `
    let li = document.querySelectorAll(".event .tabs a");
    li.forEach(element => {
        element.addEventListener("click", () => {
            let div = element.parentNode.parentNode.parentNode
            if (element.parentNode.classList.contains("active")) {
                return false
            }
            div.querySelector(".tabs .active").classList.remove("active")
            element.parentNode.classList.add("active")

            let liena = div.querySelector(element.getAttribute("href"))
            div.querySelector(".tab-content.active").classList.remove("active")
            liena.classList.add("active");


        })
    });

}

input.forEach(i => {
    i.addEventListener("click", (e) => {
        infoMain.classList.add("addInfoMain");
        let valeur = e.target.value;
        let fre = i.parentNode.parentNode;
        let gour = fre.querySelector(".item-input.scaleAdd");

        if (!gour) {
            i.classList.add("scaleAdd");
        }
        else {
            gour.classList.remove('scaleAdd');
            i.classList.add("scaleAdd");
        }
        info.innerHTML = `<span class="info-head" > : ${i.value} </span > `;

        if (valeur === "ANNIVERSAIRES") {
            infoMain.innerHTML = table
                .map((user) =>
                    `  
                <div class='dispo'>
                    <h5>${user.nom}</h5>
                    <p class="dispoPara">Annif : ${functionAnnif(user.annif)}</p>
                    <p class="dispoPara second">${functionDate(user.annif)}</p>
                </div>
                 `
                ).join("");
        }
        else if (valeur === "PARTICIPATION") {

        }
        else if (valeur === "EVENEMENTS") {
            afficherEvenement(infoMain);
        }
        else if (valeur === "LISTE DES MEMBRES") {
            infoMain.innerHTML = table
                .map((user) =>
                    `
                <div class='dispo'>
                    <h5>${user.nom}</h5> 
                    <div class='ok'><img src="${user.photo}" ></div>        
                </div>
                 `
                ).join("");
        }
    })
});

const functionDate = (dateString) => {
    let msg = null;
    dateString = `${dateString + '/' + date.getFullYear()}`;
    let nombreJour = (Math.ceil((Date.parse(dateString) - Date.parse(date)) / (1000 * 3600 * 24)));
    if (nombreJour <= 0) {
        if (nombreJour === 0) {
            msg = "Joyeux Anniversaire";
        } else if (Math.abs(nombreJour) === 1) {
            msg = "Passé hier";
        }
        else if (Math.abs(nombreJour) < 30) {
            msg = `Passé il y a ${Math.abs(nombreJour)} jours`;
        } else {
            let jo1 = Math.ceil(Math.floor(Math.abs(nombreJour / 30)));
            if (jo1 === 0) {
                jo1 = "";
            } else {
                jo1 = `${jo1} mois`;
            }
            let jo2 = Math.ceil(Math.floor(Math.abs(nombreJour % 30)));
            if (jo2 === 0) {
                jo2 = "";
            } else if (jo2 === 1) {
                jo2 = `${jo2} jour`;

            }
            else {
                jo2 = `${jo2} jours`;
            }
            msg = `Passé il y a ${jo1}  ${jo2}`;
        }
    } else {
        if (nombreJour < 30) {
            if (nombreJour === 1) {
                msg = `Dans quelques heures`;
            } else {
                msg = `Dans ${nombreJour} jours`;
            }
        } else {
            let hoy = document.querySelectorAll('.dispo .dispoPara.second');
            console.log(hoy);

            let do1 = Math.ceil(Math.floor(Math.abs(nombreJour / 30)));
            if (do1 === 0) {
                do1 = "";
            } else {
                do1 = `${do1} mois`;
            }
            let do2 = Math.ceil(Math.floor(Math.abs(nombreJour % 30)));
            if (do2 === 0) {
                do2 = "";
            } else if (do2 === 1) {
                do2 = 1;
                `${do2} jour`
            }
            else {
                do2 = `${do2} jours`;
            }
            msg = `Dans ${do1}  ${do2}`;

        }
    }

    return msg;
};

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

