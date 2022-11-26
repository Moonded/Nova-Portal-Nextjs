import "../../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { prisma } from "../../db";

export const getServerSideProps = async ({ req }) => {
  const token = req.headers.AUTHORIZATION;
  const userId = await getUserId(token);
  const posts = await prisma.post.findMany({
    where: {
      author: { id: userId },
    },
  });
  return { props: { posts } };
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className="text-white font-Exo bg-body_primary bg-[url('../public/bg-grid.svg')] bg-repeat bg-center h-screen">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
