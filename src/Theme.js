import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: "inherit",
        verticalAlign: "middle",
        paddingBottom: "3px",
      },
    },
  },
  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h4: "h1",
        subtitle1: "span",
      },
    },
  },
});
