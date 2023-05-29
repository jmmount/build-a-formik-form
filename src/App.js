import { useFormik } from "formik";
import React from "react";
// TODO: import useFormik from formik library
function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
 
  onSubmit: values => {
    alert('login successful!')

  },
  validate: values =>{
    let errors = {};
    if(!values.email) errors.email = 'Required';
    if(!values.password) errors.password = "Required"
    return errors;
  }
});

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button id="submitBtn" type="submit">Submit</button>
      </form>      
    </div>
  );
}


export default App;
