import React from "react";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const PaperBody = styled(Paper)({
  backgroundColor:'#e3f2fd',
  borderRadius:'5px'
})
const PageHeaderDiv = styled('div')({
  padding:theme.spacing(1),
  display:'flex',
  marginBottom:theme.spacing(2) 
})
const CardBody = styled(Card)({
  display:'inline-block',
  padding:theme.spacing(1.6),
  color:'#3c44b1'
})
const HeaderDesc = styled('div')({
  paddingLeft: theme.spacing(2)
})

const PageHeader = (props) => {
  const { title, subTitle, icon } = props;
  return (
    <PaperBody elevation={0} square>
      <PageHeaderDiv>
        <CardBody>{icon}</CardBody>
        <HeaderDesc>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle3" component="div">
            {subTitle}
          </Typography>
        </HeaderDesc>
      </PageHeaderDiv>
    </PaperBody>
  );
};

export default PageHeader;
