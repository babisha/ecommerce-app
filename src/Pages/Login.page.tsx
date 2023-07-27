import React from "react";

function Login() {
  return (
    <div className="form">
      <form>
        <h2>Login Here </h2>
        <label htmlFor="UserName">Username: </label>
        <input
          required
          type="text"
          id="UserName"
          placeholder="Enter your username..."
        />

        <label htmlFor="Password">Password: </label>
        <input
          required
          type="password"
          id="Password"
          placeholder="Enter your password..."
        />

        <button>SIGN IN</button>

        <p>Forgot your password?</p>
        <p>
          New user? <span>Sign Up.</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
