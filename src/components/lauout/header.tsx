'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersVerticalIcon, LogOut, Settings, Sparkles, User } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggleButton } from "../theme-toggle-button";
import Link from "next/link";




export function Header() {
  function handleLogin() {
    alert("logged out")
  }
  return (
    <div className="h-12 border-b flex sticky top-0 z-10 ">
      <div className="h-full border-r min-w-56  ">
        <Link href='/' className="flex justify-center items-center">
          <Sparkles />
          <h1 className="m-2 font-bold text-lg"> Admin-x</h1>
        </Link>
      </div>
      <div className="flex justify-between items-center w-full ">
        <div className="w-full flex items-center justify-between h-full mx-4" >
          <Link href='/controller' className="ml-5"> <SlidersVerticalIcon /> </Link>
        </div>
        <div>
          <DropdownMenu  >
            <DropdownMenuTrigger >
              <Avatar className="mx-4 h-8 w-8 hover:cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback> AX </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="m-2 w-44 border  p-2">
              <Link href='/profile' >
                <Button className="font-semibol w-full " variant='link' >
                  <User className="mr-2" />   profile -
                </Button>
              </Link>
              <DropdownMenuSeparator />
              <Link href='/settings' >
                <Button className="font-semibol w-full " variant='link' >
                  <Settings className="mr-2" /> Settings
                </Button>
              </Link>
              <DropdownMenuSeparator />
              <ThemeToggleButton />
              <DropdownMenuSeparator />
              <Button className="font-semibold bg-accent text-black hover:text-white hover:dark:text-black dark:text-white w-full" onClick={handleLogin}            >
                <LogOut className="mr-2" size='24' /> Log out
              </Button>
            </DropdownMenuContent>

          </DropdownMenu>
        </div>

      </div>
    </div >
  )
}
