let contenedor = document.getElementById("contenedor");
let searchbar = document.getElementById("search")
let countries = []; 

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        countries = data; 
        mostrarPaises(countries);
    });

function mostrarPaises(lista) {
    contenedor.innerHTML = ""; 
    lista.forEach(country => {
        const div = document.createElement("div");
        div.classList.add('resultado');
        div.innerHTML = `<h1><strong>${country.name.common}</strong></h1>
            <br>
            <h2>Región</h2>
            <p>${country.region}</p>
            <h2>Población</h2>
            <p>${country.population}</p>
            <h2>Bandera</h2>
            <img src='${country.flags.png}' alt='Bandera de ${country.name.common}'>`;
        contenedor.appendChild(div);
    });
}

searchbar.addEventListener("input", e => {
    const searchvalue = e.target.value.toLowerCase(); 
    const filteredCountries = countries.filter(country => 
        country.name.common.toLowerCase().includes(searchvalue));
    mostrarPaises(filteredCountries);
});