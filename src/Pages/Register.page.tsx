import React from "react";

const Register = () => {
  return (
    <div className="form">
      <form>
        <h2>Register Here </h2>
        <label htmlFor="FullName">Full Name: </label>
        <input
          required
          type="text"
          id="FullName"
          placeholder="Enter your full Name..."
        />
        <label htmlFor="UserName">Username: </label>
        <input
          required
          type="text"
          id="UserName"
          placeholder="Enter your username..."
        />
        <label htmlFor="EmailAddress">Email address: </label>
        <input
          required
          type="text"
          id="EmailAddress"
          placeholder="Enter your email address..."
        />
        <label htmlFor="Password">Password: </label>
        <input
          required
          type="password"
          id="Password"
          placeholder="Enter your password..."
        />
        <label htmlFor="ConfirmPassword">Confirm Password: </label>
        <input
          required
          type="password"
          id="ConfirmPassword"
          placeholder="Enter your password again..."
        />
        <button>SIGN UP</button>
        <p>
          Already have an account? <span>Sign in.</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
