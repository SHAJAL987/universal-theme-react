import { Grid } from "@mui/material";
import React from "react";
import { formAction, Form } from "../../components/regions/Form";
import Controls from "../../components/inputfields/Controls";
import BtnControls from "../../components/buttons/BtnControls";
import * as employeeService from "../../pageCompServices/employees/employeeService";
import CachedIcon from "@mui/icons-material/Cached";
import SaveIcon from "@mui/icons-material/Save";
import { emailRegex, mobileRegex } from "../../utils/validation";
import { Box } from "@mui/system";

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
  password: "",
  bloodgroup: {},
  movieList: {},
  activeStatus: false,
};

const EmployeeForm = () => {
  /* Validation */
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues) {
      temp.fullName = fieldValues.fullName ? "" : "Full Name is Required.";
    }
    if ("email" in fieldValues) {
      temp.email =
        fieldValues.email.length === 0
          ? "Email is Required."
          : emailRegex.test(fieldValues.email) === false &&
            "Email is Not Valid.";
    }
    if ("mobile" in fieldValues) {
      temp.mobile =
        fieldValues.mobile.length === 0
          ? "Mobile No. is Required."
          : fieldValues.mobile.length != 11
          ? "Mobile Number Should be 11 Digits."
          : mobileRegex.test(fieldValues.mobile) === false &&
            "Provide Valid Mobile Number.";
    }
    if ("city" in fieldValues) {
      temp.city = fieldValues.city ? "" : "City is Required";
    }
    if ("department" in fieldValues) {
      temp.department =
        fieldValues.department.length != 0 ? "" : "Deparment is Required.";
    }
    if ("password" in fieldValues) {
      temp.password =
        fieldValues.password.length != 0 ? "" : "Password is Required.";
    }
    // if ("bloodgroup" in fieldValues){
    //   temp.bloodgroup =
    //     fieldValues.bloodgroup.length != 0 ? "" : "Blood Group is Required.";
    // }

    setErrors({
      ...temp,
    });

    if ((fieldValues = values)) {
      return Object.values(temp).every((x) => x == "");
    }
  };

  /*Form Action Handler*/
  const { values, setValues, errors, setErrors, handleInputchange, clearForm } =
    formAction(initialValues, true, validate);

  /* Form Events */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeService.insertEmployee(values);
      console.log(values);
    }
  };

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
            error={errors.fullName}
          />
          <Controls.TextField
            variant="outlined"
            label="Email"
            size="small"
            name="email"
            value={values.email}
            onChange={handleInputchange}
            error={errors.email}
          />
          <Controls.TextField
            variant="outlined"
            label="Mobile No."
            size="small"
            name="mobile"
            value={values.mobile}
            onChange={handleInputchange}
            error={errors.mobile}
          />
          <Controls.TextField
            variant="outlined"
            label="City"
            size="small"
            name="city"
            value={values.city}
            onChange={handleInputchange}
            error={errors.city}
          />
          <Controls.Password
            variant="outlined"
            label="Password"
            size="small"
            name="password"
            value={values.password}
            onChange={handleInputchange}
            error={errors.password}
          />
          <Controls.SearchedList
            name="bloodgroup"
            color="primary"
            label="Blood Group"
            size="small"
            value={values.bloodgroup}
            option={employeeService.booldGroup()}
            onChange={handleInputchange}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Controls.RadioGroup
            name="gender"
            // label="Gender"
            value={values.gender}
            onChange={handleInputchange}
            items={employeeService.genderItems()}
            error={errors.city}
          />
          <Controls.SelectList
            variant="outlined"
            name="department"
            label="Department"
            size="small"
            value={values.department}
            onChange={handleInputchange}
            option={employeeService.getDepartmentCollection()}
            error={errors.department}
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
          <Controls.Switchbtn
            name="activeStatus"
            color="primary"
            label="Active Status"
            value={values.activeStatus}
            onChange={handleInputchange}
          />
          <Controls.SearchedListLimit
            name="movieList"
            color="primary"
            label="Movie List"
            size="small"
            limit="3"
            value={values.movieList}
            option={employeeService.top100Films()}
            onChange={handleInputchange}
          />
          {/* <BtnControls.PrimaryButton
            variant="contained"
            size="small"
            text="Submit Form"
            type="submit"
            direction="row"
          /> */}
        </Grid>
        <Grid xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 0.5,
                width: 100,
              },
              justifyContent:'center',
              boxShadow:"2",
              mt:1,
              p: 1,
              // border: '1px dashed grey'
            }}
          >
            <BtnControls.FloattingButton
              variant="extended"
              size="small"
              text="Submit "
              color="primary"
              icon={<SaveIcon sx={{ mr: 1 }} />}
              type="submit"
            />
            <BtnControls.FloattingButton
              variant="extended"
              size="small"
              text="Clear "
              icon={<CachedIcon sx={{ mr: 1 }} />}
              onClick={clearForm}
            />
          </Box>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
