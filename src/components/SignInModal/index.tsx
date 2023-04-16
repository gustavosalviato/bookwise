import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, Title, CloseButton } from "./styles";
import Image from "next/image";
import { DiscordLogo, X } from "phosphor-react";

export function SignInModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Close asChild>
            <CloseButton>
              <X size={24} />
            </CloseButton>
          </Dialog.Close>
          <Title>Faça login para deixar sua avaliação</Title>

          <button className="login">
            <Image src="/google.svg" width={32} height={32} alt="" />
            Entrar com Google
          </button>
          <button className="login">
            <Image src="/github.svg" width={32} height={32} alt="" />
            Entrar com GitHub
          </button>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
}
