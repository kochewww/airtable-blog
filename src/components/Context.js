import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
const Context = React.createContext();
function ContextProvider({ children }) {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allAirtableblog {
          edges {
            node {
              data {
                slug
                tags
                category
                title
                author {
                  data {
                    name
                  }
                }
                markdownPost {
                  childMarkdownRemark {
                    excerpt
                    timeToRead
                  }
                }
                date
              }
            }
          }
        }
      }
    `
  );
  const listData = data.allAirtableblog.edges;
  return (
    <Context.Provider
      value={{
        listData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
