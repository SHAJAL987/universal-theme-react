import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/others/uiTools/PageHeader";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Standard from "../../components/regions/Standard";

const Employee = () => {
  return (
    <>
      <PageHeader
        title="Universal Header"
        subTitle="From Design With Validation"
        icon={<AccountBalanceIcon />}
      />
      <Standard title="Universal Region Header">
        <EmployeeForm />
      </Standard>
    </>
  );
};

export default Employee;
