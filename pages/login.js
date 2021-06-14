import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { authenticate, isAuth } from "../helpers/auth";
import { showSuccessMessage, showErrorMessage } from "../helpers/alert";

const Login = () => {
  const [state, setState] = useState({
    email_address: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Login",
  });

  useEffect(() => {
    if (isAuth()) {
      if (isAuth().role == "admin") {
        Router.push("/admin");
      } else if (isAuth().role == "user") {
        Router.push("/user/profile");
      }
    } else {
      Router.push("/login");
    }
  }, []);
  const { email_address, password, error, success, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Login",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setState({ ...state, buttonText: "Logging in" });
    try {
      const response = await axios.post(`${process.env.API}/login`, {
        email_address,
        password,
      });
      authenticate(response, () => {
        if (response.data.user.role == "admin") {
          return Router.push("/admin");
        } else if (response.data.user.role == "user") {
          return Router.push("/user/profile");
        } else {
          return Router.push("/org/profile");
        }
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: "Login",
        error: error.response.data.error,
      });
    }
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          value={email_address}
          onChange={handleChange("email_address")}
          type="email"
          className="form-control"
          placeholder="Type your email"
          required
        />
      </div>
      <div className="form-group">
        <input
          value={password}
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          placeholder="Type your password"
          required
        />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h1>Login</h1>
        <br />
        {success && showSuccessMessage(success)}
        {error && showErrorMessage(error)}
        {loginForm()}
        <div>
          <Link href="password/forgot">
            <a className="text-danger float-right m-5">Forgot Password</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
