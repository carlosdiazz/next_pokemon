import { PokemonGridFavorites } from '@/components'

export const metadata = {
 title: 'Favoritos',
 description: 'Pokemones Favoritos',
};

export default async function PokemonsPageFavorite() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemon Favoritos</span>
      <PokemonGridFavorites />
    </div>
  );
}