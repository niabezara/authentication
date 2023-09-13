import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { name, email, password } = await req.json();
    console.log(name);
    console.log(email);
    console.log(password);
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured" }, { status: 500 });
  }
}
