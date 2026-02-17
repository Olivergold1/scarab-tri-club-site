// Mobile nav toggle
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (ham) {
  ham.addEventListener('click', () => {
    const showing = nav.style.display === 'flex';
    nav.style.display = showing ? 'none' : 'flex';
  });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 980) {
      nav.style.display = 'none';
    }
  });
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const a = q.nextElementSibling;
    const open = a.style.display === 'block';
    document.querySelectorAll('.faq-a').forEach(x => x.style.display = 'none');
    if (!open) a.style.display = 'block';
  });
});

// In-view animations
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));