// Animation d'apparition des sections
const sections = document.querySelectorAll(".section, .hero-content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Message de bienvenue dans la console
console.log("Bienvenue sur le portefolio de Fadel Coulibaly !");