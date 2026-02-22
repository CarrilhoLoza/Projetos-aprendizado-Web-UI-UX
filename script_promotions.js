let currentIndex = 0;
const cards = document.querySelectorAll('.promotion_card');
const totalCards = cards.length;
const timePerCard = 4000; // 4 segundos por card

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove('active', 'exit');
    if (i === index) {
      card.classList.add('active');
    }
  });
}

function nextCard() {
  currentIndex = (currentIndex + 1) % totalCards;
  
  // Animar o card atual saindo
  cards[currentIndex === 0 ? totalCards - 1 : currentIndex - 1].classList.add('exit');
  
  // Mostrar o próximo card
  showCard(currentIndex);
}

showCard(currentIndex);
setInterval(nextCard, timePerCard);
