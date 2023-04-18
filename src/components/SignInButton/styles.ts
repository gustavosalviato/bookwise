import { isBoxedPrimitive } from "util/types";
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

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },

  "&:not(:disabled):hover": {
    filter: "brightness(0.8)",
  },

  svg: {
    color: "$green100",
  },
});

export const ImageProfile = styled("img", {
  width: "3.2rem",
  height: "3.2rem",
  borderRadius: "999px",
  boxSizing: "initial",
  border: "2px solid",
  borderColor: "$purple200",
});
