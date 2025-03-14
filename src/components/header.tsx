"use client";
import { Disc } from "lucide-react";
import ModeToggle from "@/components/toggletheme";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import background from "@/app/background.jpg";
import useToggle from "./toggleCart";
import { Cart } from "@/components/shoppingcart";
import { useCartContext } from "./cartData";
import { useScreenSize } from "./useScreenSize";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

function HeaderComponent() {
  const router = useRouter();
  const { isToggle, setToggleOn, setToggleOff } = useToggle();
  const { itemCart, setItemCart } = useCartContext();
  const screenSize = useScreenSize();

  const itemCartLength = () => {
    if (
      itemCart === null ||
      itemCart === undefined
    ) {
      throw new Error("Cart context is null");
    } else {
      let result: number = 0;
      if (itemCart.length > 0) {
        itemCart.forEach((item) => {
          if (item !== undefined) {
            result += 1;
          }
        });
      }
      return result;
    }
  };

  return (
    <>
      <header className="flex justify-between items-center p-5 pb-3 pt-3 flex-auto gap-5 transition-all w-dvw z-50">
        <Link
          href="/"
          className="flex gap-1 hover:scale-110 transition-all items-center self-start"
        >
          <Disc className="inline-flex"></Disc>
          <h1 className="font-bold text-xl select-none">{"MarsVinyl"}</h1>
        </Link>
        {screenSize === "xs" ? (
          <div className="flex gap-2 item-center">
            <ModeToggle></ModeToggle>
            <div className="h-10">
              <div
                className="flex cursor-default gap-2 select-none rounded-sm text-sm outline-none hover:border-b-2 border-destructive transition-all p-2 "
                onClick={isToggle ? () => setToggleOff() : () => setToggleOn()}
              >
                <ShoppingCart className="h-5"></ShoppingCart>
                <div className="font-bold ">{itemCartLength()}</div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="destructive" size="icon">
                  <Menu></Menu>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    router.push("/collection");
                  }}
                >
                  Collection
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  About
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-destructive"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Login
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center justify-end gap-5 pr-2 w-dvw">
            <div className="flex items-center rounded-sm hover:border-b-2 border-destructive transition-all">
              <Link className="font-semibold text-md p-1" href="/collection">
                Collection
              </Link>
            </div>
            <div className="flex hover:border-b-2 border-destructive rounded-sm justify-center items-center gap-1 transition-all">
              <Link className="font-semibold text-md p-1" href="/about">
                About
              </Link>
            </div>
            <ModeToggle></ModeToggle>
            <div
              className="flex cursor-default gap-2 select-none items-center rounded-sm text-sm outline-none hover:border-b-2 border-destructive transition-all p-2"
              onClick={isToggle ? () => setToggleOff() : () => setToggleOn()}
            >
              <ShoppingCart className="h-5"></ShoppingCart>
              <div className="font-bold ">{itemCartLength()}</div>
            </div>
            <Link href="/login">
              <Button
                variant="destructive"
                className="flex font-semibold shrink-0 hover:border-b-2 border-destructive-foreground transition-all"
              >
                Log in
              </Button>
            </Link>
          </div>
        )}
      </header>
      <Cart
        isToggle={isToggle}
        setToggleOff={setToggleOff}
        itemCart={itemCart}
        setItemInCart={setItemCart}
      ></Cart>
      {screenSize == "xs" ? (
        <div className="-z-10 absolute bg-background">
          <Image
            src={background}
            alt="gut"
            className="fixed opacity-30 scale-200 bg-cover h-fit"
          ></Image>
        </div>
      ) : (
        <div className="-z-10 absolute top-0 left-0 bg-background min-h-fit bg-cover bg-center  ">
          <Image
            src={background}
            alt="gut"
            className="bg-cover bg-center bg-no-repeat min-h-fit min-w-screen fixed opacity-30"
          ></Image>
        </div>
      )}
    </>
  );
}

export default HeaderComponent;
