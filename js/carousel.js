function startCarousel() {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('slide-out');
        images[nextIndex].classList.add('slide-in');
        images[nextIndex].classList.remove('hidden');

        setTimeout(() => {
            images[currentIndex].classList.remove('slide-out');
            images[currentIndex].classList.add('hidden');
            images[nextIndex].classList.remove('slide-in');
            currentIndex = nextIndex;
        }, 1000); // Duração da animação
    }, 3000); // Trocar imagem a cada 3 segundos
}
