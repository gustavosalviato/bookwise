import * as Dialog from "@radix-ui/react-dialog";
import {
  Overlay,
  Content,
  BookDetail,
  DetailContent,
  Title,
  RatingSection,
  BookInfo,
  Divider,
  About,
  AboutSection,
  CommentsSection,
  CommentItem,
  ProfileImage,
  ProfileInfo,
  CloseButton,
  UserCommentItem,
  UserInfo,
  TextArea,
  SectionActions,
} from "./styles";
import Image from "next/image";
import { RatingScore } from "../RatingScore/styles";
import { BookmarkSimple, BookOpen, Check, X } from "phosphor-react";
import { SignInModal } from "../SignInModal";
import { useState } from "react";
import { Rating } from "../Rating";
import { useSession } from "next-auth/react";

import moment from "moment";

interface BookRatings {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  user: {
    image: string;
    name: string;
  };
}

interface IDetails {
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

interface SidePanelModalProps {
  details: IDetails;
  bookRatings: BookRatings[];
}
export function SidePanelModal({ details, bookRatings }: SidePanelModalProps) {
  const [showCommentArea, setShowCommentArea] = useState(false);
  const [rating, setRating] = useState(0);

  const session = useSession();

  const lastRating = details?.ratings?.length > 0 ? details.ratings[0].rate : 0;

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Close asChild>
            <CloseButton>
              <X size={24} />
            </CloseButton>
          </Dialog.Close>

          <BookDetail>
            <BookInfo>
              <Image src={details?.cover_url} alt="" width={170} height={240} />

              <DetailContent>
                <Title>{details?.name}</Title>
                <p>{details?.author}</p>

                <RatingSection>
                  <RatingScore rating={lastRating} />
                  <p>{details?.ratings?.length} avaliações</p>
                </RatingSection>
              </DetailContent>
            </BookInfo>

            <Divider />

            <About>
              <AboutSection>
                <BookmarkSimple size={24} color="#50B2C0" />

                <div>
                  <p>Categoria</p>

                  <div>
                    {details.categories?.map((category) => {
                      return (
                        <strong key={category.category.name}>
                          {category.category.name}{" "}
                        </strong>
                      );
                    })}
                  </div>
                </div>
              </AboutSection>

              <AboutSection>
                <BookOpen size={24} color="#50B2C0" />

                <div>
                  <p>Páginas</p>

                  <strong>{details.total_pages}</strong>
                </div>
              </AboutSection>
            </About>
          </BookDetail>

          <CommentsSection>
            <header>
              <p>Avaliações</p>

              <Dialog.Root>
                {session.status === "authenticated" ? (
                  <button onClick={() => setShowCommentArea(true)}>
                    Avaliar
                  </button>
                ) : (
                  <Dialog.Trigger asChild>
                    <button>Avaliar</button>
                  </Dialog.Trigger>
                )}
                <SignInModal />
              </Dialog.Root>
            </header>
            {showCommentArea && (
              <UserCommentItem>
                <header>
                  <UserInfo>
                    <img src={session.data?.user?.image!} alt="" />

                    <strong>{session.data?.user?.name}</strong>
                  </UserInfo>

                  <Rating size={5} rating={rating} onRating={setRating} />
                </header>

                <TextArea placeholder="Escreva sua avaliação" />

                <SectionActions>
                  <button>
                    <X size={24} color="#8381D9" />
                  </button>
                  <button>
                    <Check size={24} color="#50B2C0" />
                  </button>
                </SectionActions>
              </UserCommentItem>
            )}
            {bookRatings?.map((bookRating) => {
              return (
                <CommentItem key={bookRating.id}>
                  <header>
                    <ProfileInfo>
                      <ProfileImage src={bookRating.user.image!} />
                      <div>
                        <strong>{bookRating.user.name}</strong>
                        <p>
                          {moment(new Date(bookRating.created_at))
                            .startOf("day")
                            .fromNow()}
                        </p>
                      </div>
                    </ProfileInfo>

                    <RatingScore rating={bookRating.rate} />
                  </header>

                  <p className="comment">{bookRating.description}</p>
                </CommentItem>
              );
            })}
          </CommentsSection>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
}
