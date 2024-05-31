"use client"
import React, { useState } from "react";
import { useAppSelector } from "@/lib/store";
import { PokemonGrid } from "./pokemonGrid";
import { IoHeartOutline } from "react-icons/io5";


export const PokemonGridFavorites = () => {

  const favorites = useAppSelector(state => Object.values(state.pokemons.favorites))
  const [pokemons, setpokemons] = useState(favorites)

  return pokemons.length? (<PokemonGrid pokemons={ pokemons} />) : (<NoFavorites />)

  //return (
  //  <PokemonGrid pokemons={ pokemons} />
  //);
};



export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span>No hay Favoritos</span>
    </div>
  )
}