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
} from "./styles";

import Image from "next/image";

import { RatingScore } from "../RatingScore/styles";
import { BookmarkSimple, BookOpen, X } from "phosphor-react";
export function SidePanelModal() {
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

              <button>Avaliar</button>
            </header>

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
