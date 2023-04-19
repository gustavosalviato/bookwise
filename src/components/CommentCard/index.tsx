import Image from "next/image";
import { RatingScore } from "../RatingScore/styles";
import moment from "moment";
import {
  CommentCardContainer,
  ProfileContainer,
  AvatarContainer,
  CardBody,
  BodyContent,
} from "./styles";
import { useState } from "react";

interface IRating {
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
    image: string;
  };
}

interface CommentCardProps {
  rating: IRating;
}

export function CommentCard({ rating }: CommentCardProps) {
  const [readMore, setReadMore] = useState(false);
  return (
    <CommentCardContainer>
      <header>
        <AvatarContainer>
          <img src={rating.user.image} alt="" />

          <ProfileContainer>
            <h3>{rating.user.name}</h3>

            <p>{moment(new Date(rating.created_at)).fromNow()}</p>
          </ProfileContainer>
        </AvatarContainer>

        <RatingScore rating={rating.rate} />
      </header>

      <CardBody>
        <Image
          src={rating.book.cover_url}
          alt=""
          width={108}
          height={152}
          quality={100}
        />
        <BodyContent>
          <strong>{rating.book.name}</strong>
          <span>{rating.book.author}</span>

          <p>
            {readMore
              ? rating.description
              : `${rating.description.substring(0, 150)}...`}{" "}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "ver menos" : "ver mais"}
            </button>
          </p>
        </BodyContent>
      </CardBody>
    </CommentCardContainer>
  );
}
