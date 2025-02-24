document.addEventListener('click', function() {
    const initialText = document.getElementById('initialText');
    if (initialText) {
        initialText.style.display = 'none';
    }
    revealNextPhrase();
});

let currentPhraseIndex = 0;
const phrases = document.querySelectorAll('.phrase');

function revealNextPhrase() {
    if (currentPhraseIndex < phrases.length) {
        phrases[currentPhraseIndex].classList.remove('hidden');
        currentPhraseIndex++;
    } else if (currentPhraseIndex === phrases.length) {
        const carousel = document.getElementById('carousel');
        carousel.classList.remove('hidden');
        carousel.style.animationDelay = '0s'; // Remover o atraso da animação
        startCarousel();
        currentPhraseIndex++;
    }
}

document.getElementById('message').addEventListener('click', revealNextPhrase);
