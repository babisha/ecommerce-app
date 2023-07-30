import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Login() {
  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("*Enter valid username*"),
    password: Yup.string().required("*Enter valid password*"),
  });

  const navigate = useNavigate();

  const submitHandler = (e: FormikValues) => {
    e.preventDefault();
    navigate("/homepage");
  };

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <Form onSubmit={submitHandler}>
          <h2>Login Here </h2>
          <div className="formik">
            <label htmlFor="userName">userName: </label>
            <Field
              required
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your username..."
            />
            <ErrorMessage
              name="userName"
              component="div"
              className="errorMessage"
            />
          </div>

          <div className="formik">
            <label htmlFor="password">Password: </label>
            <Field
              required
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password..."
            />
            <ErrorMessage
              name="password"
              component="div"
              className="errorMessage"
            />
          </div>
          <button type="submit">SIGN IN</button>

          <p>Forgot your password?</p>
          <p>
            New user? <span>Sign Up.</span>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
