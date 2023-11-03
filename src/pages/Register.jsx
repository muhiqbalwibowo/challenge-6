import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { register } from "../redux/action/AuthActions";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [validation, setValidation] = useState([]);

  // Define history
  const history = useNavigate();

  // Function "registerHandler"
  // const registerHandler = async (e) => {
  //   e.preventDefault();

  // const name = `${firstName} ${lastName}`;

  // // Send data to the server
  // try {
  //   const response = await axios.post(
  //     "https://shy-cloud-3319.fly.dev/api/v1/auth/register",
  //     {
  //       email,
  //       name,
  //       password,
  //     }
  //   );

  //   // Handle the response, e.g., set user state or redirect to the dashboard
  //   console.log("Register successful", response.data);
  //   history("/");
  // } catch (error) {
  //   // Handle login error
  //   setValidation(error.response.data);
  //   console.error("Register failed", error);
  // }

  const registerHandler = async (e) => {
    e.preventDefault();
    const name = `${firstName} ${lastName}`;

    let data = JSON.stringify({
      name,
      email,
      password,
    });

    dispatch(register(data, navigate));
  };
  // };

  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold">HALAMAN REGISTER</h4>
              <hr />
              <form onSubmit={registerHandler}>
                <div className="mb-3">
                  <label className="form-label">NAMA DEPAN</label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Masukkan Nama Depan"
                  />
                  {validation.firstName && (
                    <div className="alert alert-danger">
                      {validation.firstName[0]}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">NAMA BELAKANG</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Masukkan Nama Belakang"
                  />
                  {validation.lastName && (
                    <div className="alert alert-danger">
                      {validation.lastName[0]}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">ALAMAT EMAIL</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Alamat Email"
                  />
                  {validation.email && (
                    <div className="alert alert-danger">
                      {validation.email[0]}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">PASSWORD</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                  />
                  {validation.password && (
                    <div className="alert alert-danger">
                      {validation.password[0]}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">KONFIRMASI PASSWORD</label>
                  <input
                    type="password"
                    className="form-control"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="Masukkan Konfirmasi Password"
                  />
                  {validation.passwordConfirmation && (
                    <div className="alert alert-danger">
                      {validation.passwordConfirmation[0]}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  REGISTER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
