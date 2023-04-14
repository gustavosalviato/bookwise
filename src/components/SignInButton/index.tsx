import { ContainerButton } from "./styles";
import { SignIn } from "phosphor-react";
export function SignInButton() {
  return (
    <ContainerButton>
      Fazer Login
      <SignIn size={20} />
    </ContainerButton>
  );
}
