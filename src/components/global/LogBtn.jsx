import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="bg-blue-600 border border-transparent rounded-md">
          <div className="text-center">
            <button className="w-20 h-8" onClick={() => signOut()}>
              Logout
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="bg-blue-600 border border-transparent rounded-md">
        <div className="text-center">
          <button
            className="w-20 h-8"
            onClick={() =>
              signIn("discord", {
                callbackUrl: `${window.location.origin}/dashboard`,
              })
            }
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
