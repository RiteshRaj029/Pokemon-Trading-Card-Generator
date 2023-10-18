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

let generateCard = (data) =>{
    console.log(data)
    const hp = data.stats[0].base_stat;
    const name = data.name;
    const img = data.sprites.other.dream_world.front_default;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;

    card.innerHTML = `
    
    <p class="hp">
                <span>HP</span>
                ${hp}
            </p>
            <img src="${img}"/>
            <h2 class="poke-name">${name}</h2>
            <div class="types">
                <span>type1</span>
                <span>type2</span>
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
}

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData)
