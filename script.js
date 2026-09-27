const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
  }
);

revealElements.forEach((el) => observer.observe(el));