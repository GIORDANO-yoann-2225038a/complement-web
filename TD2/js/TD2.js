import { recupererDonneesCapteurAJAX, stockerDonneesCoteServeur, alimenterHistoriqueAvecJSON } from './capteur.js';

let tableau = [];

for (let i = 0; i < 20; i++) {
    tableau.push(Math.floor(Math.random() * (40 - (-10) + 1)) + (-10));
}

let ongletCapteur = document.getElementById('ongletCapteur');
let ongletHistorique = document.getElementById('ongletHistorique');
let alertRegion = document.getElementById('alert-live-region');

function afficherDelai() {
    let index = 0;

    setInterval(afficherProchaineDonnee, 1000);

    function afficherProchaineDonnee() {
        if (index < tableau.length) {
            let valeurCourante = tableau[index];
            let temperatureElement = creerTemperatureElement(valeurCourante);

            ongletCapteur.innerHTML = '';
            ongletCapteur.appendChild(temperatureElement);

            let historiqueElement = creerTemperatureElement(valeurCourante);
            ongletHistorique.appendChild(historiqueElement);

            afficherAlerte(valeurCourante);
            index++;
        }
    }
}

function creerTemperatureElement(valeur) {
    let temperatureElement = document.createElement('article');
    temperatureElement.textContent = `Température : ${valeur} Degrés Celsius`;
    temperatureElement.classList.add(getBordureClass(valeur));
    return temperatureElement;
}

function changerOnglet(ongletId) {
    document.querySelectorAll('.contenuOnglet').forEach(onglet => onglet.classList.remove('active'));
    document.getElementById(ongletId).classList.add('active');
}

function getBordureClass(valeur) {
    if (valeur < 0) {
        return 'bordureBleue';
    } else if (valeur < 20) {
        return 'bordureVerte';
    } else if (valeur < 30) {
        return 'bordureOrange';
    } else {
        return 'bordureRouge';
    }
}

function afficherAlerte(valeur) {
    if (valeur < 0 || valeur > 30) {
        alertRegion.textContent = "Alerte ! Température extrême détectée.";
    } else {
        alertRegion.textContent = "";
    }
}

recupererDonneesCapteurAJAX().then(valeur => {
    afficherDonneesCapteur(valeur);
    changerOnglet('ongletCapteur');
});


function afficherDonneesCapteur(valeur) {
    let temperatureElement = creerTemperatureElement(valeur);
    let ongletCapteur = document.getElementById('ongletCapteur');
    ongletCapteur.innerHTML = '';
    ongletCapteur.appendChild(temperatureElement);
    afficherAlerte(valeur);
}

afficherDelai();

