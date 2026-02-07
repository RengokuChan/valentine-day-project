const btnOui = document.getElementById('btn-oui');
const btnNon = document.getElementById('btn-non');
const questionText = document.getElementById('question-text');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

let size = 1; // Taille initiale du bouton Oui
const messages = [
    "Non",
    "Tu es sûr ?",
    "Vraiment sûr ?",
    "Pense encore une fois !",
    "Sois pas méchant...",
    "Je vais pleurer...",
    "Tu me brises le coeur :("
];

let messageIndex = 0;

btnNon.addEventListener('click', () => {
    // 1. Changer le texte du bouton Non
    messageIndex = (messageIndex + 1) % messages.length;
    btnNon.innerText = messages[messageIndex];

    // 2. Faire grossir le bouton Oui
    size += 0.5;
    btnOui.style.transform = `scale(${size})`;

    // 3. Pousser le texte un peu plus haut si besoin
    btnOui.style.fontSize = `${1 * size}rem`;
});

btnOui.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});
