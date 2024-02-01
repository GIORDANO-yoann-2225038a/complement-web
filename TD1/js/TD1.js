// Création d'un tableau avec 20 valeurs aléatoires entre -10 et 40

let tableau = [];

for (let i = 0; i < 20; i++) {
    tableau.push(Math.floor(Math.random() * (40 - (-10) + 1)) + (-10));
}


let valeur = document.getElementById('donnee');

function afficherDelai () {
    let index = 0;

    setInterval(afficherProchaineDonnee, 1000);
    function afficherProchaineDonnee() {
        if (index < tableau.length) {
            let valeurCourante = tableau[index];
            if (valeurCourante >= -10 && valeurCourante < 0) {
                valeur.classList.add('bordureBleue');
            } else if (valeurCourante >= 0 && valeurCourante < 20) {
                valeur.classList.add('bordureVerte');
            } else if (valeurCourante >= 20 && valeurCourante < 30) {
                valeur.classList.add('bordureOrange');
            } else if (valeurCourante >= 30 && valeurCourante <= 40) {
                valeur.classList.add('bordureRouge');
            }

            valeur.textContent = "valeur : " + tableau[index];
            index++;
        }
    }
}




window.onload = afficherDelai;
