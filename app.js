function getPokemon() {
  const inputValue = document.getElementById('input').value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}/`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.name);

      function displayInfo(pokemon) {
        const pokemonName = document.getElementById('name');
        pokemonName.textContent = data.name;
      }
      displayInfo();
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}

const btn = document.getElementById('btn');

btn.addEventListener('click', getPokemon);
