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
export function SidePanelModal() {
  const [showCommentArea, setShowCommentArea] = useState(false);
  const [rating, setRating] = useState(0);
  const IsSignIn = true;

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
              <Image
                src="/books/o-hobbit.png"
                alt=""
                width={170}
                height={240}
              />

              <DetailContent>
                <Title>
                  14 Hábitos de Desenvolvedores Altamente Produtivos
                </Title>
                <p>Zeno Rocha</p>

                <RatingSection>
                  <RatingScore />
                  <p>3 avaliações</p>
                </RatingSection>
              </DetailContent>
            </BookInfo>

            <Divider />

            <About>
              <AboutSection>
                <BookmarkSimple size={24} color="#50B2C0" />

                <div>
                  <p>Categoria</p>

                  <strong>Computação, educação</strong>
                </div>
              </AboutSection>

              <AboutSection>
                <BookOpen size={24} color="#50B2C0" />

                <div>
                  <p>Páginas</p>

                  <strong>160</strong>
                </div>
              </AboutSection>
            </About>
          </BookDetail>

          <CommentsSection>
            <header>
              <p>Avaliações</p>

              <Dialog.Root>
                {IsSignIn ? (
                  <button onClick={() => setShowCommentArea(true)}>
                    Outro botão
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
                    <img src="https://github.com/gustavosalviato.png" alt="" />

                    <strong>Cristofer Rosser</strong>
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
            <CommentItem>
              <header>
                <ProfileInfo>
                  <ProfileImage src="https://github.com/gustavosalviato.png" />
                  <div>
                    <strong>Brandon Botosh</strong>
                    <p>Há 2 dias</p>
                  </div>
                </ProfileInfo>
                <RatingScore />
              </header>

              <p className="comment">
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                lectus leo. Sit porta eget nec vitae sit vulputate eget
              </p>
            </CommentItem>
          </CommentsSection>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
}
