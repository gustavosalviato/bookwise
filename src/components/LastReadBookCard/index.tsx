import { IRating } from "@/@types/IRatings";
import { RatingScore } from "../RatingScore/styles";
import {
  LastReadBookCardContainer,
  BookImage,
  LastReadBookCardBody,
  CardHeader,
} from "./styles";

interface LastReadBookCardProps {
  rating: IRating;
}

export function LastReadBookCard({ rating }: LastReadBookCardProps) {
  return (
    <LastReadBookCardContainer>
      <BookImage src={rating.book.cover_url} alt="" />
      <LastReadBookCardBody>
        <CardHeader>
          <p>Há 2 dias</p>

          <RatingScore rating={rating.rate} />
        </CardHeader>

        <strong>{rating.book.name}</strong>

        <span>{rating.book.author}</span>

        <p>{`${rating.book.summary.substring(0, 55)}...`}</p>
      </LastReadBookCardBody>
    </LastReadBookCardContainer>
  );
}
