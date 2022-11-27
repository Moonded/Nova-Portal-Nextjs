import { useSession, signIn, signOut, getSession } from "next-auth/react";
// import LoginBtn from "../../components/LoginBtn";
import { LogBtn } from "../components/index";

export default function Home() {
  return (
    <>
      <div>
        <div className="absolute top-0 w-screen h-10 bg-red-600">
          <div className="flex justify-center items-center h-10 text-xs lg:text-sm xl:text-base mx-5">
            <strong>
              Be advised this site uses cookies to store your session data. If
              you don't accept that, please don't use the website
            </strong>
          </div>
        </div>
        <div className="relative lg:top-1 top-12 lg:right-5">
          <div className="flex justify-center lg:justify-end items-center">
            <div className="w-20">
              <LogBtn />
            </div>
          </div>
        </div>
        <div className="pt-20">
          <div className="grid grid-cols-1 grid-rows-2">
            <div className="flex justify-center items-center rows-span-2 text-center">
              <div>
                <div className="text-5xl"><strong>Welcome!</strong></div>
                <br />
                This is a <strong>DEMO</strong> to show of my work. Nothing you
                see here is officialy tied to NOVA Intergalactic.
                <br />
                This Website is still in develoment, meaning not all features
                are fully implemented yet.
                <br />
              </div>
            </div>
            <div className="flex justify-center items-center mt-2">
              <div>
                <div>
                  TODO:
                  <br />● Finnish User Page <br />● Create Database (Wiki){" "}
                  <br />
                  ● Create Operation Page <br />● Create Squadrons Page
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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
