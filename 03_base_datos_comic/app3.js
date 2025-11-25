const cont = document.querySelector('.lista-caps');

comic.capitulos.forEach(cap => {
    const div = document.createElement('div');
    div.className = 'card';

    const img = cap.imagen ? cap.imagen : "ejemplo.jpg";

    div.innerHTML = `
        <img src="${img}">
        <h3>${cap.nombre}</h3>
        <p><strong>Personaje:</strong> ${cap.personaje}</p>
        <p>${cap.descripcion.join("<br>")}</p>
    `;

    cont.appendChild(div);
});
