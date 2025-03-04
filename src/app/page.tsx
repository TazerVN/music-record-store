"use client";

import { Button } from "@/components/ui/button";
import RenderVinylList from "@/components/vinyldetail";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center h-dvh w-lvw">
        <div className="flex flex-col w-dvw bg-(--color-transmission) p-4 items-center justify-center ">
          <div className="font-bold">
            <h1 className="text-4xl text-foreground">{"the world's"}</h1>{" "}
            <span className="text-destructive text-4xl underline">
              smallest
            </span>{" "}
            <h1 className="text-4xl text-foreground">record store!</h1>
          </div>
          <Button
            onClick={() => router.push("/collection")}
            variant="destructive"
            className="mt-5 hover:border-b-4 transition-all"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit "></div>
      <div className="flex flex-col items-center bg-card w-dvw p-10">
        <h1 className="text-6xl mb-10">New Arrival</h1>
        <div className="">{RenderVinylList(8)}</div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit"></div>
    </div>
  );
}
