import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export default function VideoCard() {
  return (
    <div>
      <h1>Landscape Thumbnail</h1>
      <div>
        <h1>Avatar</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Title</h1>
      </div>
      <p>Views • Date Published</p>
    </div>
  );
}
