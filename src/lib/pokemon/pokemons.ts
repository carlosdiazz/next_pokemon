import { SimplePokemon } from "@/components";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
  {
    favorites: {
      "1" : { id : 1, name : "Prueba 1" },
      "2" : { id : 2, name : "Prueba 2" },
      "3" : { id : 3, name : "Prueba 3" }
    }
  }
*/

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

//const getInitialState = (): PokemonsState => {
//  //if (typeof localStorage === "undefined") return {};
//  const favorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");
//  return favorites;
//};

const initialState: PokemonsState = {
  favorites: {},
  //...getInitialState(),
  //"1": { id: "1", name: "Prueba" },
  //"2": { id: "2", name: "Prueba" },
  //"3": { id: "3", name: "Prueba" },
  //"4": { id: "4", name: "Prueba" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        //return;
      } else {
        state.favorites[id] = pokemon;
      }

      //TODO NO se debe de hacer
      //localStorage.setItem("favorite-pokemons", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
