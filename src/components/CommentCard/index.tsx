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
import { use, useState } from "react";
import Link from "next/link";
import { IRating } from "@/@types/IRatings";

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
            <Link href={`/profile/${rating.user.id}`}>
              <h3>{rating.user.name}</h3>
            </Link>

            <p>
              {moment(new Date(rating.created_at)).locale("pt-br").fromNow()}
            </p>
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
