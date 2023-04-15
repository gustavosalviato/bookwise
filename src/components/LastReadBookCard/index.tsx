import { RatingScore } from "../RatingScore/styles";
import {
  LastReadBookCardContainer,
  BookImage,
  LastReadBookCardBody,
  CardHeader,
} from "./styles";

export function LastReadBookCard() {
  return (
    <LastReadBookCardContainer>
      <BookImage src="/books/entendendo-algoritmos.png" alt="" />
      <LastReadBookCardBody>
        <CardHeader>
          <p>Há 2 dias</p>

          <RatingScore />
        </CardHeader>

        <strong>Entendendo Algoritmos</strong>

        <span>Aditya Bhargava</span>

        <p>Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu id vestibulum imperdiet a at imperdiet lectid vestibulum imperdiet a at imperdiet lectid vestibulum imperdiet a at imperdiet lectid vestibulum imperdiet a at imperdiet lect</p>
      </LastReadBookCardBody>
    </LastReadBookCardContainer>
  );
}
