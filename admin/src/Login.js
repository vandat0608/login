import React from "react";
const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-primary vh-100"
    >
      <div className="bg-white p-3 rounded w-25 h-50">
        <form action="">
          <div class="mb-3">
            <label htmlFor="email">
            <strong>Email address</strong>
            </label>
            <input
              type="email"
              className="form-control rounded"
              placeholder="enter email"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input type="password" placeholder="enter passsword" className="form-control rounded"/>
          </div>
          <button className="btn btn-success w-100">log in</button>
          <p >You are agree to auto terms and policies</p>
          <button className="btn btn-default border w-100 bg-light">Create Account</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
