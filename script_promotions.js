let currentIndex = 0;                                             // Índice do card atualmente visível
const cards = document.querySelectorAll('.promotion_card');       // Seleciona todos os cards de promoção
const totalCards = cards.length;                                  // Total de cards existentes
const timePerCard = 4000; // 4 segundos por card                  // Tempo que cada card fica visível (em milissegundos)

function showCard(index) {                      // Função que exibe apenas um card específico
  cards.forEach((card, i) => {                  // Percorre todos os cards (Como um for)
    card.classList.remove('active', 'exit');    // Remove estados anteriores
    
    if (i === index) {                          // Se for o card atual, ativa ele
      card.classList.add('active');
    }
  });
}

function nextCard() {                                 // Função que avança para o próximo card
  currentIndex = (currentIndex + 1) % totalCards;     // Calcula o próximo índice (loop infinito)
  
  // Animar o card atual saindo
  cards[currentIndex === 0 ? totalCards - 1 : currentIndex - 1].classList.add('exit');  // Pega o card anterior e adiciona classe de saída
  
  // Mostrar o próximo card
  showCard(currentIndex);
}

showCard(currentIndex);                 // Mostra o primeiro card ao carregar a página
setInterval(nextCard, timePerCard);     // Troca automaticamente a cada X segundos
