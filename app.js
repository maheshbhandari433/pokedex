const pokedex = document.getElementById('pokedex');
const buttons = document.getElementById('buttons')

const promises = [];
const getPokemon = () => {
  
  for(let i = 1; i <= 100; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url)
    .then(res => res.json()));
  }
  console.log(promises)
  
  Promise.all(promises).then(result => {
  const pokemon = result.map(data => ({
        id: data.id,
        name: data.name,
        image: data.sprites['front_default'],
      }));
     displayPokemon(pokemon) 
     
 })
};

const displayPokemon = (pokemon) => {
const pokemonString = pokemon.map(singlePokemon => `
    <li>
      <img src="${singlePokemon.image}" />
      <h4>${singlePokemon.id}. ${singlePokemon.name}</h4>
    </li>`
  ).join("");
  
  pokedex.innerHTML = pokemonString;
  
};

getPokemon()

 
const displayButton = () => {
const buttonArr = []

  for (let i=1; i<=8; i++) {
  let singleButton = `<button>Gen ${i}</button>`
  buttonArr.push(singleButton)
  }
   
  buttons.innerHTML = buttonArr.join('')
}

displayButton() 
 

/* const displayPokGen = (singlePokGen) => {
  const pokemonGenString = singlePokGen.map(singlePokemonGen => `
    <li>
      <img src="${singlePokemonGen['gen-i']}" />
    </li>`
  ).join("");
  
  pokedex.innerHTML = pokemonGenString; 
  

} */



const getPokemonGen = (e) => {
Promise.all(promises).then(result => {
const pokemonGen = result.map(data => ({
          id: data.id,
          name: data.name,
          'gen-i' : data.sprites.versions['generation-i'],
          'gen-ii' : data.sprites.versions['generation-ii'],
          'gen-iii' : data.sprites.versions['generation-iii'],
          'gen-iv' : data.sprites.versions['generation-iv'],
          'gen-v' : data.sprites.versions['generation-v'],
          'gen-vi' : data.sprites.versions['generation-vi'],
          'gen-vii' : data.sprites.versions['generation-vii'],
          'gen-viii' : data.sprites.versions['generation-viii']
        }));
      })


  Promise.all(promises).then(result => {
  const singlePokemonGen = result.map(singlePokGen => ({
          id: singlePokGen.id,
          name: singlePokGen.name,
        'gen-i' : singlePokGen.sprites.versions['generation-i']["red-blue"]["front_default"],
        'gen-ii' : singlePokGen.sprites.versions['generation-ii']["crystal"]["back_default"],
        'gen-iii' : singlePokGen.sprites.versions['generation-iii']["emerald"]["front_default"],
        'gen-iv' : singlePokGen.sprites.versions['generation-iv']["diamond-pearl"]["back_default"],
        'gen-v' : singlePokGen.sprites.versions['generation-v']["black-white"]["back_default"],
        'gen-vi' : singlePokGen.sprites.versions['generation-vi']["omegaruby-alphasapphire"]["front_default"],
        'gen-vii' : singlePokGen.sprites.versions['generation-vii']["icons"]["front_default"],
        'gen-viii' : singlePokGen.sprites.versions['generation-viii']["icons"]["front_default"],
        
        }))
       

        
if(e.target.innerHTML === 'Gen 1') {
  const pokemonGenIString = singlePokemonGen.map(singlePokGenGroup => `
  <li>
    <img src="${singlePokGenGroup['gen-i']}" />
    <p>${singlePokGenGroup.name}</p>
  </li>`
).join("");
pokedex.innerHTML = pokemonGenIString; 
}
 
else if(e.target.innerHTML === 'Gen 2') {
  const pokemonGenIIString = singlePokemonGen.map(singlePokGenGroup => `
  <li>
    <img src="${singlePokGenGroup['gen-ii']}" />
    <p>${singlePokGenGroup.name}</p>
  </li>`
).join("");
  
   pokedex.innerHTML = pokemonGenIIString;
}

else if(e.target.innerHTML === 'Gen 3') {
  const pokemonGenIIIString = singlePokemonGen.map(singlePokGenGroup => `
  <li>
    <img src="${singlePokGenGroup['gen-iii']}" />
    <p>${singlePokGenGroup.name}</p>
  </li>`
).join("");
  
   pokedex.innerHTML = pokemonGenIIIString;
}
  
else if(e.target.innerHTML === 'Gen 4') {
  const pokemonGenIVString = singlePokemonGen.map(singlePokGenGroup => `
  <li>
    <img src="${singlePokGenGroup['gen-iv']}" />
    <p>${singlePokGenGroup.name}</p>
  </li>`
).join("");
  
   pokedex.innerHTML = pokemonGenIVString;
}

else if(e.target.innerHTML === 'Gen 5') {
  const pokemonGenVString = singlePokemonGen.map(singlePokGenGroup => `
  <li>
    <img src="${singlePokGenGroup['gen-v']}" />
    <p>${singlePokGenGroup.name}</p>
  </li>`
).join("");
  
   pokedex.innerHTML = pokemonGenVString;
}

else if(e.target.innerHTML === 'Gen 6') {
  const pokemonGenVIString = singlePokemonGen.map(singlePokGenGroup => `
  <li>
    <img src="${singlePokGenGroup['gen-vi']}" />
    <p>${singlePokGenGroup.name}</p>
  </li>`
).join("");
  
   pokedex.innerHTML = pokemonGenVIString;
}

else if(e.target.innerHTML === 'Gen 7') {
  const pokemonGenVIIString = singlePokemonGen.map(singlePokGenGroup => `
  <li>
    <img src="${singlePokGenGroup['gen-vii']}" />
    <p>${singlePokGenGroup.name}</p>
  </li>`
).join("");
  
   pokedex.innerHTML = pokemonGenVIIString;
}

else if(e.target.innerHTML === 'Gen 8') {
  const pokemonGenVIIIString = singlePokemonGen.map(singlePokGenGroup => `
  <li>
    <img src="${singlePokGenGroup['gen-viii']}" />
    <p>${singlePokGenGroup.name}</p>
  </li>`
).join("");
  
   pokedex.innerHTML = pokemonGenVIIIString;
}
  
})

 
}
 

buttons.addEventListener('click', getPokemonGen)






