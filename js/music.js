const backgroundMusic = document.getElementById('backgroundMusic');

document.addEventListener('DOMContentLoaded', function() {
    backgroundMusic.currentTime = 0; // Reiniciar a música desde o início
    backgroundMusic.addEventListener('canplaythrough', function() {
        console.log('Música carregada e pronta para tocar.');
    }, false);
    backgroundMusic.addEventListener('error', function() {
        console.error('Erro ao carregar a música.');
    }, false);
});

document.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            console.error('Erro ao tentar reproduzir a música:', error);
        });
    }
});
