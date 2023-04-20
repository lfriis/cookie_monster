import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("next-auth.session-token");
  const originLogin = req.nextUrl.pathname === "/login";

  // Redirecting unauthenticated users to login page
  if (!isAuthenticated && !originLogin)
    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
}

// Middleware running on defined paths
export const config = {
  matcher: ["/", "/orders"],
};
