const buttons = document.querySelectorAll('.card-btn');

buttons.forEach(btn => {
    const textoOriginal = btn.textContent.trim() || 'Adicionar';

    btn.addEventListener('click', () => {
        const isAdded = btn.classList.toggle('added');
        btn.textContent = isAdded ? 'Adicionado' : textoOriginal;
    });
});

