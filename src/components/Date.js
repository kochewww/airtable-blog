import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import React from "react";
import Box from "@material-ui/core/Box";

export default (props) => (
  <Box display="inline">
    <CalendarTodayIcon />
    {props.date}
  </Box>
);
