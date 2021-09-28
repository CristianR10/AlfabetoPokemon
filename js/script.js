let urlPokemon = "https://pokeapi.co/api/v2/pokemon";

document.querySelectorAll("ul li").forEach(function (item) {
  item.addEventListener("click", function () {
    let dataPokemon = item.getAttribute("data-pokemon");

    fetch(`https://pokeapi.co/api/v2/pokemon/${dataPokemon}`)
      .then(function (result) {
        return result.json();
      })
      .then(function (json) {
        // Seleciono a tag IMG
        let imgPokemon = document.querySelector("section img");
        imgPokemon.style.display = "block";
        // Altero o atributo src e coloco a imagem e o nome da Api pokemon
        imgPokemon.setAttribute(
          "src",
          json.sprites.other.dream_world.front_default
        );
        document.querySelector("section h2").innerHTML = json.name;
        document.querySelector("section h2").classList.add("active");
        document.querySelector("body").style.backgroundColor = "FF0000";
      })
      .catch(function (error) {
        alert("Algo deu errado");
      });
  });
});
