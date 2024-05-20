import Link from "next/link";
import NavBar from "./navbar";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="w-screen p-4 flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-[1280px] h-full flex items-center justify-between">
        <Link href="#">
          <h1 className="text-zinc-50 text-xl">SEL</h1>
        </Link>
        <NavBar />
        <Button className="bg-transparent border text-zinc-50 border-zinc-50 hover:bg-zinc-50 hover:text-slate-900 transition-colors">
          Faça Parte
        </Button>
      </div>
    </div>
  );
}
