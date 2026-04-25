// ===========================
// LANGUAGE TOGGLE FR / EN
// ===========================
let currentLang = 'fr';

const langToggle = document.getElementById('langToggle');
const langFlag   = langToggle.querySelector('.lang-flag');
const langLabel  = langToggle.querySelector('.lang-label');

function switchLanguage() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  const isEN = currentLang === 'en';

  // Update button
  langFlag.textContent  = isEN ? '🇬🇧' : '🇫🇷';
  langLabel.textContent = isEN ? 'EN' : 'FR';

  // Update html lang attribute
  document.documentElement.lang = currentLang;

  // Update all elements that have data-fr / data-en
  document.querySelectorAll('[data-fr][data-en]').forEach(el => {
    const text = isEN ? el.dataset.en : el.dataset.fr;
    // Use innerHTML to support <strong>, <br> etc.
    el.innerHTML = text;
  });
}

langToggle.addEventListener('click', switchLanguage);

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===========================
// MOBILE BURGER MENU
// ===========================
const burger   = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===========================
// FADE-IN ON SCROLL
// ===========================
const fadeEls = document.querySelectorAll(
  '.about-card, .research-card, .exp-card, .skills-block, .contact-card, .timeline-item'
);

fadeEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 70);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => io.observe(el));

// ===========================
// ACTIVE NAV LINK HIGHLIGHT
// ===========================
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color      = '';
    a.style.fontWeight = '400';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color      = '#2c6fad';
      a.style.fontWeight = '500';
    }
  });
});
