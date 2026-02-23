// Seleciona todos os botões que possuem a classe "card-btn"
const buttons = document.querySelectorAll('.card-btn');

// Percorre cada botão encontrado (como um For)
buttons.forEach(btn => {
    
    // Guarda o texto original do botão (ex: "Adicionar")
    // trim() remove espaços extras

    const textoOriginal = btn.textContent.trim() || 'Adicionar';

// Adiciona um evento de clique ao botão
    btn.addEventListener('click', () => {

        // Alterna a classe CSS "added"
        // Se a classe for adicionada, retorna true
        // Se for removida, retorna false

        const isAdded = btn.classList.toggle('added');

        // Se estiver marcado como adicionado, muda o texto
        // Caso contrário, volta para o texto original
        
        btn.textContent = isAdded ? 'Adicionado' : textoOriginal;
    });
});

