"use client";

import { cache, useEffect, useState } from "react";
import placeholder from "./placeholder.png"

interface Song {
  name: string;
  id: string;
  thumb: string;
}

interface fetchResult {
  dataArray: Array<Song>;
  error?: Error | undefined | unknown;
  loading?: boolean;
}

const useMusicBrainData: () => fetchResult = () => {
  const [fetchResult, setFetchResult] = useState<fetchResult>({
    dataArray: [],
    loading: true,
  });
  useEffect(() => {
    const fetching = cache(async () => {
      try {
        const data = await fetch(
          'https://api.discogs.com/database/search?q=genre=metal&type=release&per_page=30&page=2',
          {
            method: "GET",
            headers: {
              Authorization:
                "Discogs key=uzdybcOnnZDVwKlKfWEC,secret=FpSCIyoGlVglOCffnaLEYBqtGznWwgMP",
            },
          }
        );
        const result = await data.json();
        console.log(result);
        const songArray: Array<Song> = [];

        await result.results.forEach((work, wID) => {
          const songObject = {
            name: work.title,
            id: work.id,
            thumb: work.cover_image ? work.cover_image : (work.thumb ? work.thumb : placeholder),
          };
          songArray[wID] = songObject;
        });
        setFetchResult({
          ...fetchResult,
          dataArray: songArray,
          loading: false,
        });
      } catch (err) {
        console.log(err);
        setFetchResult({
          ...fetchResult,
          error: err,
        });
        return null;
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

export { useMusicBrainData, CoverArtArchive };
export type { Song, fetchResult };
