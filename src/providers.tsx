"use client"

import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider >
    </SessionProvider>
  );
}
