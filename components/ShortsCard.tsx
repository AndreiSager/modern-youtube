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

export default function ShortsCard() {
  return (
    <div>
      <div className="w-[210px] h-[380px] bg-slate-600 text-white rounded-xl flex items-center justify-center">
        Short Thumbnail
      </div>
      <div className="flex flex-row gap-2 pt-3">
        <div className="flex flex-col gap-1">
          <h1 className="w-[180px] font-semibold line-clamp-2 break-words text-base">
            Video Title Video Title Video Title Video Title Video Title Video
            Title Title Video Title
          </h1>
          <div>
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
