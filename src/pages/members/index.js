import { getSession, signOut } from "next-auth/react";
// import Header from "../../components/header";
// import Body from "../../components/squadrons/body";
// import Footer from "../../components/footer";

import { Header, MemberBody, Footer } from "../../components/index";


export default function Dashboard({ body, Users}) {
  var session = body;
  return (
    <div>
      <Header session={body} />
      <MemberBody users={Users}/>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  var body = session;
//   console.log(body);
  if (!body) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const GetUsers = await fetch("http://10.0.0.37:3000/api/user?branch=true", {
    method: "GET"
  });

  var Users = await GetUsers.json();

  const GetUser = await fetch("http://10.0.0.37:3000/api/user", {
    method: "POST",
    body: JSON.stringify({ user: body.user.name }),
  });

  var User = await GetUser.json();
//   console.log(User);
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
    props: { body, Users },
  };
}
