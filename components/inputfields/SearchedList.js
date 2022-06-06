import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SearchedList = (props) => {
  const {
    name,
    label,
    variant,
    value,
    onChange,
    option,
    error = null,
    size,
    ...others
  } = props;
  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      size={size}
      //onChange={onChange}
      onChange={(e) =>
        onChange(convertToDefaultPara(name, e.target.value))
      }
      name={name}
      value={value}
      options={option}
      renderInput={(params) => <TextField {...params} label={label} />}
      {...others}
      {...(error && { error: true, helperText: error })}
    />
  );
};
export default SearchedList;
