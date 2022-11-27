import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { getSession } from "next-auth/react";
import { clearPreviewData } from "next/dist/server/api-utils";
import prisma from "../../../../lib/prisma";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      scope: "identify email guilds",
      // authorization: { params: { scope: ['identify', 'email', 'guilds'] } },
      profile: (profile) => {
        let userAvatar = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`;
        return {
          id: profile.id,
          snowflake: profile.id,
          name: profile.username,
          image: userAvatar,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.id = token.sub;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    async signIn({ user, account, profile }) {
      const findUser = await prisma.user.findUnique({
        where: { id: user.id },
      });


      // var auth = "Bearer " + account.access_token;
      // const resGuild = await fetch(
      //   "https://discord.com/api/v10/users/@me/guilds",
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization: auth,
      //     },
      //   }
      // );

      // const guildData = await resGuild.json();

      
      // for (var i = 0; i < guildData.length; i++) {
      //   if (guildData[i].id === "421412271772794880") {
      //     isGuild = true;
      //   }
      // }

      
      var isGuild = true;
      if (findUser == null) {

        const newUser = await prisma.user.create({
          data: {
            id: user.id,
            name: user.name,
            image: user.image,
            isGuild: isGuild,
            branch: {
              create: [
                {}
              ]
            }
          },
        });
      } else if (findUser.isGuild == false) {
        const updateUser = await prisma.user.update({
          where: { id: user.id },
          data: {
            isGuild: isGuild,
          },
        });
      }
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
