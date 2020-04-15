import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import { theme } from "../Theme";
export default ({ children }) => (
  <Container>
    <Typography>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Typography>
  </Container>
);
