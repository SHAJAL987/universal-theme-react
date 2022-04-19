import {
  Grid,
} from "@mui/material";
import React from "react";
import { formAction, Form } from "../../components/regions/Form";
import Controls from "../../components/inputfields/Controls";

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

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "others", title: "Others" },
];

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
            label="Gender"
            value={values.gender}
            onChange={handleInputchange}
            items={genderItems}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
