import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../App.css";

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

  const submitHandler = (values: typeof initialValues) => {
    localStorage.setItem("registeredUser", JSON.stringify(values));
    navigate("/login");
  };

  return (
    <div className="flex justify-end bg-Bg-img bg-cover bg-repeat-none w-[100%] h-[100vh]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <Form className="width-max-content flex flex-col w-max-content mr-[150px] mt-[50px] mb-[50px] p-[50px] border-[2px] border-solid border-cyan-100 rounded transparent-bg-color ">
          <h2 className="text-2xl mb-[10px] font-semibold">Register Here </h2>
          <div className="">
            <label htmlFor="fullName" className="my-[5px] text-sm font-bold">
              Full Name:{" "}
            </label>
            <Field
              required
              type="text"
              id="fullName"
              name="fullName"
              className="input input flex flex-col justify-around items-left p-[5px]"
              placeholder="Enter your full Name..."
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="">
            <label htmlFor="userName" className="my-[5px] text-sm font-bold">
              Username:{" "}
            </label>
            <Field
              required
              type="text"
              id="userName"
              name="userName"
              className="input input flex flex-col justify-around items-left p-[5px]"
              placeholder="Enter your username..."
            />
            <ErrorMessage
              name="userName"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="">
            <label htmlFor="email" className="my-[5px] text-sm font-bold">
              Email address:{" "}
            </label>
            <Field
              required
              type="text"
              id="email"
              name="email"
              className="input flex flex-col justify-around items-left p-[5px]"
              placeholder="Enter your email address..."
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="">
            <label htmlFor="password" className="my-[5px] text-sm font-bold">
              Password:{" "}
            </label>
            <Field
              required
              type="password"
              id="password"
              name="password"
              className="input flex flex-col justify-around items-left p-[5px]"
              placeholder="Enter your password..."
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="">
            <label
              htmlFor="confirmPassword"
              className="my-[5px] text-sm font-bold"
            >
              Confirm Password:{" "}
            </label>
            <Field
              required
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="input flex flex-col justify-around items-left p-[5px]"
              placeholder="Confirm your password..."
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-600"
            />
          </div>

          <button type="submit" className="primary-button">
            SIGN UP
          </button>
          <p>
            Already have an account?{" "}
            <span
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
              className="text-blue-700 underline hover:cursor-pointer"
            >
              Sign in.
            </span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
