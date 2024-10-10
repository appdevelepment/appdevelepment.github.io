// Scroll animations
window.addEventListener('scroll', () => {
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (cardPosition < screenPosition) {
      card.classList.add('active');
    }
  });
});
