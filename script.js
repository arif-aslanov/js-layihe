const cards = document.querySelectorAll('.testimonial-card');

function revealCards() {
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 120}ms`;
    card.classList.add('reveal');
  });
}

window.addEventListener('DOMContentLoaded', revealCards);
