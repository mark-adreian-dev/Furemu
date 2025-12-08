"use server";

import { cookies } from "next/headers";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch(process.env.API_URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) return { error: data.message || "Login failed" };

  cookies().set("token", data.token, {
    httpOnly: true,
    secure: true,
    path: "/"
  });

  return { success: true };
}
