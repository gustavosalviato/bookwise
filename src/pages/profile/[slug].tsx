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
import { GetStaticPaths, GetStaticProps } from "next";

interface IProfile {
  id: string;
  name: string;
  readed_books: number;
  total_readed_pages: number;
  ratings: Array<{
    id: string;
    rate: number;
    formattedDate: string;
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
            <BookCard>
              <p>Há 2 dias</p>
              <Card>
                <CardHeader>
                  <Image
                    src="/books/entendendo-algoritmos.png"
                    alt=""
                    width={98}
                    height={134}
                    quality={100}
                  />

                  <CardDetails>
                    <strong>Entendendo Algoritmos</strong>
                    <p>Aditya Bhargava</p>

                    {/* <RatingScore /> */}
                  </CardDetails>
                </CardHeader>
                <CardContent>
                  Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
                  vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae
                  fringilla ut et suspendisse enim suspendisse vitae. Leo non
                  eget lacus sollicitudin tristique pretium quam. Mollis et
                  luctus amet sed convallis varius massa sagittis. Proin sed
                  proin at leo quis ac sem. Nam donec accumsan curabitur amet
                  tortor quam sit. Bibendum enim sit dui lorem urna amet elit
                  rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet
                  integer pellentesque.
                </CardContent>
              </Card>
            </BookCard>
          </MainSection>
        </PageTitleSection>

        <AnalyticsSection>
          <CardAnalytics>
            <img
              src="https://github.com/gustavosalviato.png"
              alt=""
              width={72}
              height={72}
            />
            <strong>Cristofer Rosser</strong>
            <p>membro desde 2019</p>

            <Divider />

            <AnalyticsDetails>
              <BookOpen size={32} color="#50B2C0" />
              <div>
                <strong>3853</strong>
                <p>Páginas lidas</p>
              </div>
            </AnalyticsDetails>

            <AnalyticsDetails>
              <BookOpen size={32} color="#50B2C0" />
              <div>
                <strong>3853</strong>
                <p>Páginas lidas</p>
              </div>
            </AnalyticsDetails>
          </CardAnalytics>
        </AnalyticsSection>
      </ProfileScreenShape>
    </ProfileContainer>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const response = await api.get(`/users/ratings/${slug}`);

  return {
    props: {
      profileDetails: response.data,
    },
    revalidate: 1 * 60 * 60 * 24,
  };
};
