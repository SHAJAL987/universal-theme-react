import React from 'react'
import { CardContent, createTheme } from "@mui/material"
import { Box } from '@mui/system'
import styled from '@emotion/styled'

const theme = createTheme();

const MuiCardContent = styled(CardContent)({
  backgroundColor: "#e8eaf6",
  borderRadius: 5,
  padding:5,
  marginBottom:15,
  color:'#666666'
})

const MuiBox = styled(Box)({
  display: "inline-block",
  mx: "2px",
  transform: "scale(0.8)",
  fontSize:'20px',
  boxShadow: 3
})

const Header = (props) => {
  return (
    <MuiCardContent>
        <MuiBox>
          {props.children}
        </MuiBox>
      </MuiCardContent>
  )
}

export default Header