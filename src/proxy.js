import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 🚫 Skip Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  // 🕒 Night block: 11 PM → 6 AM
  const hour = new Date().getHours();

  if (hour >= 23 || hour < 6) {
    // API → JSON
    if (pathname.startsWith("/api")) {
      return NextResponse.json(
        { message: "App is unavailable between 11 PM and 6 AM" },
        { status: 403 }
      );
    }

    // Pages → redirect
    return NextResponse.redirect(
      new URL("/maintenance", request.url)
    );
  }

  // 🔒 Outside night → restrict ONLY feedback API
  // if (pathname.startsWith("/api/feedback")) {
  //   return NextResponse.json(
  //     { message: "Feedback API is restricted" },
  //     { status: 403 }
  //   );
  // }

  // ✅ Allow everything else
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
