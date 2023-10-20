// Import hook react
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "../components/GoogleLogin";

export const Login = () => {
  // Define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Define state for validation errors
  const [validation, setValidation] = useState([]);

  // Define history
  // const history = useNavigate();

  // Define state for login status
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Function "loginHandler"
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      // Handle the response, e.g., set user state or redirect to the dashboard
      console.log("Login successful", response.data);
      localStorage.setItem("token", response.data.data.token);

      // Update login status
      setIsLoggedIn(true);

      // Redirect to the dashboard
      // history("/home");
      window.location.href = "/home";
    } catch (error) {
      // Handle login error
      setValidation(error.response.data);
      console.error("Login failed", error);
    }
  };

  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold">HALAMAN LOGIN</h4>
              <hr />
              {validation.message && (
                <div className="alert alert-danger">{validation.message}</div>
              )}
              <form onSubmit={loginHandler}>
                <div className="mb-3">
                  <label className="form-label">ALAMAT EMAIL</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Alamat Email"
                  />
                </div>
                {validation.email && (
                  <div className="alert alert-danger">
                    {validation.email[0]}
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label">PASSWORD</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                  />
                </div>
                {validation.password && (
                  <div className="alert alert-danger">
                    {validation.password[0]}
                  </div>
                )}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    LOGIN
                  </button>
                </div>
              </form>
              <p style={{ textAlign: "center", marginTop: 5 }}>Or</p>
              <div className="d-grid gap-1">
                <GoogleLogin buttonText="Login with Google" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
