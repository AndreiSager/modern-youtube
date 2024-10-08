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
import Image from "next/image";

interface VideoCard {
  title: string;
  channelThumbnail: { url: string };
  channelTitle: string;
  viewCount: string;
  publishedTimeText: string;
}

export default function VideoCard({
  title,
  channelThumbnail,
  channelTitle,
  viewCount,
  publishedTimeText,
}: VideoCard) {
  return (
    <div className="w-full md:w-auto">
      <AspectRatio ratio={16 / 9}>
        <Image src="" fill alt="" />
        <div className="flex h-full w-full cursor-pointer items-center justify-center bg-slate-600 text-white md:h-[170px] md:w-[300px] md:rounded-xl">
          Video Thumbnail
        </div>
      </AspectRatio>

      <div className="flex flex-row gap-2 px-1 pt-3 md:px-0">
        <Avatar>
          <AvatarImage src={channelThumbnail?.url} className="cursor-pointer" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex w-[95%] flex-col gap-1">
          <h1 className="line-clamp-2 cursor-pointer break-words text-base font-semibold md:max-w-[210px]">
            {title}
          </h1>
          <div>
            <p className="cursor-pointer items-center justify-center text-sm font-semibold text-gray-500 hover:text-black">
              {channelTitle}
            </p>
            <p className="items-center justify-center text-xs font-semibold text-gray-500">
              <span>{viewCount}</span>
              {publishedTimeText && <span> • {publishedTimeText}</span>}
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild={true} aria-label="Toggle Video">
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-stone-200 enabled:bg-stone-200">
              <EllipsisVertical size={35} className="p-1" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-52" align="start" side="right">
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
