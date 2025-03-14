"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { ShoppingItem } from "./cartData";
import { useScreenSize } from "./useScreenSize";

export default function Modal({ ...props }) {
  const [amount, setAmount] = useState(1);
  const screenSize = useScreenSize()

  return (
    <Dialog open={props.open} onClose={props.setOpen} className="fixed z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen bg-transmission backdrop-blur-[3px] transition-all">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg text-left border-4 border-destructive transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95 justify-center items-center"
            autoFocus
          >
            <div className="flex bg-background backdrop-blur-md px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className={"flex items-center justify-center " + (screenSize === "xs" ? "flex-col" : "")}>
                <div className="flex size-40 shrink-0 items-center justify-center sm:mx-0 relative ">
                  <Image
                    className=""
                    src={props.img}
                    alt={"thumbnail of" + props.name}
                    fill
                  ></Image>
                </div>
                <div className="flex flex-col mt-3 text-center items-center sm:mt-0 sm:ml-4 sm:text-left bg-accent rounded-2xl p-5">
                  <DialogTitle
                    as="h1"
                    className={"text-lg font-bold text-foreground " + (screenSize === "xs" ? " self-center" : " self-start") }
                  >
                    {props.name}
                  </DialogTitle>
                  <div className={"flex flex-col mt-2 gap-2 w-50 " + (screenSize === "xs" ? " items-center justify-center" : " ")}>
                    <p className="text-sm text-foreground">${props.price}</p>
                    <h2 className="text-md text-foreground">Quantity:</h2>
                    <Input
                      className="w-20 bg-accent-foreground text-accent"
                      min={1}
                      type="number"
                      defaultValue={amount}
                      onChange={(e) => {
                        const value: number = e.target.valueAsNumber;
                        setAmount(value);
                      }}
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-background sm:flex sm:flex-row-reverse sm:px-6">
              <Button
                variant="ghost"
                onClick={() => {
                  if (props.itemCart[props.id] !== undefined) {
                    const dummyArray: ShoppingItem[] = [...props.itemCart];
                    const dummyItem : ShoppingItem = dummyArray.splice(props.id, 1)[0];
                    console.log(dummyItem);
                    dummyItem.amount += amount;
                    dummyArray[props.id] = dummyItem;

                    props.setItemCart(dummyArray);
                    props.setOpen(false);
                  } else {
                    const dummyArray = [...props.itemCart];
                    const item: ShoppingItem = {
                      name: props.name,
                      amount: amount,
                      image: props.img,
                      price: props.price,
                      id: props.id,
                    };
                    dummyArray[props.id] = item;
                    props.setItemCart(dummyArray);
                    props.setOpen(false);
                  }
                  console.log(props.itemCart);
                }}
                className="inline-flex w-full justify-center rounded-md bg-destructive px-3 py-2 text-sm font-semibold text-white shadow-xs hover:border-b-2 border-destructive-foreground sm:ml-3 sm:w-auto"
              >
                Add to Cart
              </Button>
              <Button
                variant="ghost"
                type="button"
                onClick={() => props.setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
