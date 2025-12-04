import { comic } from './bd.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const detalleDiv = document.getElementById('detalle-container');
const listaDiv = document.getElementById('lista-container');
const gridDiv = document.getElementById('grid-personajes');

if (id) {
  // --- MODO DETALLE ---
  if (listaDiv) listaDiv.style.display = 'none'; // Ocultar grilla
  
  const p = comic.personajes.find(item => item.id === id);

  if (p) {
    detalleDiv.innerHTML = `
      <div class="detail-view fade-in">
        <img loading="lazy" src="${p.imagen}" class="detail-img" alt="${p.nombre}">
        
        <div class="detail-info">
          <h2>${p.nombre}</h2>
          <p style="color:var(--main-color); font-weight:bold; font-size:1.1rem; margin-bottom:20px;">
            Edad: ${p.edad}
          </p>
          <p style="line-height:1.6; margin-bottom:30px; color:#ddd;">${p.descripcion}</p>
          
          <!-- Botón vuelve a la LISTA de personajes -->
          <a href="personajes.html" class="btn-back">
            ← Volver a la lista
          </a>
        </div>
      </div>
    `;
  } else {
    detalleDiv.innerHTML = `
        <div style="text-align:center; padding-top:100px;">
            <h2>Personaje no encontrado</h2>
            <a href="personajes.html" class="btn-back">← Volver a la lista</a>
        </div>`;
  }

} else {
  // --- MODO LISTA ---
  detalleDiv.innerHTML = '';
  
  comic.personajes.forEach((p, i) => {
    const card = document.createElement("a");
    card.href = `personajes.html?id=${p.id}`;
    card.className = "item-card slide-up";
    card.style.animationDelay = `${0.1 + i * 0.15}s`;
    
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
      <div class="item-info">
        <h3>${p.nombre}</h3>
        <p>${p.edad}</p>
      </div>
    `;
    gridDiv.appendChild(card);
  });
}