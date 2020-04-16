import React from "react";
import { graphql } from "gatsby";
import { Typography, Link, Box } from "@material-ui/core";
import {
  Picture,
  Wrapper,
  IconWrapper,
  DateWrapper,
  StyledChip,
} from "../components/Styled";
import Date from "../components/Date";
import GitHubIcon from "@material-ui/icons/GitHub";
import Author from "../components/Author";
import Layout from "../components/Layout";

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

      <Box mt="1rem">
        {post.tags.map((tag) => (
          <StyledChip
            key={tag}
            label={tag}
            component="a"
            href=""
            onClick={console.log("clicked")}
          />
        ))}
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allAirtableblog(filter: { data: { slug: { eq: $slug } } }) {
      edges {
        node {
          data {
            tags
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
