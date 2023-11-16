import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});
  // xử lý nhập
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
  };
  // Phương thức PreventDefault() sẽ ngăn liên kết ở trên đi theo URL.
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
    axios
      .post("http://localhost:8081/login", values)
      .then(res => {
        if (res.data === "success") {
          navigate('/home')
        }
        else {
          alert('No record exitated')
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25 h-50">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email address</strong>
            </label>
            <input
              name="email"
              type="email"
              className="form-control rounded"
              onChange={handleInput}
              placeholder="enter email"
            />
            {error.email && <span className="text-danger">{error.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              name="password"
              type="password"
              placeholder="enter passsword"
              className="form-control rounded"
              onChange={handleInput}
            />
            {error.password && <span className="text-danger">{error.password}</span>}
          </div>
          {/* submit liên kết đến url /Signup */}
          <button type="submit" className="btn btn-success w-100">
            log in
          </button>
          <p>You are agree to auto terms and policies</p>
          <Link to="/Signup" className="btn btn-default border w-100 bg-light">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
