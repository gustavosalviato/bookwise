import { Sidebar } from "@/components/Siderbar";
import {
  HomeContainer,
  MainContainer,
  MyBooksContainer,
  TrendingBooks,
  SectionTitle,
  HomeScreenShape,
} from "../styles/pages/home";
import { ChartLineUp } from "phosphor-react";
import { CommentCard } from "@/components/CommentCard";
import { CaretRight } from "phosphor-react";
import { BookCard } from "@/components/BookCard";

export default function Home() {
  return (
    <HomeContainer>
      <HomeScreenShape>
        <Sidebar />

        <MainContainer>
          <span>
            <ChartLineUp size={32} /> Início
          </span>

          <p>Avaliações mais recentes</p>

          <MyBooksContainer>
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </MyBooksContainer>
        </MainContainer>

        <TrendingBooks>
          <SectionTitle>
            <p>Livros populares</p>

            <button>
              Ver todos
              <CaretRight size={16} weight="bold" />
            </button>
          </SectionTitle>

          <BookCard />
          <BookCard />
          <BookCard />
        </TrendingBooks>
      </HomeScreenShape>
    </HomeContainer>
  );
}
