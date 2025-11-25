const galeria = document.querySelector('.lista-personajes');

comic.personajes.forEach(char => {

  const div = document.createElement('div');
  div.classList.add('card');
  div.style.cursor = "pointer";

  div.onclick = () => {
      window.location.href = "index-personajes.html";
  };

  div.innerHTML = `
      <img src="${char.imagen}" alt="${char.nombre}">
      <h3>${char.nombre}</h3>
      <p><strong>Edad:</strong> ${char.edad}</p>
      <p>${char.descripcion}</p>
  `;

  galeria.appendChild(div);
});


const listaCaps = document.querySelector('.lista-caps');

comic.capitulos.forEach(cap => {

    const div = document.createElement('div');
    div.classList.add('cap-card');
    div.style.cursor = "pointer";

    div.onclick = () => {
        window.location.href = "index-capitulos.html";
    };

    const imgSrc = cap.imagen ? cap.imagen : "ejemplo.jpg";

    div.innerHTML = `
        <img src="${imgSrc}" alt="${cap.nombre}">
        <h3>${cap.nombre}</h3>
        <p><strong>Personaje:</strong> ${cap.personaje}</p>
        <p>${cap.descripcion}</p>
    `;

    listaCaps.appendChild(div);
});


 