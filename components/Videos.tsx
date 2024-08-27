import ShortsCard from "./ShortsCard";
import VideoCard from "./VideoCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Videos() {
  return (
    <div className="flex h-full w-full flex-row flex-wrap items-end justify-end md:w-fit">
      <div>
        <div className="flex w-fit flex-row flex-wrap items-end justify-end gap-4 p-6">
          {videos.map((number) => (
            <VideoCard key={number} />
          ))}
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
