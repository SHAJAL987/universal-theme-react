import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';

const DatePicker = (props) => {
  const {name,label,value,onChange,inputFormat,...others} = props
  
  const convertToDefaultPara = (name, value) =>({
    target: {
      name, value
    }
  })

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker 
        name={name}
        label={label}
        inputFormat={inputFormat}
        value={value}
        onChange={date => onChange(convertToDefaultPara(name,date))}
        renderInput={(params) => <TextField {...params}  size="small"/>}
        {...others}
      />
    </LocalizationProvider>
  )
}

export default DatePicker