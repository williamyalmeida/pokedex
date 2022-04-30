let cartaoPokemon = document.querySelectorAll(".cartao-pokemon")
let listaDaSelecaoDosPokemon = document.querySelectorAll('.pokemon')


listaDaSelecaoDosPokemon.forEach(pokemon=>{
    
    pokemon.addEventListener('click',()=>{
        let cartaoPokemonsAberto = document.querySelector(".aberto")
        cartaoPokemonsAberto.classList.remove("aberto")

        let pegarIdDosPokemonsSelecionado = pokemon.attributes.id.value

        let idCartaoPokemonAbrir = `cartao-${pegarIdDosPokemonsSelecionado}`
        
        let cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir)
        cartaoPokemonAbrir.classList.add("aberto")

        let pokemonDaListaSelecionado = document.querySelector(".ativo")
        pokemonDaListaSelecionado.classList.remove("ativo")
        

        let pokemonDaListaSelecionar = document.getElementById(pegarIdDosPokemonsSelecionado)
        pokemonDaListaSelecionar.classList.add("ativo")

        
        

        
        

    })

    

    
})