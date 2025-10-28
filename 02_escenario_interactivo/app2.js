const solesElement = document.getElementById('soles');
const sool = document.getElementById('sool');
const sool2 = document.getElementById('sool2');
const sool3 = document.getElementById('sool3');
let soles = 0;

function saltar(sol) {
  sol.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  sol.style.transform = 'translateY(-40px) scale(1.2)';
  sol.style.opacity = '0';
  setTimeout(() => {
    sol.remove();
  }, 300);
}

function recolectar(sol) {
  saltar(sol);
  soles++;
  solesElement.textContent = soles;
}

[sool, sool2, sool3].forEach(sol => {
  sol.addEventListener('click', () => {
    recolectar(sol);
  });
});

//juego 2
const fantasmas = [
  document.querySelector('.fantasma1'),
  document.querySelector('.fantasma2'),
  document.querySelector('.fantasma3')
];
const puntosPirata = document.getElementById('puntos-pirata');
const cofre = document.getElementById('cofre');
const escenario2 = document.getElementById('escenario2');
let puntos = 0;

const mensajeGanaste = document.createElement('div');
mensajeGanaste.id = 'mensaje-ganaste';
mensajeGanaste.textContent = '¡GANASTE!';
escenario2.appendChild(mensajeGanaste);
mensajeGanaste.style.display = 'none';

const escenarioAncho = 750;
const escenarioAlto = 500;
const anchoFantasma = 90;
const altoFantasma = 90;

function posicionAleatoria(fantasma) {
  const maxX = escenarioAncho - anchoFantasma;
  const maxY = escenarioAlto - altoFantasma - 50;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  fantasma.style.left = `${x}px`;
  fantasma.style.top = `${y}px`;
}

function clicFantasma(fantasma) {

  puntos++;
  puntosPirata.textContent = puntos;


  fantasma.style.opacity = '0';
  fantasma.style.pointerEvents = 'none';


  setTimeout(() => {
    posicionAleatoria(fantasma);
    fantasma.style.opacity = '1';
    fantasma.style.pointerEvents = 'auto';
    fantasma.style.animation = 'aparecerFantasma 0.5s ease';
  }, 2000);

  if (puntos >= 15) {
    cofre.classList.add('visible');
  }


  if (puntos >= 15) {
    mensajeGanaste.style.display = 'block';
    cofre.classList.add('brillante');
  }
}


fantasmas.forEach(fantasma => {
  posicionAleatoria(fantasma);
  fantasma.addEventListener('click', () => clicFantasma(fantasma));
});


setInterval(() => {
  const rayo = document.getElementById('rayo');
  rayo.style.animation = 'relampago 0.4s ease';
  setTimeout(() => (rayo.style.animation = 'none'), 400);
}, 4000);
