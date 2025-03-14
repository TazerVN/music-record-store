"use client";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { useMusicBrainData } from "./getData";
import { Song } from "./getData";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { cache } from "react";
import { LoaderCircle } from "lucide-react";
import Modal from "./addinpage";
import { useScreenSize } from "@/components/useScreenSize";

import type { fetchResult } from "./getData";
import { ShoppingItem } from "./cartData";

const cacheMusicBrain: () => fetchResult = cache(useMusicBrainData);

function VinylDetail({
  name,
  id,
  thumb,
  price,
  itemCart,
  setItemCart,
}: {
  name: string;
  id: number;
  thumb: string | StaticImageData;
  price: number;
  itemCart: ShoppingItem[];
  setItemCart: Dispatch<SetStateAction<ShoppingItem[]>>;
}) {
  const [imgUrl, setImgURl] = useState<string | StaticImageData>("");
  const [loading, setLoading] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setImgURl(thumb);
      } catch (err) {
        console.log(err);
        setImgURl(thumb);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [thumb]);
  return (
    <div
      className={
        "flex flex-col justify-between items-center min-h-50 min-w-50 transition-all " +
        (isHover ? "scale-105" : "")
      }
    >
      <div className="rounded-2xl border-4 border-solid border-destructive p-1 justify-center items-center flex shadow-[0px_2px_5px] shadow-black">
        {!loading ? (
          <div
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseLeave={() => {
              setIsHover(false);
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="relative h-40 w-40 xl:h-45 xl:w-45 flex">
              <Image
                src={imgUrl}
                alt={"cover art for " + name}
                className={
                  "rounded-xl transition-all z-0 fill-accent" +
                  (isHover ? "mix-blend-multiply" : "")
                }
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg=="
                fill
              ></Image>
              <Modal
                open={open}
                setOpen={setOpen}
                name={name}
                img={imgUrl}
                price={price}
                itemCart={itemCart}
                setItemCart={setItemCart}
                id={id}
              ></Modal>
              {isHover ? (
                <div className="relative p-2 bg-transmission transition-all flex flex-col justify-center items-center w-45">
                  <h4 className="text-sms overflow-scroll overflow-x-hidden scroll-x m-auto h-15 select-none text-sm">
                    {name}
                  </h4>
                  <h4 className="text-sms m-auto h-fit select-none">
                    {"$" + price}
                  </h4>
                  <div className="h-10">
                    <Button
                      onClick={() => {
                        setOpen(true);
                        setIsHover(false);
                      }}
                      variant="destructive"
                      size="icon"
                      className="h-fit w-30 p-2 hover:border-b-2 border-destructive-foreground hover:text-accent-foreground transition-all"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <div className="h-30 w-30 items-center justify-center flex">
            Loading..
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-1"></div>
    </div>
  );
}

function RenderVinylList(
  length: number,
  {
    itemCart,
    setItemCart,
  }: {
    itemCart: ShoppingItem[];
    setItemCart: Dispatch<SetStateAction<ShoppingItem[]>>;
  }
) {
  const screenSize = useScreenSize();
  const [dataFromResult, setDataFromResult] = useState<Song[]>([]);
  const result = cacheMusicBrain();
  useEffect(() => {
    const dummy = result.dataArray.splice(result.dataArray.length - length);
    setDataFromResult(dummy);
  }, [result.loading, length, result.dataArray]);

  if (result.loading)
    return (
      <div className="flex justify-center items-center p-5">
        <LoaderCircle className="animate-spin mr-2"></LoaderCircle>
        <p>loading...</p>
      </div>
    );

    if(result.error) return(
      <p>An Error has occured</p>
    )

  return (
    <>
      <ul
        className={
          "grid p-5 gap-5 md:grid-cols-4 grid-rows-2 lg:grid-cols-6 lg:grid-rows-2 min-w-[0] min-h-[0]" +
          (screenSize == "xs" ? "grid-cols-1" : "grid-cols-3")
        }
      >
        {dataFromResult.map((x, id) => (
          <li key={id} className="rounded-2xl transition-all">
            <VinylDetail
              name={x.name}
              id={id}
              thumb={x.thumb}
              price={x.price}
              itemCart={itemCart}
              setItemCart={setItemCart}
            ></VinylDetail>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RenderVinylList;
