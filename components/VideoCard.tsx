import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Ban,
  Bookmark,
  CircleMinus,
  Clock,
  Download,
  EllipsisVertical,
  Flag,
  ListVideo,
} from "lucide-react";
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
          <h1 className="line-clamp-2 w-auto break-words text-base font-semibold md:max-w-[210px]">
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
            className="flex-1 rounded-md hover:bg-stone-200"
          >
            <EllipsisVertical size={35} className="p-2" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Watch</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ListVideo className="mr-2 h-4 w-4" />
              <span>Add To Queue</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Clock className="mr-2 h-4 w-4" />
              <span>Save To Watch Later</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bookmark className="mr-2 h-4 w-4" />
              <span>Save To Playlist</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Download</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Avoid</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Ban className="mr-2 h-4 w-4" />
              <span>Not Interested</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CircleMinus className="mr-2 h-4 w-4" />
              <span>Don't Recommend</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Flag className="mr-2 h-4 w-4" />
              <span>Report</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
