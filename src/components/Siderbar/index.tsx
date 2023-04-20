import { SidebarContainer, NavContainer } from "./styles";
import Image from "next/image";
import { ActiveLink } from "../ActiveLink";
import { ChartLineUp, Binoculars, User } from "phosphor-react";
import { SignInButton } from "../SignInButton";
import { useSession } from "next-auth/react";
export function Sidebar() {
  const session = useSession();
  return (
    <SidebarContainer>
      <div>
        <Image src="/book-outline.svg" width={24} height={24} alt="" />
        <strong>BookWise</strong>
      </div>

      <NavContainer>
        <div>
          <ChartLineUp size={24} />
          <ActiveLink path="/home" title="Início" />
        </div>

        <div>
          <Binoculars size={24} />

          <ActiveLink path="/explore" title="Explorar" />
        </div>

        <div>
          <User size={24} />

          <ActiveLink
            path={`/profile/${session.data?.user.id}`}
            title="Perfil"
            includes
          />
        </div>
      </NavContainer>

      <SignInButton />
    </SidebarContainer>
  );
}
