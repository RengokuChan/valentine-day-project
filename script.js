const btnOui = document.getElementById('btn-oui');
const btnNon = document.getElementById('btn-non');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

let clickCount = 0;
const messages = [
    "Tu es sûr(e) ?",
    "Vraiment ?",
    "Allez, réfléchis bien...",
    "S'il te plaît...",
    "Je vais pleurer...",
    "Tu me brises le cœur :(",
    "Dernière chance ",
    "Alleeeeeez, dis oui !",
    "Je t'aime tellement !",
    "Je ne peux pas vivre sans toi !",
    ":(",
];

btnNon.addEventListener('click', () => {
    clickCount++;
    
    // Changer le texte du bouton Non
    if (clickCount < messages.length) {
        btnNon.innerText = messages[clickCount];
    } else {
        btnNon.innerText = "Dernière chance !";
    }

    // Faire grossir le bouton Oui
    const currentSize = parseFloat(window.getComputedStyle(btnOui).fontSize);
    btnOui.style.fontSize = `${currentSize * 1.5}px`;
    btnOui.style.padding = `${currentSize * 0.8}px ${currentSize * 1.5}px`;
});

btnOui.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});