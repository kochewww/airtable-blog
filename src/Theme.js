import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h4: "h1",
        subtitle1: "span",
      },
    },
  },
});
