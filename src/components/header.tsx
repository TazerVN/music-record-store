import { Disc } from "lucide-react";
import ModeToggle from "@/components/toggletheme";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import background from "@/app/background.jpg";

function HeaderComponent() {
  return (
    <header className="flex justify-between items-center p-5 pb-3 pt-3 flex-auto gap-5 transition-all">
      <Link
        href="/"
        className="flex gap-1 hover:scale-110 transition-all items-center"
      >
        <Disc className="inline-flex"></Disc>
        <h1 className="font-bold text-xl select-none">{"MarsVinyl"}</h1>
      </Link>
      <div className="flex items-center justify-end gap-5 pr-2 w-dvw">
        <div className="flex items-center rounded-sm hover:border-b-4 transition-all">
          <Link className="font-semibold text-md p-1" href="/collection">
            Collection
          </Link>
        </div>
        <div className="flex hover:border-b-4 rounded-sm justify-center items-center gap-1 transition-all">
          <a className="font-semibold text-md p-1" href="/about">
            About
          </a>
        </div>
        <ModeToggle></ModeToggle>
        <div className="flex cursor-default gap-2 select-none items-center rounded-sm text-sm outline-none hover:border-b-4 transition-all p-2">
          <ShoppingCart className="h-5"></ShoppingCart>
          <div className="font-bold ">0</div>
        </div>
        <Button
          variant="destructive"
          className="flex font-semibold shrink-0 hover:border-b-4 transition-all"
        >
          Log in
        </Button>
      </div>
      <div className="-z-10 absolute top-0 left-0 bg-background">
        <Image
          src={background}
          alt="gut"
          className="bg-cover bg-center bg-no-repeat min-h-fit min-w-screen fixed opacity-30"
        ></Image>
      </div>
    </header>
  );
}

export default HeaderComponent;
