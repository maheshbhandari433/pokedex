const pokedex = document.getElementById('pokedex');
const genButtons = document.getElementById('gen-buttons')  
const typeButtons = document.getElementById('type-buttons')

const promises = [];

const getPokemon = () => {
  
  for(let i = 1; i <= 1000; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url)
    .then(res => res.json()));
  }
  /*  console.log(promises) */ 
  
  /*  Resolving and mapping promises to extract data */
  Promise.all(promises).then(result => {
  const pokemon = result.map(data => ({
        id: data.id,
        name: data.name,
        image: data.sprites['front_default'],
        types: data.types.map(type => type.type.name)
      }));
     displayPokemon(pokemon)

     /* creating non-repeatable type value from all pokemon */
     const uniqueTypes = new Set();
     pokemon.forEach(poke => {
       poke.types.forEach(type => uniqueTypes.add(type));
     });
    
     /* creating buttons with type name */
      uniqueTypes.forEach(type => {
      const button = document.createElement('button');
      button.textContent = type;
      button.addEventListener('click', () => {
        const filteredPokemon = pokemon.filter(p => p.types.includes(type));
        displayPokemon(filteredPokemon);
      })
      typeButtons.appendChild(button);
    })
 })
}; 


/* function displays pokemon. Takes pokemon array an an argument */
const displayPokemon = (pokemon) => {
const pokemonString = pokemon.map(singlePokemon => `
    <li>
      <img src="${singlePokemon.image}" />
      <h4>${singlePokemon.id}. ${singlePokemon.name}</h4>
      <p>Type: ${singlePokemon.types}</p>
    </li>`
  ).join("");
  
  pokedex.innerHTML = pokemonString;
  
};
getPokemon()

 
/* creates buttons for all the generation */
const displayGenButton = () => {
const genButtonArr = []

  for (let i=1; i<=10; i++) {
  let singleButton = `<button data-gen="${i}">Gen ${i}</button>`
  genButtonArr.push(singleButton)
  } 
  genButtons.innerHTML = genButtonArr.join('')
}
displayGenButton() 


/* displays pokemon of specific generation */
const getPokemonGen = (e) => {
  
    const genNum = e.target.getAttribute('data-gen');
    const start = (genNum - 1) * 100;
    const end = genNum * 100;
    
    Promise.all(promises.slice(start, end)).then(result => {
      const pokemon = result.map(data => ({
        id: data.id,
        name: data.name,
        image: data.sprites['front_default'],
        types: data.types.map(type => type.type.name)
      }));
      displayPokemon(pokemon);
    });
};

genButtons.addEventListener('click', getPokemonGen);
 






