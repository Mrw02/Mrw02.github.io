// Custom cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
  }, 80);
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    follower.style.transform = 'translate(-50%, -50%) scale(1.8)';
    follower.style.borderColor = 'rgba(124,106,255,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    follower.style.transform = 'translate(-50%, -50%) scale(1)';
    follower.style.borderColor = 'rgba(124,106,255,0.4)';
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Fade in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-block, .proj-card, .exp-item, .edu-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
