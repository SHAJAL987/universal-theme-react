import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react'

const Password = (props) => {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { name, label, size, variant, value, error=null, onChange, ...others } = props;
  return (
    <FormControl variant={variant}>
      <InputLabel>Password</InputLabel>
      <OutlinedInput 
        type={values.showPassword ? 'text' : 'password'}
      />
    </FormControl>
  )
}

export default Password