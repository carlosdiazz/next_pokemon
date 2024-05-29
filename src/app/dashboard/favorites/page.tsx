import {PokemonsResponse,SimplePokemon, PokemonGrid} from '@/pokemons'

export const metadata = {
 title: 'Favoritos',
 description: 'Pokemones Favoritos',
};

export default async function PokemonsPageFavorite() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemon Favoritos</span>
        <PokemonGrid pokemons={[]}/>
    </div>
  );
}