// Fonction pour effectuer une requête AJAX générique
function effectuerRequeteAJAX(url, method, data) {
    const options = {
        method: method,
        headers: {
        }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête HTTP : ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erreur lors de la requête HTTP :', error);
            throw error;
        });
}

// Fonction pour récupérer les données du capteur via une requête AJAX
function recupererDonneesCapteurAJAX() {
    return effectuerRequeteAJAX('https://hothothot.dog/api/capteurs/exterieur', 'GET')
        .then(data => {
            return data.valeur;
        });
}

// Fonction pour stocker les données du capteur côté serveur via une requête AJAX
function stockerDonneesCoteServeur(valeur) {
    return effectuerRequeteAJAX('https://hothothot.dog/api/capteurs/exterieur', 'POST', { valeur: valeur })
        .then(() => {
            console.log('Données stockées avec succès côté serveur.');
        });
}

// Fonction pour alimenter l'historique avec des données provenant d'un fichier JSON côté serveur
function alimenterHistoriqueAvecJSON() {

    const donneesJSON = [
        { valeur: 25 },
        { valeur: 28 },
        { valeur: 30 },
        { valeur: 32 }
    ];

    const historiqueElement = document.getElementById('historique');
    historiqueElement.innerHTML = ''; // Efface le contenu précédent

    donneesJSON.forEach(donnee => {
        let nouvelleEntree = document.createElement('div');
        nouvelleEntree.textContent = `Nouvelle valeur: ${donnee.valeur} Degrés Celsius`;
        historiqueElement.appendChild(nouvelleEntree);
    });
}

export { recupererDonneesCapteurAJAX, stockerDonneesCoteServeur, alimenterHistoriqueAvecJSON };
