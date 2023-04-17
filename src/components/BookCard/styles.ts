import { styled } from "../../styles";

export const BookCardContainer = styled("div", {
  display: "flex",
  gap: "2rem",
  backgroundColor: "$gray700",
  padding: "2rem",
  borderRadius: "8px",
  marginTop: "1.6rem",

  "& + &": {
    marginTop: "1.2rem",
  },
});

export const CardBody = styled("div", {
  "> strong": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 4,
    lineHeight: "$short",
  },

  "> p": {
    lineHeight: "$base",
    fontSize: "1.4rem",
    color: "$gray400",
  },

  "> div": {
    marginTop: "3.2rem",
  },
});
