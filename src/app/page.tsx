import ModeToggle from "@/components/toggletheme";
import { Disc } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import background from "./background.jpg";
import RenderVinylList from "@/components/vinyldetail";

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
      <header className="flex justify-between items-center p-5 pb-3 pt-3 flex-auto gap-5 sticky">
        <div className="flex gap-1 hover:scale-110 transition-all items-center">
          <Disc className="inline-flex"></Disc>
          <h1 className="font-bold text-xl select-none">MarsVinyl</h1>
        </div>
        <div className="flex items-center justify-end gap-5 pr-2 w-dvw">
          <div className="flex items-center rounded-sm hover:border-b-2 transition-all">
            <a className="font-semibold text-md p-1 " href="">
              Collection
            </a>
          </div>
          <div className="flex hover:border-b-2 rounded-sm justify-center items-center gap-1 transition-all">
            <a className="font-semibold text-md p-1" href="">
              About
            </a>
          </div>
          <ModeToggle></ModeToggle>
          <div className="flex cursor-default gap-2 select-none items-center rounded-sm text-sm outline-none hover:border-b-2 transition-all p-2">
            <ShoppingCart className="h-5"></ShoppingCart>
            <div className="font-bold ">0</div>
          </div>
          <Button
            variant="destructive"
            className="flex font-semibold shrink-0 hover:border-b-4 hover:border-r-4 transition-all"
          >
            Log in
          </Button>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center h-lvh w-lvw">
          <div className="-z-10 absolute top-0 left-0">
            <Image
              src={background}
              alt="gut"
              className="bg-cover bg-center bg-no-repeat h-dvh min-w-fit fixed opacity-30"
            ></Image>
          </div>
          <div className="flex flex-col w-dvw bg-(--color-transmission) p-4 pl-10 items-center ">
            <div className="font-bold">
              <h1 className="text-4xl text-foreground">{"the world's"}</h1>{" "}
              <span className="text-destructive text-4xl underline">
                smallest
              </span>{" "}
              <h1 className="text-4xl text-foreground">record store!</h1>
            </div>
            <Button
              variant="destructive"
              className="mt-5 hover:border-b-4 transition-all"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit "></div>
        <div className="flex flex-col items-center bg-card h-vh w-dvw p-10">
          <h1 className="text-6xl mb-10">New Arrival</h1>
          <div className="">
            {RenderVinylList(8)}
          </div>
        </div>
        <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit"></div>
      </main>
      <footer className="p-5 flex justify-center">tazervn@github</footer>
    </div>
  );
}
