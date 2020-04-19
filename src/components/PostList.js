import React from "react";
import { Link } from "gatsby";
import TimerIcon from "@material-ui/icons/Timer";
import Author from "../components/Author";
import Date from "../components/Date";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default (props) => {
  return (
    <>
      {props.data.map(({ node }) => (
        <Box mb={2} key={node.id}>
          <Typography variant="h4">
            <Link style={{ textDecoration: "none" }} to={`/${node.data.slug}`}>
              {node.data.title}
            </Link>
          </Typography>

          <Typography variant="subtitle1">
            {node.data.markdownPost.childMarkdownRemark.excerpt}
          </Typography>

          <br></br>

          <Typography variant="caption">
            <Box mr={1} display="inline">
              <Date date={node.data.date} />
            </Box>

            <Author name={node.data.author[0].data.name} />

            <TimerIcon />
            {`${node.data.markdownPost.childMarkdownRemark.timeToRead}min`}
          </Typography>
        </Box>
      ))}
    </>
  );
};