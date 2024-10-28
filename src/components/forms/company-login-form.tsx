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




export function LoginCompanyForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof LoginScheema>>({
    resolver: zodResolver(LoginScheema),
    defaultValues: { username: "", password: " " }
  });

  const LoginCompanySubbmit = (values: z.infer<typeof LoginScheema>) => {
    try {
      startTransition(async () => {
        // WIP : here make a action to loing 
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast({ description: "work in progress id:100 ", });
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
    <div >
      < Form {...form}>
        <form
          onSubmit={form.handleSubmit(LoginCompanySubbmit, (errors) => {
            toast({
              title: "Error",
              description: "there is a bug in Validation ",
              variant: "destructive",
              action: < ToastAction altText="report a bug " > <Link href='/report-bug' className=" border border-white bg-white/20 p-2 rounded-lg text-sm"> report a bug </Link> </ToastAction >
            });
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
                  <FormLabel>Password </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="enter your password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            Login as company
          </Button>
        </form>
      </Form >
    </div >
  );
}
