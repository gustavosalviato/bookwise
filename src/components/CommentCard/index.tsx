import Image from "next/image";
import { RatingScore } from "../RatingScore/styles";
import {
  CommentCardContainer,
  ProfileContainer,
  AvatarContainer,
  CardBody,
  BodyContent,
} from "./styles";

export function CommentCard() {
  return (
    <CommentCardContainer>
      <header>
        <AvatarContainer>
          <img src="https://github.com/gustavosalviato.png" alt="" />

          <ProfileContainer>
            <h3>Jaxson Dias</h3>

            <p>Hoje</p>
          </ProfileContainer>
        </AvatarContainer>

        <RatingScore />
      </header>

      <CardBody>
        <Image
          src="/books/domain-driven-design.png"
          alt=""
          width={108}
          height={152}
          quality={100}
        />
        <BodyContent>
          <strong>O Hobbit</strong>
          <span>J.R.R Tolkien</span>

          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh Semper et sapien proin vitae nisi.
            Feugiat neque integer donec et Semper et sapien proin vitae nisi.
            Feugiat neque integer donec et aenean posuere amet ultrices. Cras
            fermentum id pulvinar varius leo a in. Amet libero pharetra nunc
            elementum fringilla velit ipsum. Sed vulputate massa velit nibh
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh Semper et sapien proin vitae nisi.
            Feugiat neque integer donec et
          </p>
        </BodyContent>
      </CardBody>
    </CommentCardContainer>
  );
}
