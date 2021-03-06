import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
    <FormControl variant={variant} size={size}>
      <InputLabel  {...(error && {error:true, helperText:error})} >{label}</InputLabel>
      <OutlinedInput 
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={value}
        {...(error && {error:true, helperText:error})}
        {...others}
        onChange={onChange}
        name={name}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  )
}

export default Password