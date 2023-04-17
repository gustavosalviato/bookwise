import { ExploreBookCard } from "@/components/ExploreBookCard";
import { InputText } from "@/components/InputText";
import { Sidebar } from "@/components/Siderbar";
import { api } from "@/libs/axios";
import {
  CategoriesSection,
  ExploreContainer,
  ExploreContent,
  ExploreScreenShape,
  PageTitle,
  CategoryItem,
  ExploreBookGrid,
} from "@/styles/pages/explore";
import { GetStaticProps } from "next";
import { Binoculars, Divide } from "phosphor-react";

interface ExploreProps {
  books: Array<{
    id: string;
    name: string;
    author: string;
    cover_url: string;
    ratings: Array<{
      id: string;
      rate: number;
    }>;
  }>;
}

export default function Explore({ books }: ExploreProps) {
  return (
    <ExploreContainer>
      <ExploreScreenShape>
        <Sidebar />

        <ExploreContent>
          <PageTitle>
            <span>
              <Binoculars size={32} color="#50B2C0" />
              Explorar
            </span>

            <form>
              <InputText />
            </form>
          </PageTitle>
          <CategoriesSection>
            <CategoryItem>Tudo</CategoryItem>
            <CategoryItem>Computação</CategoryItem>
            <CategoryItem>Educação</CategoryItem>
            <CategoryItem>Fantasia</CategoryItem>
            <CategoryItem>Tudo</CategoryItem>
          </CategoriesSection>
          <ExploreBookGrid>
            {books.map((book) => {
              return <ExploreBookCard book={book} key={book.id} />;
            })}
          </ExploreBookGrid>
        </ExploreContent>
      </ExploreScreenShape>
    </ExploreContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/books");

  return {
    props: {
      books: response.data.books,
    },
  };
};
