import { LastReadingsContainer } from "./styles";
import { CaretRight } from "phosphor-react";
import { LastReadBookCard } from "../LastReadBookCard";
export function LastReadings() {
  return (
    <LastReadingsContainer>
      <header>
        <p>Sua última leitura</p>

        <button>
          Ver todos
          <CaretRight size={16} weight="bold" />
        </button>
      </header>

      <LastReadBookCard />
    </LastReadingsContainer>
  );
}
