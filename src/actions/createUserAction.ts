'use server';
// /src/actions/user.ts
import { db } from "@/db/prisma";

interface CreateUserParams {
  email: string;
  password: string;
}

export async function createUserAction({ email, password }: CreateUserParams) {
  var i = 0;
  try {
    console.log(" hi ", i);
    i++;
    const user = await db.user.create({
      data: {
        email,
        password,
      },
    });
    console.log(" hi ", i);
    i++;
    return { success: true };

  } catch (error) {
    console.log(" hi ", i);
    i++;
    console.error("Error creating user:", error);
    throw new Error("Unable to create user");
  }
}

