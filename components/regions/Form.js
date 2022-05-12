import styled from "@emotion/styled";
import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";

//--------- From Functionalities ---------- >>

export function formAction(initialValues, validationOnchage = false, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputchange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
      if(validationOnchage){
        validate({[name]:value})
      }
    };

    const clearForm = (e) =>{
      setValues(initialValues)
      setErrors({})
    }
  
    return {
      values,
      setValues,
      errors,
      setErrors,
      handleInputchange,
      clearForm
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


