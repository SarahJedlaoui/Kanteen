import NextAuth from "next-auth"
import Cognito from "next-auth/providers/cognito"

export const {handlers: {GET, POST}, auth, signIn, signOut} = NextAuth({
    providers: [Cognito({
        checks: ["state"],
        clientId: "",
        clientSecret: ""
    })],

    basePath: "/auth",
    trustHost: true,
    callbacks: {
        authorized({request, auth}) {
            // middleware auth filter

            const {pathname} = request.nextUrl
            if (pathname === "/test") return !!auth
            return true
        }
    }, 
    debug: process.env.NODE_ENV !== "production"
});
