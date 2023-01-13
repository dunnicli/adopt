import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma.ts";
//const prisma = new PrismaClient();

const bcrypt = require("bcrypt");

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your_username",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        //const user = { id: 2, name: "John D", email: "dunnicli@gmail.com" };
        ///***
        const user = await prisma.user.findFirst({
          where: {
            username: credentials.username,
            //password: credentials.password,
          },
        });
        //// *****
        if (bcrypt.compareSync(credentials.password, user.passwordHash)) {
          //if (user.password === credentials.password) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      },



      
      /** 
      authorize: (credentials) => {
        // database look up
        if (
          credentials.username === "john" &&
          credentials.password === "test"
        ) {
          return {
            id: 2,
            name: "John",
            email: "johndoe@test.com",
          };
        }

        // login failed
        return null;
      },
      */

    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.isAdmin = user.isAdmin;
        token.active = user.active;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.username = token.username;
        session.email = token.email;
        session.isAdmin = token.isAdmin;
        session.active = token.active;
      }

      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
  //pages: {
    //signIn: "auth/sigin",
  //},
});