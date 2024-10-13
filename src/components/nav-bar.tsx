import { ModeToggle } from "./theme-toggle";
import { NAME } from "@/config";
import { Plane } from "lucide-react";

export function NavBar() {
  return (


    <div className=" fixed top-0 bg-white dark:bg-background h-12 border-b  w-full flex justify-between items-center px-6">

      <div className="flex gap-2 items-center">
        <h1 className="font-bold text-xl">{NAME}</h1>
        <Plane color="orange" size={30} />
      </div>

      <div>
        <ModeToggle />
      </div>

    </div>


  );
}
