import { styled } from "../../styles";

export const SidebarContainer = styled("aside", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "23.2rem",
  width: "100%",
  borderRadius: "12px",
  background: `url(./sidebar-bg.png)`,
  margin: "2rem 1.6rem",
  paddingTop: "4.8rem",

  "> div": {
    display: "flex",
    gap: "0.8rem",
    justifyContent: "center",
    alignItems: "center",

    strong: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },

  "> button": {
    marginTop: "auto",
    marginBottom: "2.4rem",
  },
});

export const NavContainer = styled("nav", {
  display: "flex",
  flexDirection: "column",
  marginTop: "7.2rem",
  gap: "2.4rem",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
  },
});
