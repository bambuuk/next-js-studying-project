export { default } from "next-auth/middleware";

/* matcher  it's a list of private page */
export const config = { matcher: ["/profile", "/protected/:path*"] };
