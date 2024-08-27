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
        <div className="">
          <h1 className="w-[220px] font-semibold line-clamp-2 break-words">
            Video Title Video Title Video Title Video Title Video Title Video
            Title Title Video Title
          </h1>
          <p className="text-sm justify-center items-center">
            <span>Views</span>
            <span> • Date Published</span>
          </p>
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
