'use client';

import React from "react";
import { SimpleWidget } from "./simpleWidget";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/lib/store";

export const WidgetsGrid = () => {

  const isCart = useAppSelector(state => state.counter.count)

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${isCart}`}
        subTitle="Productos Agregados"
        label="Contador"
        icon={<IoCartOutline size={70} className="text-blue-600"/>}
      ></SimpleWidget>
    </div>
  );
};
