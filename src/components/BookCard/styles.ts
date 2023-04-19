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
    width: '100%',
    lineHeight: "$short",
  },

  "> p": {
    lineHeight: "$base",
    fontSize: "1.4rem",
    color: "$gray400",
    marginBottom: '1.6rem',
  },

});
