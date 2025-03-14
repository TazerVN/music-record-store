"use client";
import { StaticImageData } from "next/image";
import { useContext } from "react";
import { CartContext } from "./cartprovider";


interface ShoppingItem {
  name: string;
  amount: number;
  image: string | StaticImageData;
  price: number;
  id?: number;
}

export const useCartContext = () =>{
  const onCartContext = useContext(CartContext)
  if(onCartContext === undefined){
    throw new Error("CartContext is undefined")
  }
  return onCartContext
}


export type {ShoppingItem}