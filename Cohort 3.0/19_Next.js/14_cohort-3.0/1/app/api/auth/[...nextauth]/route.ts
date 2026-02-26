import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { type: "text", placeholder: "Enter your username", required: true },
                email: { type: "text", placeholder: "Enter your email" },
                password: { type: "password", placeholder: "Enter your password" },
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const email = credentials?.email;
                const password = credentials?.password;

                if (username && email && password) return { id: "1" };
                return null;
            },
        }
        ),
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }