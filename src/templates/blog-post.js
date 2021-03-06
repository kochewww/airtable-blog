import React from "react";
import { graphql, Link } from "gatsby";
import { Typography, Box, Chip } from "@material-ui/core";
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
  const title = post.title;
  const date = post.date;
  const imageUrl = post.Image[0].url;
  const html = post.markdownPost.childMarkdownRemark.html;
  const authorName = post.author.map(({ data }) => data.name);
  const tags = post.tags.map((tag) => (
    <Box key={tag} display="inline-block" mt={2} mr={1}>
      <Link to={`tags/${tag}`}>
        <Chip label={tag} />
      </Link>
    </Box>
  ));

  return (
    <Layout>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography display="inline" color="secondary" variant="h4">
          {title}
        </Typography>

        <Date date={date} />
      </Box>
      <Picture url={imageUrl} />
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />

      <Box diplay="inline">
        <Author name={authorName}></Author>
        <a href={`https://github.com/${post.author[0].data.github}`}>
          <GitHubIcon fontSize="inherit"></GitHubIcon>
          GitHub
        </a>
      </Box>

      {tags}
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
