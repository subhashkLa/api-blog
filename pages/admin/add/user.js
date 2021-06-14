import Layout from "../../../components/Layout"; // import styles from
import axios from "axios";
import { isAuth } from "../../../helpers/auth";
import Link from "next/link";
import Router from "next/router";
import { showErrorMessage, showSuccessMessage } from "../../../helpers/alert";

import React, { useEffect, useState } from "react";
export default function AddUser() {
  const [orgForm, setOrgForm] = useState("orgForm");
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    new_password: "",
    confirm_password: "",
    street_address: "",
    city: "",
    postcode: "",
    stateCon: "",
    country: "",
    phone: "",
    gender: "",

    org_type: "",
    org_name: "",
    org_address: "",
    org_city: "",
    org_postcode: "",
    org_state: "",
    org_email: "",
    org_phone: "",
    error: "",
    success: "",
    buttonText: "Register",
  });

  useEffect(() => {
    isAuth().role != "admin" && Router.push("/");
  }, []);

  const {
    buttonText,
    first_name,
    last_name,
    email_address,
    new_password,
    confirm_password,
    street_address,
    city,
    stateCon,
    country,
    phone,
    postcode,

    gender,
    org_type,
    org_name,
    org_address,
    org_city,
    org_postcode,
    org_state,
    org_email,
    org_phone,
    user,
    error,
    success,
  } = state;

  const handleChange = (name) => (e) => {
    if (name == "user" && e.target.value == "user") {
      setOrgForm("orgForm");
    }
    if (name == "user" && e.target.value == "org") {
      setOrgForm("");
    }
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Add",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      ...state,
      buttonText: "Adding",
    });
    axios
      .post(`${process.env.API}/add-user`, {
        first_name,
        last_name,
        email_address,
        new_password,
        confirm_password,
        street_address,
        city,
        user,
        stateCon,
        country,
        phone,
        gender,
        postcode,
        org_type,
        org_name,
        org_address,
        org_city,
        org_postcode,
        org_state,
        org_email,
        org_phone,
      })
      .then((res) => {
        setState({
          ...state,
          first_name: "",
          last_name: "",
          email_address: "",
          new_password: "",
          confirm_password: "",
          street_address: "",
          city: "",
          stateCon: "",
          country: "",
          phone: "",
          gender: "",
          postcode: "",

          org_type: "",
          org_name: "",
          org_address: "",
          org_city: "",
          org_postcode: "",
          org_state: "",
          org_email: "",
          org_phone: "",
          buttonText: "Submitted",
          success: res.data.message,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          buttonText: "Add",
          error: err.response.data.error,
        });
      });
  };

  return (
    <Layout>
      <section>
        <div className="mid">
          <div className="reg-mid">
            <div className="reg-mid-container">
              <div className="reg-title">
                <div className="img-box">
                  <img width="40%" alt="#" src="/img/logo/2.png" />
                </div>

                <h1>
                  <strong>Create Org</strong>
                </h1>
                {success && showSuccessMessage(success)}
                {error && showErrorMessage(error)}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <fieldset className="the-fieldset">
                    <legend className="the-legend"></legend>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          value={first_name}
                          type="text"
                          name="first_name"
                          className="form-control"
                          id="first_name"
                          placeholder="First Name"
                          onChange={handleChange("first_name")}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          value={last_name}
                          type="text"
                          name="last_name"
                          className="form-control"
                          id="last_name"
                          placeholder="Last Name"
                          onChange={handleChange("last_name")}
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          value={email_address}
                          type="email"
                          name="email_address"
                          className="form-control"
                          id="email_address"
                          placeholder="Email address"
                          onChange={handleChange("email_address")}
                          required
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <input
                          value={new_password}
                          type="text"
                          name="new_password"
                          className="form-control"
                          id="new_password"
                          placeholder="New Password"
                          onChange={handleChange("new_password")}
                          required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          value={confirm_password}
                          type="text"
                          name="confirm_password"
                          className="form-control"
                          id="confirm_password"
                          placeholder="Confirm Password"
                          onChange={handleChange("confirm_password")}
                          required
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          value={street_address}
                          type="text"
                          name="street_address"
                          className="form-control"
                          id="street_address"
                          onChange={handleChange("street_address")}
                          placeholder="Street Address"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          value={city}
                          type="text"
                          name="city"
                          className="form-control"
                          id="city"
                          onChange={handleChange("city")}
                          placeholder="City/Suburb"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          value={postcode}
                          type="text"
                          name="postcode"
                          className="form-control"
                          id="postcode"
                          onChange={handleChange("postcode")}
                          placeholder="Postcode"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          value={stateCon}
                          type="text"
                          name="stateCon"
                          className="form-control"
                          id="stateCon"
                          onChange={handleChange("stateCon")}
                          placeholder="State"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          value={country}
                          type="text"
                          name="country"
                          className="form-control"
                          id="country"
                          onChange={handleChange("country")}
                          placeholder="Country"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          value={phone}
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          onChange={handleChange("phone")}
                          placeholder="Phone (optional)"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <select
                          name="gender"
                          id="gender"
                          className="form-control"
                          onChange={handleChange("gender")}
                        >
                          <option>Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Rather Not Say</option>
                        </select>
                      </div>

                      <div className="form-group col-md-6 ">
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            value="user"
                            id="customRadioInline1"
                            name="user"
                            className="custom-control-input"
                            onChange={handleChange("user")}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadioInline1"
                          >
                            Personal
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            value="org"
                            id="customRadioInline2"
                            name="user"
                            className="custom-control-input"
                            onChange={handleChange("user")}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadioInline2"
                          >
                            Organization
                          </label>
                        </div>
                      </div>

                      {!orgForm ? (
                        <>
                          <div className="form-group col-md-6">
                            <select
                              id="inputState"
                              name="org_type"
                              className="form-control"
                              onChange={handleChange("org_type")}
                            >
                              <option>Select Organization Type</option>
                              <option value="charity">Charities</option>
                              <option value="veg_shop">Vegan Shop</option>
                              <option value="veg_rest">Vegan Restaurent</option>
                              <option value="temple">
                                Buddhist Temple,Monastery
                              </option>
                              <option value="travel_agent">
                                Buddhist Temple Tour-Travel Agent
                              </option>
                            </select>
                          </div>
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              className="form-control"
                              name="org_name"
                              id="Organization_Name"
                              placeholder="Organization Name"
                              onChange={handleChange("org_name")}
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              className="form-control"
                              name="org_address"
                              id="Street_address"
                              placeholder="Street address"
                              onChange={handleChange("org_address")}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="org_city"
                              id="city_two"
                              placeholder="City Suburb"
                              onChange={handleChange("org_city")}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="org_postcode"
                              id="postcode_two"
                              placeholder="Postcode"
                              onChange={handleChange("org_postcode")}
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="org_state"
                              id="State"
                              placeholder="State"
                              onChange={handleChange("org_state")}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="org_country"
                              id="Country"
                              placeholder="Country"
                              onChange={handleChange("org_country")}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="org_phone"
                              id="Phone_number"
                              onChange={handleChange("org_phone")}
                              placeholder="Phone  (optional)"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="org_email"
                              id="Email"
                              placeholder="Email"
                              onChange={handleChange("org_email")}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      <div className="col-md-12">
                        <button
                          className="btn submit-btn btn-primary"
                          type="submit"
                        >
                          {buttonText}
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
