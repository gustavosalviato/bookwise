import { Star, StarHalf } from "phosphor-react";
import { RatingContainer } from "./style";

export function RatingScore() {
  return (
    <RatingContainer>
      <Star size={16} weight="fill" color="#8381D9" />
      <Star size={16} weight="fill" color="#8381D9" />
      <Star size={16} weight="fill" color="#8381D9" />
      <Star size={16} color="#8381D9" />
    </RatingContainer>
  );
}
