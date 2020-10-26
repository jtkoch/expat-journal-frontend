import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link } from 'react-router-dom'

const LoginForm = ({ errors, touched, values, status }) => {
    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    console.log(user)

    useEffect(() => {
        status && setUser(status)
    }, [status])

    return (
        <div className="loginForm">
            <h1>Expat Journal</h1>
            <h2>Discover other expats and their adventures</h2>

            <Form>
                <h1>Please Sign In</h1>
                <Field 
                    name="name" 
                    type="text" 
                    value={values.name} 
                    placeholder="username">
                </Field>
                <Field
                    name="name"
                    type="password"
                    value={values.password}
                    placeholder="password"
                >
                </Field>

                <div>
                    <p>
                        Not a member yet? 
                        <Link to="/register">Create an Account</Link>
                    </p>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </div>
    )
}


const FormikLoginForm = withFormik({
    mapPropsToValues() {
      return {
        name: "",
        password: "",
      };
    },
  
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Username is required"),
      password: Yup.string().required("Password required")
  }),

  handleSubmit(values, {resetForm, setStatus, props}) {
    console.log("Submitting form:", values);  

    axios
      .post("https://expat-journal-backend-jensen.herokuapp.com/api/auth/login", values) 

      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        resetForm();
        setStatus(res.data);
        // props.history.push(`/${values.type}mainui`); <--------- CHECK ON THIS
    })
  }
})(LoginForm);
  

export default FormikLoginForm