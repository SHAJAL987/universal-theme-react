import React from "react";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import Header from "../others/uiTools/Header";

const theme = createTheme();

const MuiPaper = styled(Paper)({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
});

const Standard = (props) => {
  const { title, headerHidden } = props;
  return (
    <MuiPaper variant="outlined" elevation={0}>
      {headerHidden == "Yes" ? "":(<Header>{title}</Header>)}
      {props.children}
    </MuiPaper>
  );
};

export default Standard;
