import React from "react";
import { TextField } from "@mui/material";

const InputTextField = (props) => {
  const { name, label, size, variant, value, onChange } = props;
  return (
    <TextField
      variant={variant}
      label={label}
      size={size}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputTextField;
