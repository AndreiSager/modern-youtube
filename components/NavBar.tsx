import { Toggle } from "@radix-ui/react-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";

export default function NavBar() {
  return (
    <div className="w-full h-14 flex items-center justify-between fixed top-0 bg-white shadow-md p-6 z-10">
      <div className="flex justify-center items-center gap-2">
        <Toggle aria-label="Toggle Sidebar">
          <Menu className="h-8 w-8" />
        </Toggle>
        <h1>Logo</h1>
        <h1>YouTube</h1>
      </div>

      <div>Navbar Center</div>

      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
