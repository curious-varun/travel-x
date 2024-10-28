'use client';

import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import userSignupSchema from "@/schemas";
import { z } from "zod";
import { createUserAction } from "@/actions/createUserAction";
import { Button } from "../ui/button";

// Infer the TypeScript types from the Zod schema
type UserSignupData = z.infer<typeof userSignupSchema>;

export function UserSignupForm() {
  // Initialize the form with react-hook-form and Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSignupData>({
    resolver: zodResolver(userSignupSchema),
  });

  const onSubmit = async (data: UserSignupData) => {
    try {
      const user = await createUserAction(data);
      console.log(user);
      alert(" cretad ");
      // if(data.success-> then redirect to the home page )

    } catch (error) {
      // render a toast here 
      console.error("Error signing up:", error);
      alert(" error ");

    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="mt-1 block w-full border rounded-md px-3 py-2"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="mt-1 block w-full border rounded-md px-3 py-2"
        />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Signing up..." : "Sign Up"}
      </Button>
    </form>
  );
}

