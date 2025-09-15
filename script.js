// Sidebar toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('active');
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.remove('active');
});

// Smooth scroll
document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('lottie-animation');
  container.innerHTML = "";
  lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    autoplay: true,
    loop: false,
    path: 'assets/animation.json'
  });

  // Intersection Observer animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    },
    { threshold: 0 }
  );

  const featuresImage = document.querySelector('.features-image');
  if (featuresImage) observer.observe(featuresImage);

  const featuresText = document.querySelector('.features-text');
  if (featuresText) observer.observe(featuresText);

  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) observer.observe(aboutContent);

  const heroContent = document.querySelector('.hero-content');
  if (heroContent) heroContent.classList.add('animate-visible');
});
