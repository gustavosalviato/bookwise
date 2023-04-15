import { ExploreBookCard } from "@/components/ExploreBookCard";
import { InputText } from "@/components/InputText";
import { Sidebar } from "@/components/Siderbar";
import {
  CategoriesSection,
  ExploreContainer,
  ExploreContent,
  ExploreScreenShape,
  PageTitle,
  CategoryItem,
  ExploreBookGrid,
} from "@/styles/pages/explore";
import { Binoculars } from "phosphor-react";
export default function Explore() {
  return (
    <ExploreContainer>
      <ExploreScreenShape>
        <Sidebar />

        <ExploreContent>
          <PageTitle>
            <span>
              <Binoculars size={32} color="#50B2C0" />
              Explorar
            </span>

            <form>
              <InputText />
            </form>
          </PageTitle>
          <CategoriesSection>
            <CategoryItem>Tudo</CategoryItem>
            <CategoryItem>Computação</CategoryItem>
            <CategoryItem>Educação</CategoryItem>
            <CategoryItem>Fantasia</CategoryItem>
            <CategoryItem>Tudo</CategoryItem>
          </CategoriesSection>
          <ExploreBookGrid>
            <ExploreBookCard />
            <ExploreBookCard />
            <ExploreBookCard />
            <ExploreBookCard />
            <ExploreBookCard />
            <ExploreBookCard />
          </ExploreBookGrid>
        </ExploreContent>
      </ExploreScreenShape>
    </ExploreContainer>
  );
}
