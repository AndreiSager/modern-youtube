"use client";

import { useEffect, useState } from "react";
import ShortsCard from "./ShortsCard";
import VideoCard from "./VideoCard";

export default function Videos() {
  const [data, setData] = useState();

  const url = "https://yt-api.p.rapidapi.com/home";

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "61ae4ca798mshf56af0f34308a1cp131e21jsn98e684c8fd8a",
        "x-rapidapi-host": "yt-api.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex h-full w-full flex-row flex-wrap items-end justify-end md:w-fit">
      <div>
        <div className="flex w-fit flex-row flex-wrap items-end justify-end gap-4 md:p-6">
          {data &&
            data?.map((data) => <VideoCard key={data.videoId} {...data} />)}
        </div>
      </div>

      <div className="py-10">
        <h1 className="px-6 text-2xl font-bold">Shorts</h1>

        <div className="flex w-fit flex-row flex-wrap items-end justify-end gap-4 p-6">
          {shorts.map((number) => (
            <ShortsCard key={number} />
          ))}
        </div>
      </div>
    </div>
  );
}

const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shorts = [1, 2, 3, 4, 5, 6, 7];
