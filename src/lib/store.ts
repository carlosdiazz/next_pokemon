import { configureStore, Middleware } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import counterReducer from "./counter/counterSlice";
import pokemonsReducer from "./pokemon/pokemons";
import { localStorageMiddleware } from "./middlewares/localstorage-middlewares";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      pokemons: pokemonsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
