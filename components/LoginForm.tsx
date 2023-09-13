import Link from "next/link";
import React from "react";

export default function LoginForm() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-green-400">
        <h1 className="text-xl font-bold my-4">Enter the details</h1>
        <form action="" className=" flex flex-col gap-3">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button className="bg-green-600 text-white cursor-pointer px-6 py-2 font-bold">
            Login
          </button>
          <div className="bg-red-500 text-white text-sm py-1 rounded-md px-3 w-fit">
            Error message
          </div>
          <Link href={"/register"} className="text-sm mt-3 text-right">
            Don't have an account? <span className="underline">Register</span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
