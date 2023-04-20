import { Sidebar } from "@/components/Siderbar";
import {
  HomeContainer,
  MainContainer,
  RatingsContainer,
  TrendingBooks,
  SectionTitle,
  HomeScreenShape,
} from "../styles/pages/home";
import { ChartLineUp } from "phosphor-react";
import { CommentCard } from "@/components/CommentCard";
import { CaretRight } from "phosphor-react";
import { BookCard } from "@/components/BookCard";
import { LastReadings } from "@/components/LastReadings";
import { GetStaticProps } from "next";
import { api } from "@/libs/axios";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { IRating } from "@/@types/IRatings";
import { IBook } from "@/@types/IBooks";

interface HomeProps {
  ratings: IRating[];
  books: IBook[];
}

export default function Home({ ratings, books }: HomeProps) {
  const session = useSession();
  return (
    <HomeContainer>
      <HomeScreenShape>
        <Sidebar />

        <MainContainer>
          <span>
            <ChartLineUp size={32} /> Início
          </span>

          {session.status === "authenticated" && <LastReadings />}

          <p>Avaliações mais recentes</p>

          <RatingsContainer>
            {ratings.map((rating) => {
              return <CommentCard key={rating.id} rating={rating} />;
            })}
          </RatingsContainer>
        </MainContainer>

        <TrendingBooks>
          <SectionTitle>
            <p>Livros populares</p>

            <Link href="/explore">
              Ver todos
              <CaretRight size={16} weight="bold" />
            </Link>
          </SectionTitle>

          {books.map((book) => {
            return <BookCard book={book} key={book.id} />;
          })}
        </TrendingBooks>
      </HomeScreenShape>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const ratingsResponse = await api.get("/ratings");
  const booksResponse = await api.get("/books");

  return {
    props: {
      ratings: ratingsResponse.data.ratings,
      books: booksResponse.data.books,
    },
    revalidate: 1 * 60 * 60 * 24,
  };
};
