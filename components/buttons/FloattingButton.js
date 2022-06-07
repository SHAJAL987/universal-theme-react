import { Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import React from "react";
import Box from '@mui/material/Box';

const FloattingButton = (props) => {
  const { text, size, variant, onClick, color,icon, ...others } = props;
  return (
    <Box sx={{ '& > :not(style)': { m: 0 } }}>
    <Fab
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      {...others}
    >
      {/* <NavigationIcon sx={{ mr: 1 }} /> */}
      {icon}
      {text}
    </Fab>
    </Box>
  );
};

export default FloattingButton;
