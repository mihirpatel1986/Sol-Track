"use client";
import { LoginCard } from "@/components/LoginCard";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-[#0E0F14]">
        <div className="w-full max-w-md p-6">
          <LoginCard />
        </div>
      </div>
    </>
  );
}
