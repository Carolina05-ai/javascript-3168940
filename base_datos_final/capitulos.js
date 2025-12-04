import { comic } from './bd.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const detalleDiv = document.getElementById('detalle-capitulo');
const listaDiv = document.getElementById('lista-capitulos');
const gridDiv = document.getElementById('grid-capitulos');

if (id) {
  // --- MODO DETALLE (ID presente) ---
  if (listaDiv) listaDiv.style.display = 'none'; // Ocultar lista
  
  const c = comic.capitulos.find(item => item.id === id);

  if (c) {
    const player = c.video 
      ? `<iframe width="100%" height="100%" src="${c.video}" frameborder="0" allowfullscreen></iframe>`
      : `<div style="display:flex; align-items:center; justify-content:center; height:100%; color:gray;"><h3>Video no disponible</h3></div>`;

    detalleDiv.innerHTML = `
      <div class="chapter-detail fade-in">
        <div class="video-wrapper">${player}</div>
        
        <h1>${c.nombre}</h1>
        
        <div class="chapter-meta">
          <span>Episodio ${c.id.replace('cap','')}</span>
          <span>${c.years}</span>
          <span>${c.genero}</span>
          <span>Autor: ${c.autores}</span>
        </div>
        
        <p>${c.descripcion}</p>
        
        <!-- Botón vuelve a la LISTA de capítulos (recarga página sin ID) -->
        <a href="capitulos.html" class="btn-back">
           ← Volver a la lista
        </a>
      </div>
    `;
  } else {
    detalleDiv.innerHTML = `
        <div style="text-align:center; padding-top:100px;">
            <h2>Capítulo no encontrado</h2>
            <a href="capitulos.html" class="btn-back">← Volver a la lista</a>
        </div>`;
  }

} else {
  // --- MODO LISTA (Sin ID) ---
  detalleDiv.innerHTML = ''; // Limpiar detalle por si acaso
  
  comic.capitulos.forEach((c, i) => {
    const card = document.createElement("a");
    // Al hacer clic, se recarga la página con el parámetro ?id=...
    card.href = `capitulos.html?id=${c.id}`;
    card.className = "item-card slide-up";
    
    // Stagger animation (retraso en cascada)
    card.style.animationDelay = `${0.1 + i * 0.12}s`;
    
    card.innerHTML = `
      <img src="${c.portada}" alt="${c.nombre}" loading="lazy">
      <div class="item-info">
        <h3>${c.nombre}</h3>
        <p>Ep. ${c.id.replace('cap','')}</p>
      </div>
    `;
    gridDiv.appendChild(card);
  });
}