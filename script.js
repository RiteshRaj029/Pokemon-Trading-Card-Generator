const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

getPokeData = ()=>{
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id ;
     fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {generateCard(data)});
}



const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

  
let generateCard = (data) =>{
    console.log(data)
    const hp = data.stats[0].base_stat;
    const name = data.name[0].toUpperCase() + data.name.slice(1);
    const img = data.sprites.other.dream_world.front_default;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;

    const themeColor = typeColor[data.types[0].type.name];
    console.log(themeColor);

    card.innerHTML = `
    
    <p class="hp">
                <span>HP</span>
                ${hp}
            </p>
            <img src="https://camo.githubusercontent.com/5d1fe59c3f0e4cfb5480bb8d8b1eb3ba58906acef846904fde8afcc5f773adbb/68747470733a2f2f692e696d6775722e636f6d2f583962314b75362e706e67"/>
            <h2 class="poke-name">${name}</h2>
            <div class="types">
                
            </div>
            <div class="stats">
                
                <div>
                    <h3>${attack}</h3>
                    <span>Attack</span>
                </div>
                <div>
                    <h3>${defense}</h3>
                    <span>Defense</span>
                </div>
                <div>
                    <h3>${speed}</h3>
                    <span>Speed</span>
                </div>                                
                
            </div>
    `;
    getTypes(data.types)
    styleCard(themeColor)
}

let getTypes = (types) =>{
    types.forEach((item) => {
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span)
    });
}

let styleCard = (themeColor) =>{
    card.style.background = `radial-gradient(circle at 50% 0%, ${themeColor} 40%, white 36%)`;
}



btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData)
