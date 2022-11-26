import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
// import Header from "../../../components/header";
// import Footer from "../../../components/footer";
// import Body from "../../../components/profile/settings_body";

import { Header, ProfileSettingsBody, Footer } from "../../components/index";


export default function Users({ body, User, Rank }) {
  var session = body;

  return (
    <div className="bg-body_primary text-white h-full bg-[url('../public/bg-grid.svg')] bg-repeat bg-center font-Exo">
      <Header session={body} />
      <ProfileSettingsBody users={User} rank={Rank} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  var body = session;
  if (!body) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const GetUser = await fetch("http://10.0.0.37:3000/api/user", {
    method: "POST",
    body: JSON.stringify({ user: body.user.name }),
  });
  var User = await GetUser.json();

  const GetRanks = await fetch("http://10.0.0.37:3000/api/rank", {
    method: "POST",
    body: JSON.stringify({}),
  });

  var Rank = await GetRanks.json();
  var isGuild = User[0].isGuild;
  if (!isGuild) {
    context.res.setHeader("Set-Cookie", [
      `next-auth.callback-url=deleted; Max-Age=0`,
      `next-auth.csrf-token=deleted; Max-Age=0`,
      `next-auth.session-token=deleted; Max-Age=0`,
    ]);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { body, User, Rank },
  };
}
