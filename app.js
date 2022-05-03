function getPokemon() {
  const inputValue = document.getElementById('input').value.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}/`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.name);

      function displayInfo() {
        const pokemonName = document.getElementById('name');
        const pokemonImg = document.getElementById('pokemon-img');
        pokemonName.textContent = data.name;
        pokemonImg.src = data.sprites.front_default;
        console.log(data.sprites.front_default);
        console.log(pokemonImg);
      }

      displayInfo();
    })

    .catch((err) => {
      console.log(`error ${err}`);
      alert('Enter a vaild pokemon name CHECK YOUR SPELLING');
    });
}

const btn = document.getElementById('btn');

btn.addEventListener('click', getPokemon);
