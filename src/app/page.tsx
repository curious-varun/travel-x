import { ThemeToggleButton } from "@/components/theme-toggle-button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <div>
        <h1> hi this is home page</h1>
      </div>
      <div className="w-10 h-10">
        <ThemeToggleButton />
      </div>
      <Link href='/login'> login </Link>
      <Link href='/home'> home </Link>
      <Link href='/login'> login </Link>

    </div>

  )
}








