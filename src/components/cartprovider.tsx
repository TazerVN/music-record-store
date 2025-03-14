"use client";
import { createContext, useState } from "react";
import { ShoppingItem } from "./cartData";
import { Dispatch, SetStateAction } from "react";
import { ReactNode } from "react";

interface ItemCartContextValue {
  itemCart: ShoppingItem[];
  setItemCart?: Dispatch<SetStateAction<ShoppingItem[]>>;
}

export const CartContext = createContext<ItemCartContextValue>({itemCart: []});

export const CartProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [itemCart, setItemCart] = useState<ShoppingItem[]>([]);

  return (
    <CartContext.Provider value={{ itemCart, setItemCart }}>
      {children}
    </CartContext.Provider>
  );
};
