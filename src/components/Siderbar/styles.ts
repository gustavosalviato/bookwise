import { styled } from "../../styles";

export const SidebarContainer = styled("aside", {
  display: "flex",
  width: "100%",
  minHeight: `100vh`,
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "23.2rem",
  borderRadius: "12px",
  background: `url(./sidebar-bg.png)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  paddingTop: "4.8rem",
  marginTop: "2rem",

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
