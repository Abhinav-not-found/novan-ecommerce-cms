import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import type { NextRequest } from "next/server";

type CustomSessionClaims = {
  publicMetadata?:{
    role?:string;
  }
}

const isHomeRoute = createRouteMatcher(["/home(.*)"]);
const isLandingPage = createRouteMatcher(["/"]);
const isAdmin = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId } = await auth();
  if (isHomeRoute(req)) {
    await auth.protect();
  }
  if (isLandingPage(req) && userId) {
    return Response.redirect(new URL("/home", req.url));
  }
  if (isAdmin(req)) {
      const { sessionClaims } = (await auth.protect()) as {
      sessionClaims: CustomSessionClaims;
    };
    const role = sessionClaims?.publicMetadata?.role;
    if (role !== "admin") {
      return Response.redirect(new URL("/home", req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
