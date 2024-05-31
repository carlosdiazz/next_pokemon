'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { setFavoritePokemons } from '@/lib/pokemon/pokemons'

export const  StoreProvider=({
  children,
}: {
  children: React.ReactNode
})=> {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    //const favo = JSON.parse(localStorage?.getItem("favorite-pokemons") ?? "{}");

    //storeRef.current.dispatch(setFavoritePokemons(favo))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}