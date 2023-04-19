import Image from "next/image";
import { RatingScore } from "../RatingScore/styles";
import { BookCardContainer, CardBody } from "./styles";
import { IBook } from "@/@types/IBooks";

interface BookCarProps {
  book: IBook;
}

export function BookCard({ book }: BookCarProps) {
  return (
    <BookCardContainer>
      <Image src={book?.cover_url} alt={book?.name} width={64} height={94} />

      <CardBody>
        {book?.name.length > 20 ? (
          <strong>{`${book.name.substring(0, 25)}...`}</strong>
        ) : (
          <strong>{book.name}</strong>
        )}

        <p>{book?.author}</p>

        <RatingScore rating={book?.ratings[0]?.rate} />
      </CardBody>
    </BookCardContainer>
  );
}
