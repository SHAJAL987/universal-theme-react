import React from "react";
import { TextField } from "@mui/material";

const TextArea = (props) => {
  const { name, label, size, variant, value, onChange,...others } = props;
  return (
    <TextField
      variant={variant}
      label={label}
      multiline
      size={size}
      name={name}
      value={value}
      onChange={onChange}
      {...others}
    />
  );
};

export default TextArea;
