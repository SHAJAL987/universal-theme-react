import React from "react";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import Header from "../others/uiTools/Header";

const theme = createTheme();

const MuiPaper = styled(Paper)({
  padding:theme.spacing(2),
  marginBottom:theme.spacing(2)
})

const Standard = (props) => {
  const {title} = props
  return (
    <MuiPaper elevation={3} >
      <Header>
        {title}
      </Header>
      {props.children}
    </MuiPaper>
  );
};

export default Standard;
