import { useState, useEffect } from "react";
import axios from "axios";
import { showSuccessMessage, showErrorMessage } from "../../../helpers/alert";
import Router, { withRouter } from "next/router";
import jwt from "jsonwebtoken";
import Layout from "../../../components/Layout";

const ResetPassword = ({ router }) => {
  const [state, setState] = useState({
    name: "",
    token: "",
    new_password: "",
    buttonText: "Reset Password",
    success: "",
    error: "",
  });
  const { name, token, new_password, buttonText, success, error } = state;

  useEffect(() => {
    const decoded = jwt.decode(router.query.id);
    if (decoded)
      setState({ ...state, name: decoded.name, token: router.query.id });
  }, [router]);

  const handleChange = (e) => {
    setState({
      ...state,
      new_password: e.target.value,
      success: "",
      error: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('post email to ', email);
    setState({ ...state, buttonText: "Sending" });
    try {
      const response = await axios.put(`${process.env.API}/reset-password`, {
        resetPasswordLink: token,
        new_password,
      });

      setState({
        ...state,
        new_password: "",
        buttonText: "Done",
        success: response.data.message,
      });
    } catch (error) {
      console.log("RESET PW ERROR", error);
      setState({
        ...state,
        buttonText: "Forgot Password",
        error: error.response.data.error,
      });
    }
  };

  const passwordResetForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          onChange={handleChange}
          value={new_password}
          placeholder="Type new password"
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
      <div className="row m-4">
        <div className="col-md-6 offset-md-3">
          <h1>Hi {name}, Ready to Reset Password?</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          {passwordResetForm()}
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(ResetPassword);
