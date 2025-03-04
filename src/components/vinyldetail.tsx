"use client";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { useMusicBrainData } from "./getData";
import { Song } from "./getData";
import { useEffect, useState } from "react";
import { cache } from "react";

import type { fetchResult } from "./getData";

const cacheMusicBrain: () => fetchResult = cache(useMusicBrainData);

function VinylDetail({ name, id, thumb }: Song) {
  const [imgUrl, setImgURl] = useState<string | StaticImageData>("");
  const [loading, setLoading] = useState(true);
  const [isHover, setIsHover] = useState(false);

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
  }, []);
  return (
    <div className="flex flex-col justify-between items-center min-h-50 min-w-50 hover:scale-105 transition-all">
      <div className="rounded-2xl border-4 border-solid border-destructive p-1 justify-center items-center flex shadow-[0px_2px_5px] shadow-black">
        {!loading ? (
          <div
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onClick={() => {
              if (isHover == true) {
                setIsHover(false);
              } else {
                setIsHover(true);
              }
            }}
            onMouseLeave={() => {
              setIsHover(false);
            }}
          >
            <div className="relative h-40 w-40 flex">
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
              {isHover ? (
                <div className="relative p-2 bg-transmission transition-all flex flex-col justify-center items-center w-40">
                  <h4 className="text-sms overflow-scroll m-auto h-15 select-none">
                    {name}
                  </h4>
                  <h4 className="text-sms overflow-scroll m-auto h-fit select-none">
                    $50
                  </h4>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="h-fit w-30 p-2 hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    Add to Cart
                  </Button>
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

function RenderVinylList(length: number) {
  const [dataFromResult, setDataFromResult] = useState<Song[]>([]);
  const result = cacheMusicBrain();
  useEffect(() => {
    const dummy = result.dataArray.splice(result.dataArray.length - length);
    console.log(dummy);
    setDataFromResult(dummy);
  }, [result.loading]);

  if (result.loading)
    return <p className="flex justify-center items-center">loading...</p>;

  return (
    <>
      <ul className="grid p-5 lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-1 sm:grid-rows-8 xl:grid-cols-6 xl:grid-rows-2 min-w-[0] min-h-[0] 2xl:grid-cols-8 2xl:grid-rows-1">
        {dataFromResult.map((x, id) => (
          <li key={x.id} className="rounded-2xl transition-all">
            <VinylDetail name={x.name} id={x.id} thumb={x.thumb}></VinylDetail>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RenderVinylList;
