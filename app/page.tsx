import NavBar from "@/components/NavBar";
import ShortsCard from "@/components/ShortsCard";
import SideBar from "@/components/SideBar";
import VideoCard from "@/components/VideoCard";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <main className="min-w-screen-xl border-1 flex min-h-screen flex-col items-center pt-14">
      <NavBar />
      <div className="flex w-full flex-row">
        <SideBar />
        <div className="hidden h-full w-[300px]" />
        <Videos />
      </div>
    </main>
  );
}
