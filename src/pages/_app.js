import "../../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { prisma } from "../../db";
import { Header, Footer } from "../components/index";

var session;
export const getServerSideProps = async ({ req }) => {
  const token = req.headers.AUTHORIZATION;
  const userId = await getUserId(token);
  const posts = await prisma.post.findMany({
    where: {
      author: { id: userId },
    },
  });
  session = await getSession(context);

  // var body = session;
  return { props: { posts } };
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  var body = session;
  return (
    <SessionProvider session={session}>
      <div className="text-white bg-body_primary bg-[url('../public/bg-grid.svg')] bg-repeat bg-center h-full">
        <div className="text-white font-Exo text-white">
          <Component {...pageProps} className="" />
        </div>
        <Footer />
      </div>
    </SessionProvider>
  );
}
