import React from "react";
import { graphql } from "gatsby";
import TimerIcon from "@material-ui/icons/Timer";
import Author from "../components/Author";
import Date from "../components/Date";
import { Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import {
  BlockWrapper,
  Wrapper,
  StyledLink,
  IconWrapper,
} from "../components/Styled";
export default ({ data }) => {
  return (
    <Layout>
      {data.allAirtableblog.edges.map(({ node }) => (
        <BlockWrapper key={node.id}>
          <Typography variant="h4">
            <StyledLink to={node.data.slug}>{node.data.title}</StyledLink>
          </Typography>

          <Typography variant="subtitle1">
            {node.data.markdownPost.childMarkdownRemark.excerpt}
          </Typography>

          <br></br>

          <Typography variant="caption">
            <Wrapper>
              <Date date={node.data.date} />
            </Wrapper>

            <Wrapper>
              <Author name={node.data.author[0].data.name} />
            </Wrapper>

            <Wrapper>
              <IconWrapper>
                <TimerIcon fontSize="inherit" />
                <span>
                  {`${node.data.markdownPost.childMarkdownRemark.timeToRead}min`}
                </span>
              </IconWrapper>
            </Wrapper>
          </Typography>
        </BlockWrapper>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allAirtableblog {
      edges {
        node {
          data {
            slug
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
`;
