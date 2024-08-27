import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export default function VideoCard() {
  return (
    <div>
      <div className="w-[300px] h-[170px] bg-slate-600 text-white rounded-lg flex items-center justify-center">
        Landscape Thumbnail
      </div>
      <div className="flex flex-row gap-2 pt-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1 mr-8">
          <h1 className="font-semibold">Video Title</h1>
          <p className="text-sm">
            Views
            <span> • Date Published</span>
          </p>
        </div>
      </div>
    </div>
  );
}
