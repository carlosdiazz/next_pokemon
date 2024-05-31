
import React from 'react'
import { PokemonCard } from './pokemonCard';
import { SimplePokemon } from '../interfaces/simple-pokemon';

interface Props{
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemons.map(pokemon => (<PokemonCard key={pokemon.id} pokemon={pokemon}/>
            //<Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width={100} height={100} alt="Nombre" key={pokemon.id}/>
          ))
        }

    </div>
  )
}
