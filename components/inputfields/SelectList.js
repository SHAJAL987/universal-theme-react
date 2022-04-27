import {
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";

const SelectList = (props) => {
  const { name, label, variant, value, onChange, option, size, helperText,...others } =
    props;
  return (
    <TextField
      select
      variant={variant}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      size={size}
      {...others}
    >
      <MenuItem value="">-- Select --</MenuItem>
      {option.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {item.title}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectList;
