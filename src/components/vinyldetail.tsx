import Image from "next/image";
import { Button } from "./ui/button";
import placeholder from "./placeholder.png";

function VinylDetail() {
  return (
    <div className="p-2 flex flex-col gap-5 justify-center items-center">
      <div className="rounded-2xl border-4 border-solid border-destructive p-1">
        <Image
          src={placeholder}
          alt="placeholder"
          width={200}
          height={200}
          className="rounded-xl"
        ></Image>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h4 className="font-bold text-md">Place Holder Title</h4>
        <p className="font-light text-xs">by Various Ipsem</p>
        <p>$200</p>
      </div>
      <Button variant="destructive" size="icon" className="w-fit p-2">
        Add to Cart
      </Button>
    </div>
  );
}

function RenderVinylList(length: number) {
  const rows = [];
  for (let i = 0; i < length; i++) {
    const dummy = "dummy";
    rows.push(dummy);
  }
  return (
    <>
      <ul className="grid p-5 grid-cols-4 gap-5">
        {rows.map((x, id) => (
          <li key={id} className="">
            <VinylDetail></VinylDetail>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RenderVinylList;
