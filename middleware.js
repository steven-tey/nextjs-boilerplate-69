import { NextResponse } from "next/server";

export default async function middleware(req) {
  if (req.headers.get("host").startsWith("app")) {
    return NextResponse.rewrite(
      new URL(`/app${req.nextUrl.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}
