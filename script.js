// Theme Toggle (Night / Light Mode)
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const htmlElement = document.documentElement;

// Load saved preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeUI(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const current = htmlElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeUI(next);
});

function updateThemeUI(theme) {
  if (theme === 'light') {
    themeIcon.className = 'fa-solid fa-sun';
    themeText.textContent = 'Light';
  } else {
    themeIcon.className = 'fa-solid fa-moon';
    themeText.textContent = 'Night';
  }
}

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Smooth reveal for sections (subtle)
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .cta-section').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
