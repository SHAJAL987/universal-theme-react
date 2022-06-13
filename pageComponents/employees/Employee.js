import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/others/uiTools/PageHeader";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Standard from "../../components/regions/Standard";
import ReportControls from "../../components/reports/ReportControls";
import classicReports from "../../components/reports/ClassicReports";
import {getAllEmployees} from "../../pageCompServices/employees/employeeService";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Employee = () => {

  const [records, setRecords] = useState(getAllEmployees());
  const {TblContainer} = classicReports();

  return (
    <>
      <Standard title="Universal Region Header" headerHidden="No">
        {/* <EmployeeForm /> */}
        {/* <TblContainer> */}
          {/* <TableBody>
            {
              // records.map(item =>(
              //   <TableRow key={item.id}>
              //     <TableCell>{item.fullName}</TableCell>
              //     <TableCell>{item.email}</TableCell>
              //     <TableCell>{item.mobile}</TableCell>
              //   </TableRow>
              // ))
              records.map((item, i)=>(
                   <TableRow key={i}>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.email}</TableCell>
                </TableRow>
              ))
            }
          </TableBody> */}
        {/* </TblContainer> */}


        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.email}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Standard>
    </>
  );
};

export default Employee;
