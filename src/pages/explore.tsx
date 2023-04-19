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
  DefaultCheckBox,
} from "@/styles/pages/explore";
import { GetStaticProps } from "next";
import { Binoculars } from "phosphor-react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { createFactory, useState } from "react";
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
    categories: Array<{
      category: {
        name: string;
      };
    }>;
  }>;
}

export default function Explore({ books }: ExploreProps) {
  const [categorySelected, setCategorySelected] = useState("");

  const filteredBooks = books.filter((book) => {
    return (
      book.categories.filter((category) => {
        return category.category.name === categorySelected;
      }).length > 0
    );
  });

  return (
    <ExploreContainer>
      <ExploreScreenShape>
        <Sidebar />

        <ExploreContent>
          <PageTitle>
            <span>
              <Binoculars size={32} color="#50B2C0" />
              Explorar {categorySelected}
            </span>

            <div>
              <InputText />
            </div>
          </PageTitle>
          <CategoriesSection>
            <RadioGroup.Item
              checked={categorySelected === ""}
              asChild
              value={""}
              onClick={() => setCategorySelected("")}
            >
              <DefaultCheckBox>Tudo</DefaultCheckBox>
            </RadioGroup.Item>

            {books.map((book) => {
              return (
                <div key={book.id} className="radio-container">
                  {book.categories.map((category) => (
                    <RadioGroup.Item
                      asChild
                      value={category.category.name}
                      key={category.category.name}
                      onClick={() =>
                        setCategorySelected(category.category.name)
                      }
                    >
                      <span>{category.category.name}</span>
                    </RadioGroup.Item>
                  ))}
                </div>
              );
            })}
          </CategoriesSection>
          <ExploreBookGrid>
            {!categorySelected &&
              books.map((book) => {
                return <ExploreBookCard book={book} key={book.id} />;
              })}

            {filteredBooks.map((book) => {
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
