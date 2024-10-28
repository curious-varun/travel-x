'use client';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { SideBarOptionData, SideBarProps } from "@/constant";

export function SideBar() {
  return (
    <div className="h-[calc(100vh_-_3rem)] block  min-w-[250px] ">
      <div className="mt-[200px]  p-4  border-r border-slate-600 mx-auto " >
        {SideBarOptionData.map((option, index) => (
          <SideBarOptions key={index} name={option.name} hrefLink={option.hrefLink} />
        ))}
      </div>
    </div>
  );
}

function SideBarOptions({ name, hrefLink }: SideBarProps) {
  const path = usePathname();
  return (
    <Link href={hrefLink}>
      <div className={cn("text-xl mt-6 text-center", hrefLink === path ? "text-2xl text-orange-500 font-bold mx-auto " : "")}>
        {name}
      </div>
    </Link >
  );
}

