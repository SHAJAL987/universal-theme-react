import {
  Grid,
} from "@mui/material";
import React from "react";
import { formAction, Form } from "../../components/regions/Form";
import Controls from "../../components/inputfields/Controls";
import BtnControls from "../../components/buttons/BtnControls";
import * as employeeService from "../../pageCompServices/employees/employeeService"
import {emailRegex ,mobileRegex} from "../../utils/validation"

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "",
  department: "",
  hideDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const { values, setValues, errors, setErrors, handleInputchange } = formAction(initialValues);

  const validation = () =>{
    let temp = {}
    temp.fullName = values.fullName?"":"Full Name is Required."
    // temp.email = values.email.length == 0 ? "Email is Required" : (emailRegex.test(values.email)) && "Email is Not Valid."
    temp.email = values.email.length === 0 ? "Email is Required" : emailRegex.test(values.email) === false && "Email is Not Valid."
    // temp.mobile = mobileRegex.test(values.mobile) || values.mobile.length > 11 ? "":"Not a Valid Mobile No."
    temp.mobile = values.mobile.length === 11 ? "":"Not a Valid Mobile No."
    temp.city = values.city?"":"City is Required"
    temp.department = values.department.length != 0 ? "":"Deparment is Required."

    setErrors({
      ...temp
    })

    return Object.values(temp).every(x => x == "")
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validation())
        alert('called.....');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6} md={6}>
          <Controls.TextField
            variant="outlined"
            label="Full Name"
            size="small"
            name="fullName"
            value={values.fullName}
            onChange={handleInputchange}
            error = {errors.fullName}
          />
          <Controls.TextField
            variant="outlined"
            label="Email"
            size="small"
            name="email"
            value={values.email}
            onChange={handleInputchange}
            error = {errors.email}
          />
          <Controls.TextField
            variant="outlined"
            label="Mobile No."
            size="small"
            name="mobile"
            value={values.mobile}
            onChange={handleInputchange}
            error = {errors.mobile}
          />
          <Controls.TextField
            variant="outlined"
            label="City"
            size="small"
            name="city"
            value={values.city}
            onChange={handleInputchange}
            error = {errors.city}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Controls.RadioGroup
            name="gender"
            // label="Gender"
            value={values.gender}
            onChange={handleInputchange}
            items={employeeService.genderItems()}
          />
          <Controls.SelectList 
            variant="outlined"
            name="department"
            label="Department"
            size="small"
            value={values.department}
            onChange={handleInputchange}
            option={employeeService.getDepartmentCollection()}
          />
          <Controls.DatePicker 
            name="hideDate"
            inputFormat="dd/MM/yyyy"
            label="Hire Date"
            value={values.hideDate}
            onChange={handleInputchange}
          />
          <Controls.Checkbox 
            name="isPermanent"
            color="primary"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputchange}
          />
          <BtnControls.PrimaryButton 
            variant="contained"
            size="small"
            text="Submit Form"
            type="submit"
            direction="row"
          />
          <BtnControls.WarningButton
            variant="contained"
            size="small"
            text="Clear"
            direction="row"
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
