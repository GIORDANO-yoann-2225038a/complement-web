let tableau = [];

for (let i = 0; i < 20; i++) {
    tableau.push(Math.floor(Math.random() * (40 - (-10) + 1)) + (-10));
}

let ongletCapteur = document.getElementById('ongletCapteur');
let ongletHistorique = document.getElementById('ongletHistorique');

function afficherDelai() {
    let index = 0;

    setInterval(afficherProchaineDonnee, 1000);

    function afficherProchaineDonnee() {
        if (index < tableau.length) {
            let valeurCourante = tableau[index];
            let temperatureElement = creerTemperatureElement(valeurCourante);

            ongletCapteur.innerHTML = ''; // Efface le contenu précédent
            ongletCapteur.appendChild(temperatureElement);

            // Ajoute l'historique dans le deuxième onglet
            let historiqueElement = creerTemperatureElement(valeurCourante);
            ongletHistorique.appendChild(historiqueElement);

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
    // Désactive tous les onglets et cache leur contenu
    document.querySelectorAll('.contenuOnglet').forEach(onglet => onglet.classList.remove('active'));

    // Active l'onglet sélectionné et affiche son contenu
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

afficherDelai();
