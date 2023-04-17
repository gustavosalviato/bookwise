import { styled } from "..";

export const ExploreContainer = styled("div", {
  width: " 100vw",
  height: "100vh",
});

export const ExploreScreenShape = styled("div", {
  display: "flex",
  maxWidth: "144rem",
  margin: "0 auto",
  padding: "0 1.6rem",
});

export const ExploreContent = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginLeft: "9.6rem",
  paddingTop: "7.2rem",
});

export const PageTitle = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",

  "> span": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.2rem",

    fontSize: "2.4rem",
    fontWeight: "bold",
  },

  "> form": {
    maxWidth: "42rem",
    width: "100%",
  },
});

export const CategoriesSection = styled("section", {
  marginTop: "5.4rem",
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
});

export const CategoryItem = styled("span", {
  borderRadius: "999px",
  padding: "0.4rem 1.6rem",
  color: "$purple100",
  border: "1px solid",
  borderColor: "$purple100",
});

export const ExploreBookGrid = styled("div", {
  display: "grid",
  marginTop: "4.8rem",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "2rem",
});
