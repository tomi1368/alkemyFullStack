import React, { useState } from 'react'
import { initialValue, Schema, errorHandler } from "./registerHelper/registerConfig";
import { Formik, Form, Field } from "formik";
import { registerRequest } from './registerHelper/registerRequest';
import { useNavigate, Link } from 'react-router-dom';
import "./Register.scss"
const Register = () => {
  const navigate = useNavigate()
  const [error,setError] = useState(null)
  return (
    <div className='background-register'>
      <div className='register-wrapper'>
        <div className="register">
          <h3>Register</h3>
          <Formik
          initialValues={initialValue}
          validationSchema={Schema}
          onSubmit={(v)=>registerRequest(navigate,v,setError)}
          >
            {({errors})=>{
              return(
                <Form className='register-form'>
                  <Field name="username" className="register-form__field" placeholder="Enter username..."/>
                  {errorHandler(errors).username()}
                  <Field name="email" className="register-form__field" placeholder="Enter email..."/>
                  {errorHandler(errors).email()}
                  <Field name="password" type="password" className="register-form__field" placeholder="Enter password..."/>
                  {errorHandler(errors).password()}
                  <button type='submit'>Sign-Up</button>
                </Form>
              )
            }}  
            
          </Formik>
        {error && <div>{error.msg}</div>}          
        <div className='register-tologin'>
                <h4>Have you an account?</h4>
                <Link to="/login" className='register-tologin__btn' > Sign-in with your account</Link>
            </div>
        </div>
        <div className="register-image">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20201215/pngtree-purple-simple-alarm-clock-with-gold-coins-background-image_508829.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Register