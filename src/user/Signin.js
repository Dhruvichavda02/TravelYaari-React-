import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";
import LoadingOverlay from "react-loading-overlay";
import avatar from "./../image/login/avatar.png";
import sideimage from "./../image/login/side.jpg";
import "./../CSS/signin.css";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  // optional: if you want to track mount/unmount later, leave this empty
  useEffect(() => {}, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    try {
      const data = await signin({ email, password });

      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
            loading: false,
          });
        });
      }
    } catch (err) {
      setValues({
        ...values,
        error: "Something went wrong. Please try again.",
        loading: false,
      });
    }
  };

  const signInForm = () => (
    <div className="row display-flex mt-3">
      <div
        className="col-sm-8 col-xs-10 col-md-4 offset-md-2 offset-sm-2 offset-xs-1 py-4 px-3 rounded-left"
        id="login-intro-form"
      >
        {/* <h2 className="text-center text-white h2 font-weight-bold mt-2">
          Hello Globetrotter
        </h2> */}
        <div className="login-account-wall p-4 mb-2">
          <img className="rounded-circle mx-auto d-block" src={avatar} alt="avatar" />
          <form>
            <div className="form-group mt-3">
              <label className="text-white font-weight-bold">Email</label>
              <input
                onChange={handleChange("email")}
                type="email"
                className="form-control"
                value={email}
              />
            </div>

            <div className="form-group mt-3">
              <label className="text-white font-weight-bold">Password</label>
              <input
                onChange={handleChange("password")}
                type="password"
                className="form-control"
                value={password}
              />
            </div>

            <button
              onClick={clickSubmit}
              className="btn btn-success btn-block rounded font-weight-bold text-center"
            >
              Submit
            </button>
          </form>

          <div className="text-center mt-3">
            <span className="text-center d-block text-danger font-weight-bold text-italic">
              or
            </span>
            <Link to="/signup" className="text-white">
              Create an account
            </Link>
          </div>
        </div>
      </div>

      <div
        className="col-sm-8 col-xs-10 col-md-4 rounded-right py-4 px-3"
        id="login-intro"
      >
        <h2 className="login-login-title text-center mt-2 h2">
          Welcome to TravelYaari
        </h2>
        <img className="img-fluid img-rounded" src={sideimage} alt="signup" />
        <p className="text-center text-warning">
          We are happy to see you here. We are working to provide the best services to you.
        </p>
      </div>
    </div>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <LoadingOverlay
        active={loading}
        spinner
        text="Loading..."
        styles={(base) => ({
          overlay: {
            ...base.overlay,
            background: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            ...base.content,
            color: "white",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          },
        })}
      >
        <div style={{ height: "100vh" }} />
      </LoadingOverlay>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout className="container-fluid">
      {showLoading()}
      {showError()}
      {signInForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
