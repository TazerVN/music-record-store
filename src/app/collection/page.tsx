"use client";
import { useCartContext } from "@/components/cartData";
import { useScreenSize } from "@/components/useScreenSize";

import RenderVinylList from "@/components/vinyldetail";
export default function Collection() {
  const screenSize = useScreenSize();
  const { itemCart, setItemCart } = useCartContext();
  return (
    <div className="">
      <div
        className={
          " w-dvw flex justify-center items-center " +
          (screenSize === "xs" ? "h-50" : "h-dvh")
        }
      >
        <div
          className={
            "bg-(--color-transmission) bg-cover bg-center bg-no-repeat min-h-fit w-dvw flex justify-center items-center bg-fixed " +
            (screenSize === "xs" ? "h-50" : "h-60")
          }
        ></div>
        <div className="absolute h-60 flex flex-col justify-center items-center">
          <h1 className="underline italic text-destructive text-5xl w-dvw text-center self-center flex justify-center items-center">
            Vinyl
          </h1>
          <h1 className=" text-foreground text-5xl w-dvw text-center self-center flex justify-center items-center">
            Collection
          </h1>
        </div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit col-start-2"></div>
      <div className="grid grid-rows-[100px_1fr] bg-transmission min-h-dvh w-dvw">
        <div className="col-start-1 col-end-3 row-end-3 row-start-1">
          {itemCart != undefined && setItemCart !== undefined ? (
            RenderVinylList(24, { itemCart, setItemCart })
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit col-start-2"></div>
    </div>
  );
}
