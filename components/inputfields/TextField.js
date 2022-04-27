import React from "react";
import { TextField } from "@mui/material";

const InputTextField = (props) => {
  const { name, label, size, variant, value, error=null, onChange, ...others } = props;
  return (
    <TextField
      variant={variant}
      label={label}
      size={size}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && {error:true, helperText:error})}
      {...others}
    />
  );
};

export default InputTextField;
