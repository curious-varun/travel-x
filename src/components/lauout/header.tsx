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
import { User, LogOut, LandPlot } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggleButton } from "../theme-toggle-button";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export function Header() {
  const { data: session, status } = useSession();
  function handleLogin() { signOut(); }

  return (
    <div className="h-12 border-b flex sticky top-0 z-10 bg-white/50 dark:bg-black/50 backdrop-blur-md border-b border-white/20">
      <div className="h-full min-w-56">
        <Link href='/' className="flex justify-center items-center">
          <LandPlot />
          <h1 className="m-2 font-bold text-lg"> Travell-x</h1>
        </Link>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="w-full flex items-center justify-between h-full mx-4 "> || </div>
        <div>

          {status === "authenticated" ? (
            // If the user is logged in, show the dropdown menu with the avatar
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="mx-4 h-8 w-8 hover:cursor-pointer">
                  <AvatarImage src={session.user?.image || "https://github.com/shadcn.png"} alt={session.user?.name || "@shadcn"} />
                  <AvatarFallback>AX</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="m-2 w-44 border p-2">
                <Link href='/profile'>
                  <Button className="font-semibold w-full" variant='link'>
                    <User className="mr-2" /> Profile
                  </Button>
                </Link>
                <DropdownMenuSeparator />
                <ThemeToggleButton />
                <DropdownMenuSeparator />
                <Button
                  className="font-semibold bg-accent text-black hover:text-white hover:dark:text-black dark:text-white w-full"
                  onClick={handleLogin}
                >
                  <LogOut className="mr-2" size='24' /> Log out
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            // If the user is not logged in, show Login and Signup buttons
            <div className="flex items-center space-x-2">
              <Button onClick={() => alert("clicked")} className="font-semibold bg-primary text-white hover:bg-primary-dark">
                Login
              </Button >
              <Link href="/signup">
                <Button className="mr-4 ml-2">
                  Signup
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
