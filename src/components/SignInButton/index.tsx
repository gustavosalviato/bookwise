import { ContainerButton, ImageProfile } from "./styles";
import { SignIn, SignOut } from "phosphor-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
export function SignInButton() {
  const session = useSession();
  const router = useRouter();

  const firstName = session.data?.user?.name?.split(" ");

  return (
    <ContainerButton
      onClick={() => router.push("/")}
      disabled={session.status === "authenticated"}
    >
      {session.status === "authenticated" ? (
        <ImageProfile src={session.data?.user?.image!} alt="" />
      ) : null}

      {session.status === "authenticated" ? firstName![0] : "Fazer Login"}

      {session.status === "authenticated" ? (
        <SignOut size={28} color="#F75A68" />
      ) : (
        <SignIn size={28} color="#50B2C0" />
      )}
    </ContainerButton>
  );
}
