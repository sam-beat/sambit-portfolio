// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Intersection Observer for fade-in animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

  const carousel = document.getElementById("carousel-inner");
  const slides = carousel.children;
  const totalSlides = slides.length;
  let index = 1; // start at first real slide

  // Set initial position
  carousel.style.transform = `translateX(-${index * 100}%)`;

  function moveSlide(step) {
    index += step;
    carousel.style.transition = "transform 0.7s ease-in-out";
    carousel.style.transform = `translateX(-${index * 100}%)`;

    carousel.addEventListener("transitionend", () => {
      if (index === totalSlides - 1) {
        // Jump to first real slide
        carousel.style.transition = "none";
        index = 1;
        carousel.style.transform = `translateX(-${index * 100}%)`;
      } else if (index === 0) {
        // Jump to last real slide
        carousel.style.transition = "none";
        index = totalSlides - 2;
        carousel.style.transform = `translateX(-${index * 100}%)`;
      }
    }, { once: true });
  }

  document.getElementById("prevBtn").addEventListener("click", () => moveSlide(-1));
  document.getElementById("nextBtn").addEventListener("click", () => moveSlide(1));
