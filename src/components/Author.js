import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import Box from "@material-ui/core/Box";
export default (props) => (
  <Box display="inline" mr={1}>
    <FaceIcon />
    {props.name}
  </Box>
);
