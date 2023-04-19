import { LastReadingsContainer } from "./styles";
import { CaretRight } from "phosphor-react";
import { LastReadBookCard } from "../LastReadBookCard";
import { IRating } from "@/@types/IRatings";
import Link from "next/link";
import { useSession } from "next-auth/react";
interface LastReadingsProps {
  ratings: IRating[];
}
export function LastReadings({ ratings }: LastReadingsProps) {
  const session = useSession();
  return (
    <LastReadingsContainer>
      <header>
        <p>Sua última leitura</p>

        <Link href={`/profile/${session.data?.user.id}`}>
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
