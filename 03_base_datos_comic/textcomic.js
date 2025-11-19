const infoComic = document.querySelector(".info-comic");
const cardPersonajes = document.querySelector(".card-personajes");
console.log(comic.personajes);
console.log(infoComic);

infoComic.innerHTML = 
`
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>${comic.genero}</p>
`
comic.personajes.forEach(char => {
  const div = document.createElement("div");
  div.classList.add("personajes");
  div.innerHTML = 
`
  <img src="${char.imagen}" alt="">
    <p>${char.nombre}</p>
    <p>${char.descripcion}</p>
`

cardPersonajes.appendChild(div)
});
