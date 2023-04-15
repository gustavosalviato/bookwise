import { RatingScore } from "../RatingScore/styles";
import { ExploreBookCardContainer, Image, Trigger } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { SidePanelModal } from "../SidePanelModal";

export function ExploreBookCard() {
  return (
    <Dialog.Root>
      <Trigger>
        <ExploreBookCardContainer>
          <Image src="/books/domain-driven-design.png" />

          <div>
            <strong>A revolução dos bichos</strong>

            <p>George Orwell</p>

            <RatingScore />
          </div>
        </ExploreBookCardContainer>
      </Trigger>

      <SidePanelModal />
    </Dialog.Root>
  );
}
