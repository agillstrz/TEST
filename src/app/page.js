import Center from "@/components/layouts/Center";
import LeftBar from "@/components/layouts/LeftBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-5 flex">
      <div className="w-[25%]">
        <LeftBar />
      </div>
      <div className="w-[50%]">
        <Center />
      </div>
      <div className="w-[20%]"></div>
    </main>
  );
}
