import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export default function SideBar() {
  return (
    <div className="fixed left-0 top-0 hidden h-full w-[250px] bg-white pt-14 shadow-md md:flex">
      <ScrollArea className="flex h-full w-full flex-col items-center justify-center gap-4 pl-5 pr-7">
        <div className="pt-5">
          <div className="pb-2 text-lg font-bold">Recent</div>

          <div className="flex w-fit flex-row flex-wrap items-end justify-end">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="w-full justify-start"
              >
                <Mail className="mr-2 h-4 w-4" /> {category}
              </Button>
            ))}
          </div>
        </div>

        <Separator className="my-4" />
        <div className="pt-5">
          <div className="pb-2 text-lg font-bold">Explore</div>

          <div className="flex w-fit flex-row flex-wrap items-end justify-end">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="w-full justify-start"
              >
                <Mail className="mr-2 h-4 w-4" /> {category}
              </Button>
            ))}
          </div>
        </div>

        <Separator className="my-4" />
        <div className="pt-5">
          <div className="pb-2 text-lg font-bold">Explore</div>

          <div className="flex w-fit flex-row flex-wrap items-end justify-end">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="w-full justify-start"
              >
                <Mail className="mr-2 h-4 w-4" /> {category}
              </Button>
            ))}
          </div>
        </div>

        <Separator className="my-4" />
        <div className="pb-5 text-xs text-gray-500">
          @2023{" "}
          <a
            href="https://andreiportfolio.vercel.app/"
            target="_blank"
            className="font-semibold text-black hover:underline"
          >
            Andrei Sager
          </a>{" "}
          All Rights Reserved.
        </div>
      </ScrollArea>
    </div>
  );
}

const categories = [
  "Trending",
  "Music",
  "Movies",
  "Gaming",
  "News",
  "Sports",
  "Fashion & Beauty",
];
