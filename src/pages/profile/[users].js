import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
// import Header from "../../../components/header";
// import Footer from "../../../components/footer";
// import Body from "../../../components/profile/body";

import { Header, ProfileBody, Footer } from "../../components/index";

export default function Users({ body, Profile, Rank }) {
  var session = body;

  return (
    <div className="bg-body_primary text-white h-full bg-[url('../public/bg-grid.svg')] bg-repeat bg-center font-Exo">
      <Header session={body} />
      <ProfileBody ranks={Rank} users={Profile} />
      <Footer />
    </div>
  );
}

//

export async function getServerSideProps(context) {
  const session = await getSession(context);

  var UserName = context.req.url.replace("/profile/", "").replace("%20", " ");
  // console.log(UserName);
  // console.log(ranks, ships, users);

  var body = session;
  // console.log(body)
  if (!body) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  var auth = "Bearer " + body.accessToken;

  const GetProfile = await fetch(process.env.URL + "/api/user", {
    method: "POST",
    body: JSON.stringify({ branch: true, ships: true, user: UserName }),
  });

  var Profile = await GetProfile.json();
  // console.log("Profile",Profile);


  const GetUser = await fetch(process.env.URL + "/api/user", {
    method: "POST",
    body: JSON.stringify({ branch: false, ships: false, user: body.user.name }),
  });

  var User = await GetUser.json();
  // console.log("User",User);
  var RankID = await User[0].member_type;
  // console.log("RankID",User[0]);

  const GetRanks = await fetch(process.env.URL + "/api/rank", {
    method: "POST",
    body: JSON.stringify({ id: RankID }),
  });

  var Rank = await GetRanks.json();
  // console.log("Rank",Rank);

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
    props: { body, Profile, Rank }, // will be passed to the page component as props
  };
}
