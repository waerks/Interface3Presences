const nom = document.querySelectorAll('.nom');
const prenom = document.querySelectorAll('.prenom')
const vrai = document.querySelectorAll('.vrai');
const faux = document.querySelectorAll('.faux');
const statut = document.querySelectorAll('.statut');
const CASE = document.querySelectorAll('table tbody tr')

for (let i = 0; i < CASE.length; i++) {
    if (statut[i].textContent === '') {
        statut[i].style.color = '#0000004d'
        statut[i].textContent = 'N/A'
    }

    vrai[i].addEventListener('click', function() {
        statut[i].textContent = 'Présente';
        statut[i].style.color = 'black'

        nom[i].style.color = "green"
        prenom[i].style.color = "green"
    
        vrai[i].style.visibility = "hidden";
        faux[i].style.visibility = "visible";
    });
    
    faux[i].addEventListener('click', function() {
        statut[i].textContent = 'Absente';
        statut[i].style.color = 'black'

        nom[i].style.color = "red"
        prenom[i].style.color = "red"
    
        faux[i].style.visibility = "hidden";
        vrai[i].style.visibility = "visible";
    });
}