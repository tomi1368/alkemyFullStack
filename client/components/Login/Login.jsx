import React, { useState } from "react";
import { initialValue, Schema, errorHandler } from "./loginHelper/loginConfig";
import { Formik, Form, Field } from "formik";
import "./Login.scss";
import { validationForm } from "./loginHelper/loginRequest";
import {useNavigate} from "react-router-dom"
import { useDispatch} from "react-redux";


const Login = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const [error,setError] = useState(null)
  return (
    <div className="background-login">
    <div className="login-wrapper">
      <div className="login">
        <h3>Login</h3>
        <Formik
          initialValues={initialValue}
          validationSchema={Schema}
          onSubmit={(v) => validationForm(v,dispatch,navigate,setError)}
        >
          {({ errors }) => {
            return (
              <Form className="login-form">
                <Field
                  name="email"
                  className="login-form__field"
                  placeholder="Enter email..."
                />
                {errorHandler(errors).email()}
                <Field
                  name="password"
                  className="login-form__field"
                  type="password"
                  placeholder="Enter your Password..."
                />
                {errorHandler(errors).password()}
                <button type="submit">Sign-In</button>
              </Form>
            );
          }}
        </Formik>
        {error && <div className="error">{error.msg}</div>}
      </div>
      <div className="login-img">
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20201215/pngtree-purple-simple-alarm-clock-with-gold-coins-background-image_508829.jpg" alt="" />
      </div>
    </div>
    </div>
  );
};

export default Login;
