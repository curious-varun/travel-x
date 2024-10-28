'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link"
import { ToastAction } from "@radix-ui/react-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginScheema } from "@/schemas";
import { useToast } from "@/hooks/use-toast";
import { useTransition } from "react";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";




export function LoginUserForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof LoginScheema>>({
    resolver: zodResolver(LoginScheema),
    defaultValues: { password: " " }
  });

  const LoginUserSubbmit = (values: z.infer<typeof LoginScheema>) => {
    try {
      startTransition(async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast({
          description: "work in progress id : 101 "
        });
        form.reset()
      });
    }
    catch (error: unknown) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
        action: < ToastAction altText="report a bug " > <Link href='/report-bug' className="bg-white/20 p-2 rounded-lg text-sm"> report a bug </Link> </ToastAction >
      });
    }
  };


  return (
    <div className="">
      < Form {...form} >
        <form
          onSubmit={form.handleSubmit(LoginUserSubbmit, (errors) => {
            console.error("Validation errors:", errors);
          })}
          className="space-y-6 w-[300px]"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="enter your username" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="enter your password " type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            Login as user
          </Button>
        </form>
      </Form >
    </div >
  );
}
