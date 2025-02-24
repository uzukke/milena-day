document.addEventListener("DOMContentLoaded", function() {
    const lockScreen = document.getElementById('lockScreen');
    const lockMessage = document.getElementById('lockMessage');
    const currentTimeElement = document.getElementById('currentTime');

    function preventDefault(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    // Bloquear interações imediatamente ao carregar a página
    document.body.style.pointerEvents = 'none';
    document.body.style.userSelect = 'none';
    document.body.addEventListener('click', preventDefault, true);

    const currentTime = new Date();
    console.log(`Hora atual: ${currentTime.toLocaleTimeString('pt-BR')}`); // Exibir a hora no console

    // Define o horário de desbloqueio para 01 de março de 2025 às 00:00
    const unlockTime = new Date('2025-03-01T00:00:00');

    // Exibir a hora atual
    if (currentTimeElement) {
        currentTimeElement.textContent = ``;
    }

    function updateLockMessage() {
        const now = new Date();
        const remainingTime = unlockTime - now;
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        lockMessage.textContent = `O site estará disponível em ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
    }

    function checkTime() {
        const now = new Date();
        if (now >= unlockTime) {
            lockScreen.style.display = 'none';
            document.body.style.pointerEvents = 'auto'; // Permitir interações
            document.body.style.userSelect = 'auto'; // Permitir seleção de texto
            document.body.removeEventListener('click', preventDefault, true); // Remover o bloqueio de cliques
        } else {
            lockScreen.style.display = 'flex';
            document.body.style.pointerEvents = 'none'; // Impedir interações
            document.body.style.userSelect = 'none'; // Impedir seleção de texto
            document.body.addEventListener('click', preventDefault, true); // Bloquear cliques
            updateLockMessage();
        }
    }

    // Verifica a hora a cada segundo
    setInterval(checkTime, 1000);
    checkTime();
});
