"use client";

import { Button } from "@/components/ui/button";
import RenderVinylList from "@/components/vinyldetail";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/components/cartData";
import { useScreenSize } from "@/components/useScreenSize";

export default function Home() {
  const { itemCart, setItemCart } = useCartContext();
  const router = useRouter();
  const screenSize = useScreenSize();
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={
          "flex flex-col items-center justify-center w-lvw " +
          (screenSize === "xs" ? "h-100" : "h-dvh")
        }
      >
        <div className="flex flex-col w-dvw bg-(--color-transmission) p-6 items-center justify-center">
          <div className="font-bold h-40 flex flex-col">
            <h1 className="text-4xl text-foreground">{"World's first"}</h1>{" "}
            <span className="text-destructive text-4xl underline">
              record store
            </span>{" "}
            <h1 className="text-4xl text-foreground">from Mars!</h1>
            <p className="text-sm italic">{"(not really)"}</p>
          </div>
          <Button
            onClick={() => router.push("/collection")}
            variant="destructive"
            className="mt-5 hover:border-b-2 border-destructive-foreground transition-all"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit "></div>
      <div className="flex flex-col items-center bg-card w-dvw p-10">
        <h1 className="text-6xl mb-10 text-center">New Arrival</h1>
        <div className="">
          {itemCart !== undefined && setItemCart !== undefined ? (
            RenderVinylList(12, { itemCart, setItemCart })
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit"></div>
    </div>
  );
}
