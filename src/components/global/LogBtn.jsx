import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="m-1">
          <button onClick={() => signOut()}>
            <FiLogOut className="text-4xl inline" />
            <p className="inline ml-4">Logout</p>
          </button>
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
