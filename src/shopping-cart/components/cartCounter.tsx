"use client";
import { addOne, initCounterState, substractOne } from "@/lib/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { useEffect, useRef } from "react";
//import { useState } from "react";

interface Props {
  value?: number;
}

export interface CounterResponse {
  count: number;
}

const getApiCounter = async ():Promise<CounterResponse> => {
  const data: CounterResponse = await fetch('/api/counter').then(res => res.json());
  console.log({data});
  return data
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  //useEffect(() => {
  //  getApiCounter().then(({count}) => dispatch(initCounterState(count)));
  //}, [dispatch])


  const initialized = useRef(false)
  if (!initialized.current) {
    getApiCounter().then(({count}) => dispatch(initCounterState(count)));
    //dispatch(initCounterState(value))
    initialized.current = true
  }

  // Declarar el estado del contador con un valor inicial de 0
  //const [contador, setContador] = useState(value);

  // Función para incrementar el contador
  //const incrementar = () => {
  //  dispatch(addOne())
  //  //setContador(contador + 1);
  //};

  // Función para decrementar el contador
  //const decrementar = () => {
  //  dispatch(substractOne())
  //  //setContador(contador - 1);
  //};

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
