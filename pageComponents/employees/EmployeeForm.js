import {
  Grid,
} from "@mui/material";
import React from "react";
import { formAction, Form } from "../../components/regions/Form";
import Controls from "../../components/inputfields/Controls";
import * as employeeService from "../../pageCompServices/employees/employeeService"

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
  const { values, setValues, handleInputchange } = formAction(initialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.TextField
            variant="outlined"
            label="Full Name"
            size="small"
            name="fullName"
            value={values.fullName}
            onChange={handleInputchange}
          />
          <Controls.TextField
            variant="outlined"
            label="Email"
            size="small"
            name="email"
            value={values.email}
            onChange={handleInputchange}
          />
        </Grid>
        <Grid item xs={6}>
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
          
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
