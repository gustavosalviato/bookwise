import Image from "next/image";
import { RatingScore } from "../RatingScore/styles";
import { BookCardContainer, CarBody } from "./styles";

export function BookCard() {
  return (
    <BookCardContainer>
      <Image
        src="/books/historias-extraordinarias.png"
        alt=""
        width={64}
        height={94}
      />

      <CarBody>
        <strong>A revolução dos bichos</strong>
        <p>George Orwell</p>

        <RatingScore />
      </CarBody>
    </BookCardContainer>
  );
}
