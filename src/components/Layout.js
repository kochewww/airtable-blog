import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { theme } from "../Theme";
import { Helmet } from "react-helmet";
export default ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Container>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Container>
  </>
);
