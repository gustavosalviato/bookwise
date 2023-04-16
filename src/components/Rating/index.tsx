import { Star } from "phosphor-react";
import { useState } from "react";
import { convertToObject } from "typescript";

interface RatingProps {
  size: number;
  rating: number;
  // color?: "filled" | "unfilled";
  onRating: (rating: number) => void;
}

export function Rating({ rating, size, onRating }: RatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  console.log(hoverRating);

  function getColor(el: number): string {
    if (hoverRating >= el) {
      return "#8381D9";
    } else if (!hoverRating && rating >= el) {
      return "#8381D9";
    }

    return "#0E1116";
  }
  return (
    <div>
      {Array.from({ length: size }, (_, i) => i + 1).map((el) => {
        return (
          <Star
            weight="fill"
            size={28}
            key={el}
            cursor="pointer"
            onClick={() => onRating(el)}
            onMouseEnter={() => setHoverRating(el)}
            onMouseLeave={() => setHoverRating(0)}
            color={getColor(el)}
          />
        );
      })}
    </div>
  );
}
