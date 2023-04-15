import { RatingScore } from "../RatingScore/styles";
import { ExploreBookCardContainer, Image } from "./styles";
export function ExploreBookCard() {
  return (
    <ExploreBookCardContainer>
      <Image src="/books/domain-driven-design.png" />

      <div>
        <strong>A revolução dos bichos</strong>

        <p>George Orwell</p>

        <RatingScore />
      </div>
    </ExploreBookCardContainer>
  );
}
