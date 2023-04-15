import { styled } from "@/styles";

export const LastReadingsContainer = styled("div", {
  marginTop: "4rem",

  "> header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    all: "unset",
    padding: "0.4rem 0.8rem",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    color: "$purple100",
    fontWeight: "bold",
    fontSize: "1.4rem",
    borderRadius: "8px",
    height: "3.4rem",
    transition: "all 300ms ease-in-out",
    cursor: "pointer",

    "&:hover": {
      background: "rgba(131, 129, 217, 0.06)",
    },
  },
});
