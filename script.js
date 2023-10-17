const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

getPokeData = ()=>{
    let id = Math.floor(Math.random() * 1000) + 1;
    let finalUrl = url + id ;
    console.log(id);
    console.log(finalUrl);
}

btn.addEventListener("click", getPokeData)

