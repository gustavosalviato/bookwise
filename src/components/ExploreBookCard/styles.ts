import { styled } from "@/styles";

export const ExploreBookCardContainer = styled("div", {
  display: "flex",
  gap: "1.2rem",
  padding: "1.6rem 2rem",
  backgroundColor: "$gray700",
  borderRadius: "8px",

  cursor: "pointer",

  "> div": {
    display: "flex",
    flexDirection: "column",
    lineHeight: "$short",

    "> p": {
      marginTop: "0.4rem",
      fontSize: "1.4rem",
      color: "$gray400",
    },

    div: {
      marginTop: "auto",
    },
  },
});

export const Image = styled("img", {
  width: "10.8rem",
  height: "15.2rem",
});
