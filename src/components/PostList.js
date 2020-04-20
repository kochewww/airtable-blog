import React from "react";
import { Link } from "gatsby";
import TimerIcon from "@material-ui/icons/Timer";
import Author from "../components/Author";
import Date from "../components/Date";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default (props) => (
  <>
    {props.data.map(({ node }) => {
      const data = node.data;
      const title = data.title;
      const excerpt = data.markdownPost.childMarkdownRemark.excerpt;
      const date = data.date;
      const authorName = data.author.map(({ data }) => data.name);
      const timeToRead = node.data.markdownPost.childMarkdownRemark.timeToRead;
      return (
        <Box mb={2} key={node.title}>
          <Typography variant="h4">
            <Link style={{ textDecoration: "none" }} to={`/${node.data.slug}`}>
              {title}
            </Link>
          </Typography>
          {excerpt}
          <Typography variant="subtitle1"></Typography>

          <br></br>

          <Typography variant="caption">
            <Box mr={1} display="inline">
              <Date date={date} />
            </Box>

            <Author name={authorName} />

            <TimerIcon />
            {`${timeToRead}min`}
          </Typography>
        </Box>
      );
    })}
  </>
);
