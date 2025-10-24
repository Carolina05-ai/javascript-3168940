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

