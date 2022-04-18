import React, { useState } from "react";

// export default function Form(initialValues) {
//   const [values, setValues] = useState(initialValues);

//   const handleInputchange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   return {
//     values,
//     setValues,
//     handleInputchange,
//   };
// }


// export default function Form() {
//   return (
//     <div>Form</div>
//   )
// }

import React from 'react'

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

      const handleInputchange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
    
      return {
        values,
        setValues,
        handleInputchange,
      };
}


export default useForm

