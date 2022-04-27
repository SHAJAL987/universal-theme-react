import { FormControl,FormControlLabel, Checkbox as MuiCheckBox } from '@mui/material';
import React from 'react'

const Checkbox = (props) => {

  const {name, label, color, value, onChange,...others} = props;

  const convertToDefaultPara = (name, value) =>({
    target: {
      name, value
    }
  })

  return (
    <FormControl>
      <FormControlLabel 
        control={<MuiCheckBox 
          name={name}
          color={color}
          checked={value}
          onChange={e => onChange(convertToDefaultPara(name,e.target.checked))}
          {...others}
        />}
        label={label}
      />
    </FormControl>
  )
}

export default Checkbox