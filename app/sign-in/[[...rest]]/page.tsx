"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignIn
        path="/sign-in"
        routing="path"
        fallbackRedirectUrl="/"  // After login, redirect to homepage
      />
    </div>
    
  );
}
