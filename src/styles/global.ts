import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  html: {
    fontSize: "62.5%",
    overflowX: 'hidden'
  },

  body: {
    backgroundColor: "$gray800",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Nunito, sans-serif",
    fontWeight: 400,
    fontSize: "1.6rem",
  },

  button: {
    cursor: "pointer",
  },
});
