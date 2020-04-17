import React from "react";
import { graphql } from "gatsby";
import { Typography, Link, Box, Chip } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Date from "../components/Date";
import GitHubIcon from "@material-ui/icons/GitHub";
import Author from "../components/Author";
import Layout from "../components/Layout";

const Picture = styled(({ url, ...other }) => <Box {...other} />)({
  backgroundImage: (props) => `url(${props.url})`,
  backgroundSize: "100%",
  backgroundPosition: "center",
  width: "100%",
  height: "15rem",
  marginTop: " 1rem",
});

export default ({ data }) => {
  const post = data.allAirtableblog.edges[0].node.data;
  return (
    <Layout>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography display="inline" color="secondary" variant="h4">
          {post.title}
        </Typography>

        <Date date={post.date} />
      </Box>
      <Picture url={post.Image[0].url} />
      <div
        dangerouslySetInnerHTML={{
          __html: post.markdownPost.childMarkdownRemark.html,
        }}
      />

      <Box diplay="inline">
        <Author name={post.author[0].data.name}></Author>
        <Link href={`https://github.com/${post.author[0].data.github}`}>
          <GitHubIcon fontSize="inherit"></GitHubIcon>
          GitHub
        </Link>
      </Box>

      {post.tags.map((tag) => (
        <Box key={tag} display="inline-block" mt={2} mr={1}>
          <Chip
            label={tag}
            component="a"
            href=""
            onClick={console.log("clicked")}
          />
        </Box>
      ))}
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
