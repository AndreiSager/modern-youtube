import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function VideoCard() {
  return (
    <div className="w-full md:w-auto">
      <AspectRatio ratio={16 / 9}>
        <div className="w-full  md:w-[300px] md:h-[170px] h-full bg-slate-600 text-white rounded-xl flex items-center justify-center">
          Video Thumbnail
        </div>
      </AspectRatio>

      <div className="flex flex-row gap-2 pt-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h1 className="w-[220px] font-semibold line-clamp-2 break-words text-base">
            Video Title Video Title Video Title Video Title Video Title Video
            Title Title Video Title
          </h1>
          <div>
            <p className="text-sm text-gray-500 justify-center items-center font-semibold hover:text-black">
              Channel Name
            </p>
            <p className="text-xs text-gray-500 justify-center items-center font-semibold">
              <span>Views</span>
              <span> • Date Published</span>
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild={true} aria-label="Toggle Video">
            <EllipsisVertical className="h-5 w-5" />
          </DropdownMenuTrigger>
          {/* <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent> */}
        </DropdownMenu>
      </div>
    </div>
  );
}
