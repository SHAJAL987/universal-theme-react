import { Paper, TableContainer } from '@mui/material'
import React from 'react'

export default function classicReports(records, headCells) {

  const TblContainer = props =>(
    <TableContainer component={Paper}>
      {props.children}
    </TableContainer>
  )
  return {
    TblContainer
  }
}
