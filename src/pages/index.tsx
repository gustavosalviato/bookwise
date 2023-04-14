import {
  HomeContainer,
  HeroContainer,
  LoginContainer,
  LoginContent,
  Overlay,
} from "@/styles/pages/login";
import Image from "next/image";

export default function Login() {
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

          <button>
            <Image src="/google.svg" width={32} height={32} alt="" />
            Entrar com Google
          </button>
          <button>
            <Image src="/github.svg" width={32} height={32} alt="" />
            Entrar com GitHub
          </button>

          <button>
            <Image src="/rocket.svg" width={32} height={32} alt="" />
            Acessar como visitante
          </button>
        </LoginContent>
      </LoginContainer>
    </HomeContainer>
  );
}
