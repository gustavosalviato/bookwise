import { Sidebar } from "@/components/Siderbar";
import {
  ProfileContainer,
  ProfileScreenShape,
  PageTitleSection,
  PageTitle,
  MainSection,
  BookCard,
  Card,
  CardHeader,
  CardDetails,
  CardContent,
  AnalyticsSection,
  CardAnalytics,
  Divider,
  AnalyticsDetails,
} from "../../styles/pages/profile";
import Image from "next/image";
import { User } from "phosphor-react";
import { InputText } from "@/components/InputText";
import { BookOpen } from "phosphor-react";
import { api } from "@/libs/axios";
import { GetServerSideProps } from "next";
import { RatingScore } from "@/components/RatingScore/styles";
import { Books, UserList, BookmarkSimple } from "phosphor-react";
import { getSession } from "next-auth/react";
interface IProfile {
  name: string;
  image: string;
  readed_books: number;
  total_readed_pages: number;
  ratings: Array<{
    id: string;
    rate: number;
    formattedDate: string;
    categories: string[];
    book: {
      id: string;
      name: string;
      author: string;
      summary: string;
      cover_url: string;
      total_pages: number;
    };
  }>;
}

interface ProfileProps {
  profileDetails: IProfile;
}
export default function Profile({ profileDetails }: ProfileProps) {
  const { name, ratings, readed_books, total_readed_pages, image } =
    profileDetails;
  return (
    <ProfileContainer>
      <ProfileScreenShape>
        <Sidebar />
        <PageTitleSection>
          <PageTitle>
            <User size={32} />
            Perfil
          </PageTitle>

          <InputText />

          <MainSection>
            {ratings.map((rating) => (
              <BookCard key={rating.id}>
                <p>{rating.formattedDate}</p>
                <Card>
                  <CardHeader>
                    <Image
                      src={rating.book.cover_url}
                      alt=""
                      width={98}
                      height={134}
                      quality={100}
                    />

                    <CardDetails>
                      <strong>{rating.book.name}</strong>
                      <p>{rating.book.author}</p>

                      <RatingScore rating={rating.rate} />
                    </CardDetails>
                  </CardHeader>
                  <CardContent>{rating.book.summary}</CardContent>
                </Card>
              </BookCard>
            ))}
          </MainSection>
        </PageTitleSection>

        <AnalyticsSection>
          <CardAnalytics>
            <img src={image} alt="" width={72} height={72} />
            <strong>{name}</strong>
            <p>membro desde 2019</p>

            <Divider />

            <AnalyticsDetails>
              <BookOpen size={32} color="#50B2C0" />
              <div>
                <strong>{total_readed_pages}</strong>
                <p>Páginas lidas</p>
              </div>
            </AnalyticsDetails>

            <AnalyticsDetails>
              <Books size={32} color="#50B2C0" />
              <div>
                <strong>{readed_books}</strong>
                <p>Livros avaliados</p>
              </div>
            </AnalyticsDetails>

            <AnalyticsDetails>
              <UserList size={32} color="#50B2C0" />
              <div>
                <strong>{ratings.length}</strong>
                <p>Autores lidos</p>
              </div>
            </AnalyticsDetails>

            <AnalyticsDetails>
              <BookmarkSimple size={32} color="#50B2C0" />
              <div>
                <strong>{ratings[0].categories[0]}</strong>
                <p>Categoria mais lida</p>
              </div>
            </AnalyticsDetails>
          </CardAnalytics>
        </AnalyticsSection>
      </ProfileScreenShape>
    </ProfileContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  const response = await api.get(`/users/ratings/${session?.user.id}`);

  return {
    props: {
      profileDetails: response.data,
    },
  };
};
