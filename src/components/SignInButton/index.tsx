import { ContainerButton, ImageProfile } from "./styles";
import { SignIn, SignOut } from "phosphor-react";
export function SignInButton() {
  const isSignIn = true;

  return (
    <ContainerButton>
      {isSignIn && (
        <ImageProfile src="http://github.com/gustavosalviato.png" alt="" />
      )}
      {isSignIn ? "Gustavo" : "Fazer login"}

      {isSignIn ? (
        <SignOut size={28} color="#F75A68" />
      ) : (
        <SignIn size={28} color="#50B2C0" />
      )}
    </ContainerButton>
  );
}
