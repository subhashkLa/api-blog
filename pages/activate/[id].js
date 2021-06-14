import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import { showSuccessMessage, showErrorMessage } from "../../helpers/alert";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";

const ActivateAccount = ({ router }) => {
  const [state, setState] = useState({
    first_name: "",
    token: "",
    buttonText: "Activate Account",
    success: "",
    error: "",
  });
  const { first_name, token, buttonText, success, error } = state;

  useEffect(() => {
    let token = router.query.id;
    if (token) {
      const { first_name } = jwt.decode(token);
      setState({ ...state, first_name, token });
    }
  }, [router]);

  const clickSubmit = async (e) => {
    e.preventDefault();
    // console.log('activate acccount');
    setState({ ...state, buttonText: "Activating" });

    try {
      const response = await axios.post(
        `${process.env.API}/register/activate`,
        { token }
      );
      // console.log('account activate response', response)
      setState({
        ...state,
        first_name: "",
        token: "",
        buttonText: "Activated",
        success: response.data.message,
      });
    } catch (error) {
      setState({
        ...state,
        buttonText: "Activate Account",
        error: error.response.data.error,
      });
    }
  };

  return (
    <Layout>
      <div className="row m-5">
        <div className="col-md-6 offset-md-3">
          <h1>G'day {first_name}, Ready to activate your account?</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          <button
            className="btn btn-outline-warning btn-block"
            onClick={clickSubmit}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(ActivateAccount);
