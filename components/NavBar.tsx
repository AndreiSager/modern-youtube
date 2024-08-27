import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@radix-ui/react-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Search } from "lucide-react";

export default function NavBar() {
  return (
    <div className="w-full h-14 flex items-center justify-between fixed top-0 bg-white shadow-md p-6 z-10">
      <div className="flex justify-center items-center gap-2">
        <Toggle aria-label="Toggle Sidebar">
          <Menu className="h-6 w-6" />
        </Toggle>
        <h1>Logo</h1>
        <h1>YouTube</h1>
      </div>

      <div className="flex flex-row gap-2">
        <Input type="email" placeholder="Email" className="w-[300px]" />
        <Button
          variant="default"
          className="p-2 flex justify-center items-center"
        >
          <Search className="h-6 w-6" />
        </Button>
      </div>

      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
