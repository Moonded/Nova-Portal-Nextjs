import { useSession, signIn, signOut, getSession } from "next-auth/react";
// import LoginBtn from "../../components/LoginBtn";
import { LogBtn } from "../components/index";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center items-center text-center text-2xl pt-5">
        <div>
          NOVA PORTAL DEMO - USER PAGE
          <br />
          This DEMO is to show of my work. It is not official but for practise
          only.
          <br />
          <div>
            TBD: Finnish User Page | Create Database Page | Create Operations
            Page | Create Squadrons Page
          </div>
          <div>
            Goal is to recreate the entire Nova Portal, not content wise but
            functionality wise.
          </div>
        </div>
      </div>
      <div className="absolute w-full mt-60">
        <div className="flex justify-center items-center">
          <div className="w-20">
            <LogBtn />
          </div>
          <div className="space-x-2 ml-2">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
