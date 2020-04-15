import React from "react";
import { graphql } from "gatsby";
import { Typography, Link } from "@material-ui/core";
import { Picture, Wrapper, IconWrapper } from "../components/Styled";
import Date from "../components/Date";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import Author from "../components/Author";
import Layout from "../components/Layout";
const DateWrapper = styled.div`
  margin-top: -25px;
  display: block;
  text-align: right;
`;
export default ({ data }) => {
  const post = data.allAirtableblog.edges[0].node.data;
  return (
    <Layout>
      <Typography color="secondary" variant="h4">
        {post.title}
      </Typography>

      <DateWrapper>
        <Date date={post.date} />
      </DateWrapper>

      <Picture url={post.Image[0].url} />
      <div
        dangerouslySetInnerHTML={{
          __html: post.markdownPost.childMarkdownRemark.html,
        }}
      />
      <Wrapper>
        <Author name={post.author[0].data.name}></Author>
      </Wrapper>
      <IconWrapper>
        <Link href={`https://github.com/${post.author[0].data.github}`}>
          <GitHubIcon fontSize="inherit"></GitHubIcon>
          <span>GitHub</span>
        </Link>
      </IconWrapper>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allAirtableblog(filter: { data: { slug: { eq: $slug } } }) {
      edges {
        node {
          data {
            slug
            markdownPost {
              childMarkdownRemark {
                html
              }
            }
            title
            Image {
              url
            }
            date
            author {
              data {
                github
                name
                blog
              }
            }
          }
        }
      }
    }
  }
`;
