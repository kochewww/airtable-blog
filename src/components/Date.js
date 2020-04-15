import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import React from "react";
import { IconWrapper } from "../components/Styled";

export default (props) => (
  <IconWrapper>
    <CalendarTodayIcon fontSize="inherit" />
    <span>{props.date}</span>
  </IconWrapper>
);
