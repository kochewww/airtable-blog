import React from "react";
import { ContextProvider } from "./src/components/Context";
import Layout from "./src/components/Layout";
export const wrapRootElement = ({ element }) => (
  <Layout>
    <ContextProvider>{element}</ContextProvider>
  </Layout>
);
