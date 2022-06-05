import {
    Autocomplete,
    TextField,
  } from "@mui/material";
  import React from "react";
  
  const SearchedList = (props) => {
    const { name, label, variant, value, onChange, option,error=null, size,...others } =
      props;
    return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      size={size}
      onChange={onChange}
      name={name}
      value={value}
      renderInput={(params) => <TextField {...params} label={label} />}
      {...others}
      {...(error && {error:true, helperText:error})}
    />
    );
  };
  export default SearchedList;
  