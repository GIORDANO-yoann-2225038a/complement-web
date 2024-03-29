let tableau = [];

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

            // Ajout des messages en fonction de la valeur
            if (valeurCourante < 0) {
                afficherMessage(temperatureElement, "Brrrrrrr, un peu froid ce matin, mets ta cagoule !");
            } else if (valeurCourante > 30) {
                afficherMessage(temperatureElement, "Caliente ! Vamos a la playa, ho hoho hoho !!");
            }

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

function afficherMessage(parentElement, message) {
    let messageElement = document.createElement('p');
    messageElement.textContent = message;
    parentElement.appendChild(messageElement);
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
