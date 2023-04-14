import { Sidebar } from "@/components/Siderbar";
import {
  HomeContainer,
  MainContainer,
  MyBooksContainer,
} from "../styles/pages/home";
import { ChartLineUp } from "phosphor-react";
import { RatingScore } from "@/components/RatingScore/styles";
import { CommentCard } from "@/components/CommentCard";

export default function Home() {
  return (
    <HomeContainer>
      <Sidebar />

      <MainContainer>
        <span>
          <ChartLineUp size={32} /> Início
        </span>

        <p>Avaliações mais recentes</p>

        <MyBooksContainer>
          <CommentCard />
        </MyBooksContainer>
      </MainContainer>
    </HomeContainer>
  );
}
