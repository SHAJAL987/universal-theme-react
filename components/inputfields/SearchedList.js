import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

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
      id="id"
      size={size}
      onChange={(e, value) => onChange(convertToDefaultPara(name, value))}
      options={option}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          {...(error && { error: true, helperText: error })}
          {...others}
        />
      )}
      getOptionLabel={(option) => `${option.label}`}
    />
  );
};
export default SearchedList;
