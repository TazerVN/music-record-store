"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useScreenSize } from "./useScreenSize";
import { ShoppingItem } from "./cartData";

export function Cart({
  isToggle,
  setToggleOff,
  itemCart,
  setItemInCart,
}: {
  isToggle: boolean;
  setToggleOff: CallableFunction;
  itemCart: ShoppingItem[];
  setItemInCart: Dispatch<SetStateAction<ShoppingItem[]>> | null;
}) {
  const [transition, setTransition] = useState("right-[-1000px]");
  const screenSize = useScreenSize();

  useEffect(() => {
    const doTransitionOpen = () => {
      const createTransition = () => {
        setTransition("right-0");
      };
      setTimeout(createTransition, 50);
    };
    if (isToggle) {
      doTransitionOpen();
    } else {
      setTransition("right-[-1000px]");
    }
  }, [isToggle]);

  const total = () => {
    let result: number = 0;
    if (itemCart.length > 0) {
      itemCart.forEach((item) => {
        if (item !== undefined) {
          result += item.price * item.amount;
        }
      });
    }
    return result;
  };

  const itemCartLength = () => {
    let result: number = 0;
    if (itemCart.length > 0) {
      itemCart.forEach((item) => {
        if (item !== undefined) {
          result += 1;
        }
      });
    }
    return result;
  };

  return (
    <div
      className={
        transition +
        " fixed items-center z-50 top-0 transition-all overflow-hidden flex duration-200 p-1"
      }
    >
      {isToggle ? (
        <div className="relative  w-dvw z-50 flex justify-end">
          <div
            className={
              "flex flex-col justify-between bg-background transition-all rounded-xl shadow-[0px_2px_4px] shadow-black " +
              (screenSize === "xs" ? "p-2 h-lvh" : "p-5 h-lvh w-100 ")
            }
            autoFocus
          >
            <div className="flex justify-between items-center pl-5">
              <div className="flex items-center gap-2">
                <ShoppingCart></ShoppingCart>
                <h1>{itemCartLength()}</h1>
              </div>
              <Button
                variant="ghost"
                className="p-1.5 w-10"
                onClick={() => {
                  const turnOff = () => {
                    setToggleOff();
                  };
                  setTransition("right-[-1000px]");
                  setTimeout(turnOff, 200);
                }}
              >
                X
              </Button>
            </div>
            <div
              className={
                "p-5 flex overflow-scroll " +
                (screenSize === "xs" ? "h-100" : "h-dvh")
              }
            >
              <ul className="flex flex-col gap-2 self-start md:w-80 lg:w-xl items-start justify-self-start">
                {itemCart?.map((item, index) =>
                  item ? (
                    <li
                      key={item.id}
                      className="flex p-5 gap-3 rounded-2xl w-full shadow-md shadow-accent justify-between"
                    >
                      <div className="sticky h-25 w-25 rounded-2xl border-3 flex">
                        <Image
                          src={item.image}
                          alt="placeholder"
                          className="rounded-lg z-0"
                          fill
                        ></Image>
                      </div>
                      <div className="flex flex-col justify-between flex-1/3">
                        <div className="flex flex-col">
                          <h1 className="font-extrabold text-lg">
                            {item.name}
                          </h1>
                          <p className="font-light text-sm">
                            {item.price + "$"}
                          </p>
                        </div>
                        <p className="font-light text-sm">
                          {"Amount: " + item.amount}
                        </p>
                      </div>
                      <div className="flex">
                        <Trash2
                          className="hover:border-b-2 border-destructive transition-all h-10"
                          onClick={() => {
                            if (setItemInCart !== null) {
                              const newCart = [...itemCart].toSpliced(index, 1);
                              setItemInCart(newCart);
                            }
                          }}
                        ></Trash2>
                      </div>
                    </li>
                  ) : (
                    <></>
                  )
                )}
              </ul>
            </div>
            <div className="flex flex-col p-1.5">
              <div className="flex justify-between h-15 p-5">
                <h1 className="text-2xl">Total:</h1>
                <h1 className="text-2xl">{"$" + total()}</h1>
              </div>
              <Button
                size="lg"
                variant="ghost"
                className={
                  "bg-destructive hover:border-b-2 border-destructive-foreground text-lg h-15 self-center " +
                  (screenSize === "xs" ? "w-50" : "w-70")
                }
                onClick={() => {
                  setToggleOff();
                }}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
