"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlesubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid credentials");
        return;
      }
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-green-400">
        <h1 className="text-xl font-bold my-4">Enter the details</h1>
        <form
          action=""
          className=" flex flex-col gap-3"
          onSubmit={handlesubmit}
        >
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-green-600 text-white cursor-pointer px-6 py-2 font-bold">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white text-sm py-1 rounded-md px-3 w-fit">
              {error}
            </div>
          )}
          <Link href={"/register"} className="text-sm mt-3 text-right">
            Dont have an account &#63;{" "}
            <span className="underline">Register</span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
