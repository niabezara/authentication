"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlesubmit = async (e: {
    target: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("all fields!!!!!!!");
      return;
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log("errrorr", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form
          action=""
          className=" flex flex-col gap-3"
          onSubmit={handlesubmit}
        >
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white text-sm py-1 rounded-md px-3 w-fit">
              {error}
            </div>
          )}
          <Link href={"/"} className="text-sm mt-3 text-right">
            Already have an account? <span className="underline">Login</span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}