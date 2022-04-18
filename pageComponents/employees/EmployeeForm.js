import styled from '@emotion/styled';
import { Grid, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React, {useState, useEffect} from 'react'

const theme = createTheme();

const Form = styled('form')({
    '& .MuiFormControl-root':{
        width: '80%',
        margin:theme.spacing(1),
    },
})

const initialValues = {
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'',
    department:'',
    hideDate: new Date(),
    isPermanent: false
}

const EmployeeForm = () => {

    const [values, setValues] = useState(initialValues);

    const handleInputchange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
  return (

    <Form>
        <Grid container>
            <Grid item xs={6}>
                <TextField 
                    variant='outlined'
                    label='Full Name'
                    size='small'
                    name='fullName'
                    value={values.fullName}
                    onChange={handleInputchange}
                />
                <TextField 
                    variant='outlined'
                    label='Email'
                    size='small'
                    name='email'
                    value={values.email}
                    onChange={handleInputchange}
                />
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </Grid>
    </Form>
  )
}

export default EmployeeForm