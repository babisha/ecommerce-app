import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  const initialValues = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("*Enter Full Name*"),
    userName: Yup.string().required("*Enter Username*"),
    email: Yup.string().required("*Enter Email Address*"),
    password: Yup.string().required("*Enter Password*"),
    confirmPassword: Yup.string()
      .required("*Please Confirm Password*")
      .oneOf([Yup.ref("password")], "*Passwords must match*"),
  });

  const navigate = useNavigate();

  const submitHandler = (e: FormikValues) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <Form onSubmit={submitHandler}>
          <h2>Register Here </h2>
          <div className="formik">
            <label htmlFor="fullName">Full Name: </label>
            <Field
              required
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full Name..."
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="errorMessage"
            />
          </div>

          <div className="formik">
            <label htmlFor="userName">Username: </label>
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
            <label htmlFor="email">Email address: </label>
            <Field
              required
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address..."
            />
            <ErrorMessage
              name="email"
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

          <div className="formik">
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <Field
              required
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password..."
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="errorMessage"
            />
          </div>

          <button type="submit">SIGN UP</button>
          <p>
            Already have an account? <span>Sign in.</span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
