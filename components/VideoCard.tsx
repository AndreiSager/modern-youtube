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
        <div className="flex h-full w-full items-center justify-center bg-slate-600 text-white md:h-[170px] md:w-[300px] md:rounded-xl">
          Video Thumbnail
        </div>
      </AspectRatio>

      <div className="flex flex-row gap-2 px-1 pt-3 md:px-0">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h1 className="line-clamp-2 w-auto break-words text-base font-semibold md:w-[220px]">
            Video Title Video Title Video Title Video Title Video Title Video
            Title Title Video Title
          </h1>
          <div>
            <p className="items-center justify-center text-sm font-semibold text-gray-500 hover:text-black">
              Channel Name
            </p>
            <p className="items-center justify-center text-xs font-semibold text-gray-500">
              <span>Views</span>
              <span> • Date Published</span>
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild={true}
            aria-label="Toggle Video"
            className="rounded-md hover:bg-stone-100"
          >
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
