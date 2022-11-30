import { getSession, signOut } from "next-auth/react";
// import Header from "../../components/header";
// import Body from "../../components/dashboard/body";
// import Footer from "../../components/footer";

import { Header, DashboardBody, Footer } from "../../components/index";

export default function Dashboard({ body, User }) {

  var session = body;
  return (
    <div className="h-screen">
      <Header session={body} />
      <DashboardBody userbody={User} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  var body = session;
  // console.log("Dashboard ",body)
  if (!body) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const GetUser = await fetch(process.env.URL + "/api/user", {
    method: "POST",
    body: JSON.stringify({ user: body.user.name }),
  });
  
  var User = await GetUser.json();
  var isGuild
  User.length === 0 ? isGuild = false : isGuild = User[0].isGuild

  // var isGuild = true;
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
    props: { body, User }, // will be passed to the page component as props
  };
}
