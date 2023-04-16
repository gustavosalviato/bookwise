import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.75)",
});

export const Content = styled(Dialog.Content, {
  position: "fixed",
  maxWidth: "52rem",
  width: "100%",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  background: "$gray700",
  padding: "5.6rem 7.2rem",
  borderRadius: "6px",

  display: "flex",
  flexDirection: "column",

  ".login": {
    marginTop: "4rem",
    border: 0,
    backgroundColor: "$gray600",
    borderRadius: "6px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",

    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "$gray200",
    padding: "2rem 2.4rem",
    transition: "all 300ms ease-in-out",

    "& + &": {
      marginTop: "1.6rem",
    },

    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
});

export const Title = styled(Dialog.Title, {
  color: "$gray200",
  fontWeight: "bold",
  fontSize: "1.6rem",
  textAlign: "center",
});

export const CloseButton = styled("button", {
  position: "absolute",
  width: "2.4rem",
  height: "2.4rem",
  border: 0,

  backgroundColor: "transparent",
  justifyContent: "center",
  alignItems: "center",

  top: "2.4rem",
  right: "2.4rem",
  color: "$gray400",
  transition: "all 300ms ease-in-out",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
