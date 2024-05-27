'use client'
import { useState } from "react";

interface Props {
  value?:number
}

export const CartCounter = ({value=20}:Props) => {
  // Declarar el estado del contador con un valor inicial de 0
  const [contador, setContador] = useState(value);

  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Función para decrementar el contador
  const decrementar = () => {
    if (contador === 0) return;
    setContador(contador - 1);
  };

  return (
    <>
      <span className="text-9xl">{contador}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={incrementar}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={decrementar}
        >
          -1
        </button>
      </div>
    </>
  );
};
