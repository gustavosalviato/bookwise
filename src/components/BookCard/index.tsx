import Image from "next/image";
import { RatingScore } from "../RatingScore/styles";
import { BookCardContainer, CardBody } from "./styles";

interface IBook {
  id: string;
  name: string;
  author: string;
  cover_url: string;
  ratings: Array<{
    id: string;
    rate: number;
  }>;
}

interface BookCarProps {
  book: IBook;
}

export function BookCard({ book }: BookCarProps) {
  return (
    <BookCardContainer>
      <Image src={book?.cover_url} alt={book?.name} width={64} height={94} />

      <CardBody>
        <strong>{book?.name}</strong>
        <p>{book?.author}</p>

        <RatingScore rating={book?.ratings[0]?.rate} />
      </CardBody>
    </BookCardContainer>
  );
}
