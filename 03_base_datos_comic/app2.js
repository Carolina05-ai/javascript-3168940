const cont = document.querySelector('.lista-personajes');

comic.personajes.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
        <img src="${p.imagen}">
        <h3>${p.nombre}</h3>
        <p><strong>Edad:</strong> ${p.edad}</p>
        <p>${p.descripcion}</p>
    `;

    cont.appendChild(div);
});
