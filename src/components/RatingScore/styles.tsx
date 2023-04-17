import { Star, StarHalf } from "phosphor-react";
import { RatingContainer } from "./style";

interface RatingScoreProps {
  rating: number ;
  size?: number;
}

export function RatingScore({ rating, size = 5 }: RatingScoreProps) {
  function getColor(index: number): string {
    if (rating >= index) {
      return "#8381D9";
    }
    return "#0E1116";
  }
  return (
    <RatingContainer>
      {Array.from({ length: size })
        .map((_, i) => i + 1)
        .map((el) => {
          return <Star key={el} color={getColor(el)} weight="fill" size={18} />;
        })}
    </RatingContainer>
  );
}
