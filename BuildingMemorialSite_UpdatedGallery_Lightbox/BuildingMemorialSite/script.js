// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Lightbox for gallery
(function initLightbox(){
  const galleryLinks = Array.from(document.querySelectorAll('.gallery-item'));
  if (!galleryLinks.length) return;

  const lightbox = document.querySelector('.lightbox');
  const imgEl = document.querySelector('.lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  const btnClose = document.querySelector('.lightbox-close');
  const btnPrev = document.querySelector('.lightbox-prev');
  const btnNext = document.querySelector('.lightbox-next');

  let index = 0;

  function open(i){
    index = i;
    const link = galleryLinks[index];
    const img = link.querySelector('img');
    imgEl.src = link.getAttribute('href');
    imgEl.alt = img.alt || '';
    captionEl.textContent = img.nextElementSibling ? img.nextElementSibling.textContent : img.alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    imgEl.src = '';
    document.body.style.overflow = '';
  }
  function prev(){
    open((index - 1 + galleryLinks.length) % galleryLinks.length);
  }
  function next(){
    open((index + 1) % galleryLinks.length);
  }

  galleryLinks.forEach((link, i) => {
    link.addEventListener('click', (e) => {
      // Only intercept if JS is enabled
      e.preventDefault();
      open(i);
    });
  });

  btnClose?.addEventListener('click', close);
  btnPrev?.addEventListener('click', prev);
  btnNext?.addEventListener('click', next);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
