import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export default function SideBar() {
  return (
    <div className=" w-[250px] h-full shadow-md fixed left-0 top-0 pt-14">
      <ScrollArea className="w-full h-full px-5 flex flex-col items-center justify-center gap-4">
        <div className="pt-5">
          <div className="font-bold text-lg pb-2">Explore</div>
          <Button variant="ghost" className="w-full justify-start">
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
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
