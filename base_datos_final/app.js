import { comic } from './bd.js';

function cargarHero() {
  document.getElementById("hero-title").textContent = comic.nombreComic;
  document.getElementById("hero-description").textContent = comic.sinopsis;
}

function crearCarruselHero() {
  const carousel = document.getElementById('hero-carousel');
  const dotsContainer = document.getElementById('hero-dots');

  comic.heroSlides.forEach((slide, i) => {
    const div = document.createElement('div');
    div.className = 'hero-slide' + (i === 0 ? ' active' : '');
    div.innerHTML = `<img src="${slide.imagen}" alt="${slide.titulo}" loading="lazy">`;
    carousel.appendChild(div);

    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => irASlide(i);
    dotsContainer.appendChild(dot);
  });

  let actual = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  window.irASlide = (n) => {
    slides[actual].classList.remove('active');
    dots[actual].classList.remove('active');
    actual = (n + slides.length) % slides.length;
    slides[actual].classList.add('active');
    dots[actual].classList.add('active');
  };

  document.querySelector('.carousel-next').onclick = () => irASlide(actual + 1);
  document.querySelector('.carousel-prev').onclick = () => irASlide(actual - 1);
  setInterval(() => irASlide(actual + 1), 7000);
}

function cargarListas() {
  const contPersonajes = document.getElementById("characters-container");
  const contCapitulos = document.getElementById("chapters-container");

  comic.personajes.forEach((p, i) => {
    const card = document.createElement("a");
    card.href = `personajes.html?id=${p.id}`;
    card.className = "item-card slide-up"; // Animación Entrada
    card.style.animationDelay = `${0.1 + i * 0.15}s`;
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />
      <div class="item-info">
        <h3>${p.nombre}</h3>
        <p>${p.edad}</p>
      </div>
    `;
    contPersonajes.appendChild(card);
  });

  comic.capitulos.forEach((c, i) => {
    const card = document.createElement("a");
    card.href = `capitulos.html?id=${c.id}`;
    card.className = "item-card slide-up"; // Animación Entrada
    card.style.animationDelay = `${0.2 + i * 0.15}s`;
    card.innerHTML = `
      <img src="${c.portada}" alt="${c.nombre}" loading="lazy" />
      <div class="item-info">
        <h3>${c.nombre}</h3>
        <p>Ep. ${c.id.replace('cap','')}</p>
      </div>
    `;
    contCapitulos.appendChild(card);
  });
}

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  const current = window.pageYOffset;
  if (current > lastScroll && current > 80) header.classList.add('hidden');
  else header.classList.remove('hidden');
  lastScroll = current;
});

document.addEventListener("DOMContentLoaded", () => {
  cargarHero();
  crearCarruselHero();
  cargarListas();
});