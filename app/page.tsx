import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen-xl flex-col items-center p-24 border-1">
      <NavBar />
      <div className="flex flex-row">
        <SideBar />
        <Videos />
      </div>
    </main>
  );
}
