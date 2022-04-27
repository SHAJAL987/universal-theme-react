import { Button, Stack } from '@mui/material'
import React from 'react'

const Danger = (props) => {
  const {text,size,variant,onClick,...others} = props
  return (
    <Stack spacing={2} direction='row'>
      <Button
      variant={variant || "contained"}
      size={size || "large"}
      color="error"
      onClick={onClick}
      {...others}
      >
        {text}
      </Button>
    </Stack>
  )
}

export default Danger