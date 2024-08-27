import NavBar from "@/components/NavBar";
import ShortsCard from "@/components/ShortsCard";
import SideBar from "@/components/SideBar";
import VideoCard from "@/components/VideoCard";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen-xl flex-col items-center border-1 pt-14">
      <NavBar />
      <div className="flex flex-row w-full">
        <SideBar />
        <div className="w-[300px] h-full" />
        <Videos />
      </div>
    </main>
  );
}
