import React, { useState } from "react";
import "./Registration.css";
import axios from "axios";

const Registration = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      console.error("Passwords do not match");

      return;
    }

    const formData = {
      name: name,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };

    try {
      // Send POST request to backend API
      const response = await axios.post(
        "http://localhost:5002/api/user/registration",
        formData
      );
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Registration failed:", error.message);
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
                      Welcome to Rejoin
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="name">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          value={name}
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

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

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="repeatPassword">
                          Repeat Password
                        </label>
                        <input
                          required
                          type="password"
                          id="repeatPassword"
                          className="form-control form-control-lg"
                          value={repeatPassword}
                          onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          required
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
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

export default Registration;