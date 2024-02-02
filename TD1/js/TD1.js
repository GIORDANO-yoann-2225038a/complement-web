let tableau = [];

// Création d'un tableau avec 20 valeurs aléatoires entre -10 et 40
for (let i = 0; i < 20; i++) {
    tableau.push(Math.floor(Math.random() * (40 - (-10) + 1)) + (-10));
}

let historique = document.getElementById('historique');

function afficherDelai() {
    let index = 0;

    setInterval(afficherProchaineDonnee, 1000);

    function afficherProchaineDonnee() {
        if (index < tableau.length) {
            let valeurCourante = tableau[index];
            let temperatureElement = creerTemperatureElement(valeurCourante);
            historique.appendChild(temperatureElement);
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
