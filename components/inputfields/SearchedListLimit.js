import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SearchedListLimit = (props) => {
  const {
    name,
    label,
    variant,
    value,
    onChange,
    option,
    limit,
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
      multiple
      limitTags={limit}
      id="multiple-limit-tags"
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
export default SearchedListLimit;
