"use client";

import { cache, useEffect, useState } from "react";
import placeholder from "./placeholder.png";
import { StaticImageData } from "next/image";

interface Song {
  name: string;
  id: number;
  thumb: string | StaticImageData;
  price: number;
}

interface fetchResult {
  dataArray: Array<Song>;
  error?: Error | undefined | unknown;
  loading?: boolean;
}

interface SongResponse {
  title: string;
  id: number;
  thumb: string;
  cover_image: string;
}

const useMusicBrainData: () => fetchResult = () => {
  const [fetchResult, setFetchResult] = useState<fetchResult>({
    dataArray: [],
    loading: true,
  });
  useEffect(() => {
    const fetching = cache(async () => {
      try {
        console.log("Starting fetch...");
        const result = await fetch(
          "/api/discogs?query=genre=metal&type=release&per_page=30&page=2",
          {
            signal: AbortSignal.timeout(10000),
          }
        );
        const json = await result.json();
        const songArray: Array<Song> = [];
        console.log(json);

        await json.results.forEach((work: SongResponse, wID: number) => {
          const songObject: Song = {
            name: work.title,
            id: work.id,
            thumb: work.cover_image
              ? work.cover_image
              : work.thumb
              ? work.thumb
              : placeholder,
            price: 50,
          };
          songArray[wID] = songObject;
        });
        setFetchResult((f) => ({ ...f, dataArray: songArray, loading: false }));
      } catch (err) {
        console.log("Fetch error:");
        setFetchResult((f) => ({
          ...f,
          loading: false,
          error: err,
        }));
        return err;
      }
    });
    fetching();
  }, []);

  return fetchResult;
};

// async function CoverArtArchive(id: string) {
//   const fetchImg = cache(async () => {
//     try {
//       const imgData = await fetch("https://coverartarchive.org/release/" + id, {
//         method: "GET",
//       });
//       const imgUrl = await imgData.json();
//       return imgUrl.images[0].image.toString();
//     } catch (err) {
//       throw err;
//     }
//   });
//   return fetchImg();
// }

export { useMusicBrainData };
export type { Song, fetchResult };
