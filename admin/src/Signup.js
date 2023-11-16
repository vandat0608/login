import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";
const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  // xử lý nhập
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev, [event.target.name]: [event.target.value]
    }))
  };
  // Phương thức PreventDefault() sẽ ngăn liên kết ở trên đi theo URL.
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    axios.post('http://localhost:8081/Signup', values)
      .then(res => {
        navigate('/')
      })

      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25 h-75">
        <h2>Sigup</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              name="name"
              onChange={handleInput}
              type="text"
              className="form-control rounded"
              placeholder="enter name"
            />
            {errors.name && <span className="text-danger" >{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email address</strong>
            </label>
            <input
              onChange={handleInput}
              type="email"
              className="form-control rounded"
              placeholder="enter email"
              name="email"
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              onChange={handleInput}
              name="password"
              type="password"
              placeholder="enter passsword"
              className="form-control rounded"
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Sign up
          </button>
          <p>You are agree to auto terms and policies</p>
          <Link to="/" className="btn btn-default border w-100 bg-light ">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;
