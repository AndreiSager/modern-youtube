import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export default function SideBar() {
  return (
    <div className=" w-[250px] h-full shadow-md fixed left-0 top-0 pt-14">
      <ScrollArea className="w-full h-full pl-5 pr-7 flex flex-col items-center justify-center gap-4">
        <div className="pt-5">
          <div className="font-bold text-lg pb-2">Recent</div>

          <div className="w-fit flex flex-row flex-wrap items-end justify-end">
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
          <div className="font-bold text-lg pb-2">Explore</div>

          <div className="w-fit flex flex-row flex-wrap items-end justify-end">
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
          <div className="font-bold text-lg pb-2">Explore</div>

          <div className="w-fit flex flex-row flex-wrap items-end justify-end">
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
  "Moview",
  "Gaming",
  "News",
  "Sports",
  "Fashion & Beauty",
];
