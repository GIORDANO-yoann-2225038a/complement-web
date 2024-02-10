// TD2.js

import { recupererDonneesCapteurAJAX } from './capteur.js';

let tableau = [];

// Fonction pour afficher les données périodiquement
function afficherDelai() {
    let index = 0;

    setInterval(afficherProchaineDonnee, 1000);

    function afficherProchaineDonnee() {
        if (index < tableau.length) {
            let valeurCourante = tableau[index];
            let temperatureElement = creerTemperatureElement(valeurCourante);

            let ongletCapteur = document.getElementById('ongletCapteur');
            ongletCapteur.innerHTML = '';
            ongletCapteur.appendChild(temperatureElement);

            alimenterHistorique(valeurCourante);
            afficherAlerte(valeurCourante);
            index++;
        }
    }
}

// Fonction pour créer un élément de température
function creerTemperatureElement(valeur) {
    let temperatureElement = document.createElement('article');
    temperatureElement.textContent = `Température : ${valeur} Degrés Celsius`;
    temperatureElement.classList.add(getBordureClass(valeur));
    return temperatureElement;
}

// Fonction pour changer d'onglet
function changerOnglet(ongletId) {
    document.querySelectorAll('.contenuOnglet').forEach(onglet => onglet.classList.remove('active'));
    document.getElementById(ongletId).classList.add('active');
}

// Fonction pour obtenir la classe de bordure
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

// Fonction pour afficher une alerte en fonction de la valeur
function afficherAlerte(valeur) {
    let alertRegion = document.getElementById('alert-live-region');
    if (valeur < 0 || valeur > 30) {
        alertRegion.textContent = "Alerte ! Température extrême détectée.";
    } else {
        alertRegion.textContent = "";
    }
}

// Fonction pour alimenter l'historique
function alimenterHistorique(valeur) {
    // Code pour alimenter l'historique
}

// Export de la fonction pour afficher les données périodiquement
export { afficherDelai, changerOnglet };
