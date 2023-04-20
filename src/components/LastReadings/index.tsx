import { LastReadingsContainer } from "./styles";
import { CaretRight } from "phosphor-react";
import { LastReadBookCard } from "../LastReadBookCard";
import { IRating } from "@/@types/IRatings";
import Link from "next/link";

interface LastReadingsProps {
  ratings: IRating[];
}
export function LastReadings({ ratings }: LastReadingsProps) {
  return (
    <LastReadingsContainer>
      <header>
        <p>Sua última leitura</p>

        <Link href={"/profile"}>
          Ver todos
          <CaretRight size={16} weight="bold" />
        </Link>
      </header>

      {ratings.map((rating) => {
        return <LastReadBookCard rating={rating} key={rating.id} />;
      })}
    </LastReadingsContainer>
  );
}
