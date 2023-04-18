import {
  HomeContainer,
  HeroContainer,
  LoginContainer,
  LoginContent,
  Overlay,
} from "@/styles/pages/login";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.data?.user) {
      router.push("/home");
    }
  }, [router, session.data?.user]);

  return (
    <HomeContainer>
      <HeroContainer>
        <Overlay />
        <Image src="/bookwise.svg" width={200} height={50} alt="" />
      </HeroContainer>

      <LoginContainer>
        <LoginContent>
          <strong>Boas vindas</strong>

          <p>Faça seu login ou acesse como visitante.</p>

          <button onClick={() => signIn("google")}>
            <Image src="/google.svg" width={32} height={32} alt="" />
            Entrar com Google
          </button>
          <button onClick={() => signIn("github")}>
            <Image src="/github.svg" width={32} height={32} alt="" />
            Entrar com GitHub
          </button>

          <button onClick={() => router.push("/home")}>
            <Image src="/rocket.svg" width={32} height={32} alt="" />
            Acessar como visitante
          </button>
        </LoginContent>
      </LoginContainer>
    </HomeContainer>
  );
}
