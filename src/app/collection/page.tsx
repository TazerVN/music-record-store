"use client";
import { Input } from "@/components/ui/input";

import RenderVinylList from "@/components/vinyldetail";
export default function Collection() {
  return (
    <div className="">
      <div className="h-30 w-dvw flex justify-center items-center">
        <h1 className="font-extrabold text-5xl bg-[url(background.jpg)] bg-blend-color-burn bg-accent w-dvw flex justify-center items-center h-30">VINYL</h1>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit col-start-2"></div>
      <div className="grid grid-rows-[100px_1fr] bg-transmission min-h-dvh w-dvw">
        <div className="row-start-1 row-end-2 col-start-1 col-end-3 justify-center flex items-center max-h-40">
          <Input type="text" defaultValue={"Search"} className="bg-transmission max-w-100 h-15 shadow-md"></Input>
        </div>
        <div className="col-start-1 col-end-3 row-end-3 row-start-2">{RenderVinylList(24)}</div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit col-start-2"></div>
    </div>
  );
}
