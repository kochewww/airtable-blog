import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import { IconWrapper } from "../components/Styled";
export default (props) => (
  <IconWrapper>
    <FaceIcon fontSize="inherit" />
    <span> {props.name} </span>
  </IconWrapper>
);
