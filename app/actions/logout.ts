"use server";
import { cookies } from "next/headers";

export async function logoutAction() {
  cookies().delete("token");
  return { success: true };
}
