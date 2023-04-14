import { getParsedCommandLineOfConfigFile } from "typescript";
import { styled } from "..";

export const HomeContainer = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
});

export const HomeScreenShape = styled("div", {
  display: "flex",
  maxWidth: "144rem",
  width: "100%",
  margin: "0 auto",
  padding: "0 1.6rem",
});

export const MainContainer = styled("main", {
  maxWidth: '60.8rem',
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

export const TrendingBooks = styled("section", {
  display: "flex",
  maxWidth: "32.4rem",
  width: "100%",
  flexDirection: "column",
  marginLeft: "6.4rem",
  paddingTop: "14.6rem",
  marginRight: "9.6rem",
});

export const SectionTitle = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "> p": {
    fontSize: "1.4rem",
  },

  "> button": {
    all: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",

    color: "$purple100",
    fontWeight: "bold",
    fontSize: " 1.4rem",
    cursor: "pointer",
    padding: "0.4rem 0.8rem",
    borderRadius: "8px",
    height: "3.4rem",
    transition: "all 300ms ease-in-out",

    "&:hover": {
      background: "rgba(131, 129, 217, 0.06)",
    },
  },
});
