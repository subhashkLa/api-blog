import { useState, useEffect } from "react";
import axios from "axios";
import { showSuccessMessage, showErrorMessage } from "../../helpers/alert";
import Router from "next/router";
import Layout from "../../components/Layout";

const ForgotPassword = () => {
  const [state, setState] = useState({
    email_address: "",
    buttonText: "Forgot Password",
    success: "",
    error: "",
  });
  const { email_address, buttonText, success, error } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      email_address: e.target.value,
      success: "",
      error: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${process.env.API}/forgot-password`, {
        email_address,
      });
      // console.log('FORGOT PASSWORD', response);
      setState({
        ...state,
        email_address: "",
        buttonText: "Done",
        success: response.data.message,
      });
    } catch (error) {
      console.log("FORGOT PW ERROR", error);
      setState({
        ...state,
        buttonText: "Forgot Password",
        error: error.response.data.error,
      });
    }
  };

  const passwordForgotForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          onChange={handleChange}
          value={email_address}
          placeholder="Type your email"
          required
        />
      </div>
      <div>
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="row m-5">
        <div className="col-md-6 offset-md-3">
          <h1>Forgot Password</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          {passwordForgotForm()}
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
