const galeria = document.querySelector('.personajes');

console.log(galeria);

galeria.innerHTML = '';

comic.personajes.forEach(char => {

  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  
  <img src="${char.imagen}" alt="${char.nombre}">
  <h3>${char.nombre}</h3>
  <p>${char.edad}</p>
  <p>${char.descripcion}</p>

  `;

  galeria.appendChild(div);

})

 