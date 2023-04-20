import { LastReadingsContainer } from "./styles";
import { CaretRight } from "phosphor-react";
import { LastReadBookCard } from "../LastReadBookCard";
import { IRating } from "@/@types/IRatings";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { api } from "@/libs/axios";
import { useEffect, useState } from "react";

export function LastReadings() {
  const [ratings, setRatings] = useState<IRating[]>([]);
  const session = useSession();

  async function getRatingByUserId() {
    try {
      const response = await api.get(`/users/ratings/${session.data?.user.id}`);
      setRatings(response.data.ratings);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRatingByUserId();
  }, []);
  return (
    <LastReadingsContainer>
      <header>
        <p>Sua última leitura</p>

        <Link href={"/profile"}>
          Ver todos
          <CaretRight size={16} weight="bold" />
        </Link>
      </header>

      {ratings.slice(0, 1).map((rating) => {
        return <LastReadBookCard rating={rating} key={rating.id} />;
      })}
    </LastReadingsContainer>
  );
}
