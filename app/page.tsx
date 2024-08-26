import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <SideBar />
      <Videos />
    </main>
  );
}
