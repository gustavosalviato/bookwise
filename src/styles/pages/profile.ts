import { styled } from "@stitches/react";
import { getParsedCommandLineOfConfigFile } from "typescript";

export const ProfileContainer = styled("div", {
  height: "100vh",
  width: "100wv",
});

export const ProfileScreenShape = styled("div", {
  display: "flex",
  maxWidth: "144rem",
  width: "100%",
  padding: "0 1.6rem",
  margin: "0 auto",
});

export const PageTitleSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "9.6rem",
  paddingTop: "7.2rem",

  maxWidth: "62.4rem",
  width: "100%",

  "> div": {
    marginTop: "4rem",
  },
});

export const PageTitle = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",

  fontSize: "2.4rem",
  fontWeight: "bold",
  lineHeight: "$short",

  svg: {
    color: "$green100",
  },
});

export const MainSection = styled("main", {
  display: "flex",
  flexDirection: "column",
});

export const BookCard = styled("div", {
  "& + &": {
    marginTop: "2.4rem",
  },

  marginTop: "3.2rem",

  "> p": {
    fontSize: "1.4rem",
    color: "gray300",
  },
});

export const Card = styled("div", {
  marginTop: "0.8rem",
  backgroundColor: "$gray700",
  padding: "2.4rem",
  borderRadius: "6px",
});

export const CardHeader = styled("header", {
  display: "flex",
  gap: "2.4rem",
});

export const CardDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  "> strong": {
    fontSize: "1.8rem",
    lineHeight: "$short",
  },

  "> p": {
    fontSize: "1.4rem",
    color: "$gray400",
  },

  "> div": {
    marginTop: "auto",
  },
});

export const CardContent = styled("p", {
  marginTop: "2.4rem",
  textAlign: "justify",
  color: "$gray300",
  lineHeight: "$short",
});

export const AnalyticsSection = styled("section", {
  paddingTop: "14.6rem",
  marginLeft: "6.4rem",
});

export const CardAnalytics = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderLeft: "1px solid $gray600",
  padding: "0 5.6rem",

  img: {
    width: "7.2rem",
    height: "7.2rem",
    borderRadius: "999px",
    border: "1px solid $purple200",
    boxSizing: "initial",
    margin: "0 auto",
  },

  strong: {
    fontSize: "2rem",
    marginTop: "2rem",
    textAlign: " center",
    lineHeight: "$short",
  },

  p: {
    textAlign: "center",
    fontSize: "1.4rem",
    color: "$gray400",
  },
});

export const Divider = styled("div", {
  width: "3.2rem",
  height: "0.4rem",
  borderRadius: "999px",
  background: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
  margin: "3.2rem auto",
});

export const AnalyticsDetails = styled("div", {
  "& + &": {
    marginTop: "4rem",
  },

  display: "flex",
  gap: "2rem",
  alignItems: "center",

  strong: {
    lineHeight: "$short",
  },

  p: {
    fontSize: "1.4rem",
    color: "$gray300",
  },
});
