import { styled } from "../../styles";

export const ContainerButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
  color: "$gray200",
  transition: "all 300ms ease-in-out",

  "&:hover": {
    filter: "brightness(0.8)",
  },

  svg: {
    color: "$green100",
  },
});
