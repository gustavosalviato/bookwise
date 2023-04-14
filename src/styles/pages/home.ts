import { styled } from "..";

export const HomeContainer = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
});

export const MainContainer = styled("main", {
  maxWidth: "60.8rem",
  width: "100%",
  marginLeft: "9.6rem",
  marginTop: "7.2rem",

  "> span": {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    fontSize: "2.4rem",
    fontWeight: "bold",

    svg: {
      color: "$green100",
    },
  },

  "> p": {
    fontSize: "1.4rem",
    marginTop: "4rem",
  },
});

export const MyBooksContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  marginTop: "1.6rem",
  overflowY: "hidden",
});
