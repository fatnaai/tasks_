import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        formData
      );
      console.log("User logged in successfully:", response.data);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="registration-container">
      <section
        className="vh-100 bg-image"
        style={{
          backgroundColor: "blueviolet",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Login to Rejoin
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          Your Email
                        </label>
                        <input
                          required
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          required
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Don't have an account yet?
                        <Link to={"/"} className="fw-bold text-body">
                          Register
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
