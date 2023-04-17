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

interface HomeProps {
  ratings: Array<{
    id: string;
    rate: number;
    description: string;
    created_at: string;
    book: {
      name: string;
      author: string;
      cover_url: string;
    };
    user: {
      name: string;
      avatar_url: string;
    };
  }>;
}

export default function Home({ ratings }: HomeProps) {
  const isSignIn = false;
  return (
    <HomeContainer>
      <HomeScreenShape>
        <Sidebar />

        <MainContainer>
          <span>
            <ChartLineUp size={32} /> Início
          </span>

          {isSignIn && <LastReadings />}

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

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/ratings");

  return {
    props: {
      ratings: response.data.ratings,
    },
    revalidate: 1 * 60 * 60 * 24,
  };
};
