'use client';

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function HomePage() {
  const { setTheme } = useTheme();

  return (
    <div className="w-full max-w-[2000px] mx-auto flex gap-10 ml-[50px]">
      hi
      <Button onClick={() => setTheme("dark")}> dark </Button>
      <Button onClick={() => setTheme("light")}> light </Button>
    </div>


  );
}
