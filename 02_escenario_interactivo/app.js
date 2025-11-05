/* const sool = document.getElementById('sool');
const sool2 = document.getElementById('sool2');
const sool3 = document.getElementById('sool3');
const dama = document.getElementById('dama');
const damo = document.getElementById('damo');
const bola = document.getElementById('bola');
const bola2 = document.getElementById('bola2');
const planta = document.getElementById('planta');
const planta2 = document.getElementById('planta2');
const soles = document.getElementById('soles');

let totalClicks = 0;

function caerSol(sol) {
    let pos = 0;
    const finalY = 400 + Math.random() * 50;
    const intervalo = setInterval(() => {
        pos += 1;
        sol.style.top = pos + "px";
        if (pos >= finalY) clearInterval(intervalo);
    }, 30);
}

caerSol(sool);
caerSol(sool2);
caerSol(sool3);

function sumarSoles(event) {
    const sol = event.target;
    sol.style.transition = "opacity 0.5s";
    sol.style.opacity = 0;
    totalClicks++;
    soles.textContent = totalClicks;

    setTimeout(() => sol.remove(), 500);
}

[sool, sool2, sool3].forEach(sol => sol.addEventListener("click", sumarSoles));

function moverZombie(zombie) {
    let pos = 720;
    const intervalo = setInterval(() => {
        pos -= 1;
        zombie.style.left = pos + "px";
        if (pos < 50) {
            clearInterval(intervalo);
            zombie.style.transition = "opacity 1s";
            zombie.style.opacity = 0;
        }
    }, 30);
}

moverZombie(dama);
moverZombie(damo);

function disparar(planta, bolaImg) {
    let nuevaBola = document.createElement("img");
    nuevaBola.src = bolaImg.src;
    nuevaBola.classList.add("disparo");
    nuevaBola.style.position = "absolute";
    nuevaBola.style.width = "25px";

   
    const plantaLeft = parseInt(window.getComputedStyle(planta).left);
    const plantaBottom = parseInt(window.getComputedStyle(planta).bottom);

    
    nuevaBola.style.left = (plantaLeft + 50) + "px";
    nuevaBola.style.bottom = (plantaBottom + 35) + "px";

    document.getElementById("escenario").appendChild(nuevaBola);

    let pos = plantaLeft + 50;
    const intervalo = setInterval(() => {
        pos += 8;
        nuevaBola.style.left = pos + "px";

       
        [dama, damo].forEach(zombie => {
            const zb = zombie.getBoundingClientRect();
            const bb = nuevaBola.getBoundingClientRect();
            if (bb.right > zb.left && bb.left < zb.right && bb.bottom > zb.top && bb.top < zb.bottom) {
                zombie.style.transition = "opacity 1s";
                zombie.style.opacity = 0;
                setTimeout(() => zombie.remove(), 1000);
                nuevaBola.remove();
                clearInterval(intervalo);
            }
        });

        if (pos > 750) {
            nuevaBola.remove();
            clearInterval(intervalo);
        }
    }, 30);
}

planta.addEventListener("click", () => disparar(planta, bola));
planta2.addEventListener("click", () => disparar(planta2, bola2)); */
