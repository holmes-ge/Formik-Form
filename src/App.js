import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    onSubmit: values =>{
        console.log('form:', values);
        if (!formik.errors.email && !formik.errors.password) window.alert("Login Succesful");
    },
    validate: values => {
        let errors = {};
        if (!values.email) errors.email = "Field Required";
        if (!values.password) errors.password = "Field Required";
        if (! (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) ) errors.email = "Username Should Be an Email";

        return errors;
    }
}); 

  return (
    <div>
      <p>
        Enter your email and password below:
      </p>
      <form onSubmit={formik.handleSubmit}>
      
        <div>Email</div>
        <input name='email' id='emailField' type='text' onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id='emailError' style={{color:'red'}}>{formik.errors.email}</div>: null}

        <div>Password</div>
        <input name='password' id='pswField' type='text' onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id='pswError' style={{color:'red'}}>{formik.errors.password}</div>: null}
        <br></br>
        <button id='submitBtn' type="submit">Submit</button>

    </form>
    </div>
  );
}

export default App;
