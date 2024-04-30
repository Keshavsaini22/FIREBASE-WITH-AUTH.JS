import nextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = nextAuth({
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'Email', type: 'text', placeholder: 'Email' },
            password: { label: 'Password', type: 'password', placeholder: 'Password' },
          },
          async authorize(credentials: any) {
              
              return {
                  id: "user1"
              };
          },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
  })

  export { handler as GET, handler as POST }
// export function GET(req: NextRequest, { params: { nextauth } }: { params: { nextauth: string[] } }) {
//     console.log('authRoutes: ', nextauth);

//     return NextResponse.json({
//         message: "hello"
//     })
// }