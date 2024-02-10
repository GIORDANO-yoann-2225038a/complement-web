// capteur.js

// Fonction pour récupérer les données du capteur via une requête AJAX
function recupererDonneesCapteurAJAX() {
    return fetch('https://hothothot.dog/api/capteurs/exterieur')
        .then(response => response.json())
        .then(data => {
            afficherDonneesCapteur(data.valeur);
            stockerDonneesCoteServeur(data.valeur);
            alimenterHistorique(data.valeur);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données du capteur:', error);
        });
}

// Fonction pour afficher les données du capteur
function afficherDonneesCapteur(valeur) {
    let temperatureElement = creerTemperatureElement(valeur);
    let ongletCapteur = document.getElementById('ongletCapteur');
    ongletCapteur.innerHTML = '';
    ongletCapteur.appendChild(temperatureElement);
    afficherAlerte(valeur);
}

// Fonction pour stocker les données du capteur côté serveur
function stockerDonneesCoteServeur(valeur) {
    // Code pour stocker les données côté serveur
}

// Export de la fonction de récupération des données du capteur
export { recupererDonneesCapteurAJAX };
