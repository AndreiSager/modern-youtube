import ShortsCard from "./ShortsCard";
import VideoCard from "./VideoCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Videos() {
  return (
    <div className="w-full md:w-fit h-full flex flex-row flex-wrap items-end justify-end">
      <div>
        <div className="w-fit flex flex-row flex-wrap gap-4 items-end justify-end p-6">
          {videos.map((number) => (
            <VideoCard key={number} />
          ))}
        </div>
      </div>

      <div className="py-10">
        <h1 className="px-6 text-2xl font-bold">Shorts</h1>

        <div className="w-fit flex flex-row flex-wrap gap-4 items-end justify-end p-6">
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
