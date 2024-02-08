function recupererDonneesCapteur() {
    return fetch('https://hothothot.dog/api/capteurs/exterieur')
        .then(response => response.json())
        .then(data => data.valeur)
        .catch(error => {
            console.error('Erreur lors de la récupération des données du capteur:', error);
            return null;
        });
}

function alimenterHistorique(valeur) {
    let historiqueElement = creerTemperatureElement(valeur);
    let ongletHistorique = document.getElementById('ongletHistorique');
    ongletHistorique.appendChild(historiqueElement);
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

function afficherAlerte(valeur) {
    let alertRegion = document.getElementById('alert-live-region');
    if (valeur < 0 || valeur > 30) {
        alertRegion.textContent = "Alerte ! Température extrême détectée.";
    } else {
        alertRegion.textContent = "";
    }
}

function afficherDelai() {
    setInterval(() => {
        recupererDonneesCapteur()
            .then(valeur => {
                if (valeur !== null) {
                    let temperatureElement = creerTemperatureElement(valeur);
                    let ongletCapteur = document.getElementById('ongletCapteur');
                    ongletCapteur.innerHTML = '';
                    ongletCapteur.appendChild(temperatureElement);
                    afficherAlerte(valeur);
                    alimenterHistorique(valeur);
                }
            });
    }, 1000);
}

afficherDelai();
