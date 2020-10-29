import React, { useState, useEffect } from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup' 
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = ({ errors, touched, values, status }) => {
    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    console.log(user) 

    useEffect(() => {
        status && setUser(status)
    }, [status])

    return (
        <div className="register">
            <h1>Expat Journal</h1>
            <h2>Discover other expats and their adventures</h2>
            <Form className="form register-form">
                <h1>Please Register</h1>
                <Field className="input" name="name" type="text" value={values.name} placeholder="username" ></Field>
                {touched.name && errors.name && <p>{errors.name}</p>}

                <Field className="input" name="password" type="password" value={values.password} placeholder="password" ></Field>
                {touched.password && errors.password && <p>{errors.password}</p>}

                <div>
                    <p>Already A Member <Link to="/loginform">Sign In</Link></p>
                    <button className="button" type="submit">Register</button>
                </div>
            </Form>
        </div>
    )
}

const FormikRegister = withFormik({
    mapPropsToValues() {
        return {
            name: "",
            password: ""
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Username is required"),
        password: Yup.string().required("Password required"),
    }),

    handleSubmit(values, { resetForm, setStatus, props }) {
        console.log("Form Values ", values)

        axios
            .post("https://expat-journal-backend-jensen.herokuapp.com/api/auth/register", values) 

            .then(res => {
                console.log(res.data)
                resetForm()
                setStatus(res.data)
                props.history.push('/loginform')
                localStorage.setItem("userid", res.data.id)
            })
    }
})(Register)

export default FormikRegister