import React from "react";
import Employee from "../../pageComponents/employees/Employee";
import LandingLayout from "../../components/others/uiTools/LandingLayout";

const employees = () => {
  return (
    <>
      <LandingLayout>
        <Employee />
      </LandingLayout>
    </>
  );
};

export default employees;
