function createFallingGif(src) {
    const gif = document.createElement('img');
    gif.src = src;
    gif.className = 'falling-gif';
    gif.onload = function() {
        console.log('GIF carregado com sucesso:', src);
    };
    gif.onerror = function() {
        console.error('Erro ao carregar o GIF:', src);
    };
    document.body.appendChild(gif);

    gif.style.left = Math.random() * window.innerWidth + 'px';
    gif.style.animationDuration = Math.random() * 3 + 2 + 's';

    gif.addEventListener('animationend', () => {
        gif.remove();
    });
}

function startGifAnimation() {
    setInterval(() => {
        createFallingGif('assets/images/celebration.gif');
    }, 500);
}

document.addEventListener('click', startGifAnimation);
