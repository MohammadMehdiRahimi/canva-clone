import { auth } from "@/config/next-auth.config";
export default auth((req) => {
  const isLoginRoute = !!req.nextUrl.pathname.startsWith("/login");
  const isAuthUser = !!req.auth;
  if (isLoginRoute) {
    if (isAuthUser) {
      return Response.redirect(new URL("/", req.url));
    }
    return null;
  }
  if (!isAuthUser) {
    return Response.redirect(new URL("/login", req.url));
  }
  return null;
});

export const config = {
  matcher: ["/", "/editor/:path*", "/login"],
};
