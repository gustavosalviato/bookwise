import { styled } from "../../styles";

export const ActiveLinkContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "4.2rem",
  position: "relative",

  "> a": {
    textDecoration: "none",
    color: "$gray400",

    fontSize: "1.6rem",
  },

  variants: {
    active: {
      true: {
        "> a": {
          color: "white",
          fontWeight: "bold",
        },

        "&::before": {
          content: "",
          position: "absolute",
          height: "2.4rem",
          width: "0.4rem",
          borderRadius: "999px",
          left: "-6rem",
          background: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
        },
      },
    },
  },
});
