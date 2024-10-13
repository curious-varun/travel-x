"use client";
import { HEADING, SMALL_HEADING, SUB_HEADING, SMALL_HEADING_LINK } from "@/config";
import Link from "next/link";
import { TravellImage } from "./svgs/travell-image";
import { BorderBeam } from "./ui/border-beam";

export function HeroSection() {
  return (
    <div className=" mt-14 w-full flex flex-col items-center">

      <Link href={SMALL_HEADING_LINK} className="mt-8">
        <span className="dark:text-black bg-gradient-to-l from-orange-100 to-orange-50 px-4 py-2  rounded-full text-sm">
          {SMALL_HEADING}
        </span>
      </Link>

      <h1 className="text-center font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-orange-500 to-orange-100 text-transparent bg-clip-text p-4 mt-6">
        {HEADING}
      </h1>

      <h2 className="mb-3 sm: bg-gradient-to-b from-black to-gray-400/80 dark:text-white bg-clip-text text-transparent text-center font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl p-4 rounded-md">
        {SUB_HEADING}
      </h2>

      <div className=" relative  h-[605px] overflow-hidden  w-[1205px]  p-2 [mask-image:linear-gradient(to_top,transparent_10%,#000_70%)] rounded-2xl">
        <TravellImage className=" rounded-2xl mx-auto  w-full rounded-2xl overflow-hidden  h-full " />
        <BorderBeam size={250} duration={8} delay={9} />
      </div>
    </div>
  );
}




