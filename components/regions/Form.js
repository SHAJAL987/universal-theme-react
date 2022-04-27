import styled from "@emotion/styled";
import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";

//--------- From Functionalities ---------- >>

export function formAction(initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputchange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    return {
      values,
      setValues,
      errors,
      setErrors,
      handleInputchange,
    };
}


//---------- From Component -------------- >>

const theme = createTheme();
const FormComponent = styled("form")({
  "& .MuiFormControl-root": {
    width: "80%",
    margin: theme.spacing(1),
  },
});

export function Form(props) {
    const {children, ...others} = props
    return(
        <FormComponent autoComplete="off" {...others}>
            {props.children}
        </FormComponent>
    )
}


