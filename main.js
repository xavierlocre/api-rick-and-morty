function openNav() { //cuando se llama a esta función, el menú móvil se muestra en toda la pantalla
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() { //cuando se llama a esta función, el menu movil se oculta y su ancho se establece en cero, lo que hace que no sea visible 
    document.getElementById("mobile-menu").style.width = "0%";
}

//esta funcion hace una solicitud a la API para obtener datos de los personajes de Rick and Morty, una vez obtenida la respuesta se convierte
//en json y se pasa como argumento a la funcion (done),la funcion done es un parametro cuando se llama a getcharacters
function getCharacters(done) { 
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

//aqui se llama a la función getcharacter pasa una funcion como argumento, dentro de esta funcion se itera sobre los resultados obtenidos
//de la api y se crea una etiqueta article para cada personaje, luego se establece cada propiedad del articulo utilidando los datos del 
//personaje y se agrega al "de  la pagina"
getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createElement("article");
        article.innerHTML = `
            <div class="image-container">
                <img src="${personaje.image}" alt="personaje">
            </div>
            <h2>${personaje.name}</h2>
            <h2>${personaje.status}<h2>
            <button id="boton">${personaje.species}</button>

        `;

        const main = document.querySelector("main");
        main.appendChild(article);
    });
    console.log(data);
});



const boton = document.getElementById('boton')
boton.addEventListener('click', fetchSpecies);

function fetchSpecies(){
    fetch ("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
        const species = data.results.map(character => character.species);
})
}