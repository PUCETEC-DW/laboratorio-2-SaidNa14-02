let contenedor = document.getElementById("contenedor")
fetch("https://restcountries.com/v3.1/all")
.then((response)=>{
    return response.json()
})
.then((respuesta)=>
{
    console.log(respuesta)
})
.then((countries) => {
    countries.results.forEach((country) => {
        const div = document.createElement("div")
        div.classList.add('resultado')
        div.innerHTML = `<strong>${country.name}</strong>`
        contenedor.appendChild(div)
    });
});
