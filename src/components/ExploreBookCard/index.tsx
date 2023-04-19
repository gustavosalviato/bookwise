import { RatingScore } from "../RatingScore/styles";
import { ExploreBookCardContainer, Image, Trigger } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { SidePanelModal } from "../SidePanelModal";
import { api } from "@/libs/axios";
import { useEffect, useState } from "react";

interface IBook {
  id: string;
  name: string;
  author: string;
  cover_url: string;
  ratings: Array<{
    id: string;
    rate: number;
  }>;
}

interface ExploreBookCardProps {
  book: IBook;
}

interface BookDetails {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  categories: Array<{
    category: {
      name: string;
    };
  }>;
  ratings: Array<{
    rate: number;
    description: string;
    created_at: string;
  }>;
}

interface BookRatings {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  image: string;
  user: {
    id: string;
    image: string;
    name: string;
  };
}

export function ExploreBookCard({ book }: ExploreBookCardProps) {
  const [bookDetails, setBookDetails] = useState<BookDetails>(
    {} as BookDetails
  );

  const [bookRatings, setBookRatings] = useState<BookRatings[]>([]);
  async function fetchBook(id: string) {
    const response = await api.get(`/books/${id}`);

    setBookDetails(response.data.book);
  }

  useEffect(() => {
    async function getRatingsOnBook() {
      const response = await api.get(`/ratings/${bookDetails.id}`);
      setBookRatings(response.data.booksRatings);
    }
    getRatingsOnBook();
  }, [bookDetails.id]);

  async function handleOnRegister(data: BookRatings) {
    setBookRatings((prevState) => [...prevState, data]);
  }

  return (
    <Dialog.Root>
      <Trigger>
        <ExploreBookCardContainer onClick={() => fetchBook(book.id)}>
          <Image src={book.cover_url} alt="" />

          <div>
            <strong>{book.name}</strong>

            <p>{book.author}</p>

            <RatingScore rating={book.ratings[0]?.rate} />
          </div>
        </ExploreBookCardContainer>
      </Trigger>

      <SidePanelModal
        details={bookDetails}
        bookRatings={bookRatings}
        onRegister={handleOnRegister}
      />
    </Dialog.Root>
  );
}
