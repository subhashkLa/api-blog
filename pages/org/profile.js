import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
// import styles from "../styles/Home.module.css";
import Resizer from "react-image-file-resizer";
import * as style from "../../styles/Home.module.css";
import axios from "axios";
import { isAuth } from "../../helpers/auth";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";

import { showErrorMessage, showSuccessMessage } from "../../helpers/alert";
import React, { useEffect, useState } from "react";
import withAuth from "../withUser/withAuth";
function Profile({ user, token }) {
  const router = useRouter();
  const [state, setState] = useState({
    image: "",
    org_name: "",
    org_address: "",
    org_city: "",
    org_postcode: "",
    org_state: "",
    org_country: "",
    org_email: "",
    org_phone: "",
    org_built: "",
    org_founder: "",
    org_desc: "",
    facebook: "",
    google: "",
    twiter: "",
    org_time: "",
    error: "",
    success: "",
    buttonText: "Add Item",
  });

  const [imageUploadButtonName, setImageUploadButtonName] = useState(
    "Upload image"
  );

  useEffect(() => {
    setState({
      ...state,
      org_name: user.orgInfo.org_name,
      org_address: user.orgInfo.org_address,
      org_city: user.orgInfo.org_city,
      org_postcode: user.orgInfo.org_postcode,
      org_state: user.orgInfo.org_state,
      org_country: user.orgInfo.org_country,
      org_email: user.orgInfo.org_email,
      org_phone: user.orgInfo.org_phone,
      org_built: user.orgInfo.org_built,
      org_founder: user.orgInfo.org_founder,
      org_desc: user.orgInfo.org_desc,
      facebook: user.orgInfo.org_link.facebook,
      google: user.orgInfo.org_link.google,
      twiter: user.orgInfo.org_link.twiter,
      org_time: user.orgInfo.org_time,
    });

    !isAuth() && Router.push("/login");
  }, []);

  const {
    buttonText,
    image,
    org_name,
    org_address,
    org_city,
    org_postcode,
    org_state,
    org_country,
    org_email,
    org_phone,
    org_built,
    org_founder,
    org_desc,
    facebook,
    google,
    twiter,
    org_time,
    error,
    success,
  } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
    });
  };

  const handleImage = (event) => {
    let fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    setImageUploadButtonName(event.target.files[0].name);
    if (fileInput) {
      Resizer.imageFileResizer(
        event.target.files[0],
        1980,
        1080,
        "JPEG",
        100,
        0,
        (uri) => {
          // console.log(uri);
          setState({ ...state, image: uri, success: "", error: "" });
        },
        "base64"
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Creating" });

    try {
      let res = await axios.post(
        `${process.env.API}/org/profile/update`,
        {
          image,
          org_name,
          org_address,
          org_city,
          org_postcode,
          org_state,
          org_country,
          org_email,
          org_phone,
          org_built,
          org_founder,
          org_desc,
          facebook,
          google,
          twiter,
          org_time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setImageUploadButtonName("Upload image");

      setState({
        ...state,
        buttonText: "Updated",
        success: res.data.message,
      });
      router.reload();
    } catch (error) {
      setState({
        ...state,
        buttonText: "Add item",
        error: error.response.data.error,
      });
    }
  };
  return (
    <div>
      <Layout>
        <div class="row" id="body-row">
          <Sidebar />
          <div className="col">
            <section>
              <div className="describ-box">
                <div className="org-ful">
                  <div className="org-full-container">
                    <div className="col">
                      <h2>Profile</h2>
                      {success && showSuccessMessage(success)}
                      {error && showErrorMessage(error)}
                      <form onSubmit={handleSubmit}>
                        <img
                          className="rounded-circle"
                          width="249px"
                          height="249px"
                          src={
                            !user.orgInfo.org_avatar
                              ? "/default.gif"
                              : user.orgInfo.org_avatar.url
                          }
                        />

                        <div className="form-group">
                          <label>Change Profile Image</label>

                          <input
                            className="form-control"
                            onChange={handleImage}
                            type="file"
                            accept="image/*"
                            name="image"
                            placeholder="Image"
                          />
                        </div>

                        <br />

                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="org_name"
                            value={org_name}
                            id="Organization_Name"
                            placeholder="Organization Name"
                            onChange={handleChange("org_name")}
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <textarea
                            cols="25"
                            className="form-control"
                            name="org_desc"
                            value={org_desc}
                            placeholder="Descriptioni"
                            onChange={handleChange("org_desc")}
                          />
                        </div>
                        <br />
                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="org_address"
                            id="Street_address"
                            value={org_address}
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
                            value={org_city}
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
                            value={org_postcode}
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
                            value={org_state}
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
                            value={org_country}
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
                            value={org_phone}
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
                            value={org_email}
                            placeholder="Email"
                            onChange={handleChange("org_email")}
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            type="date"
                            className="form-control"
                            name="org_built"
                            value={org_built}
                            placeholder="org built"
                            onChange={handleChange("org_built")}
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="org_founder"
                            id="org_founder"
                            value={org_founder}
                            placeholder="org built"
                            onChange={handleChange("org_founder")}
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="org_time"
                            id="org_time"
                            value={org_time}
                            placeholder="Times"
                            onChange={handleChange("org_time")}
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="facebook"
                            id="facebook"
                            value={facebook}
                            placeholder="facebook"
                            onChange={handleChange("facebook")}
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="google"
                            id="google"
                            value={google}
                            placeholder="google"
                            onChange={handleChange("google")}
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="twiter"
                            id="twiter"
                            value={twiter}
                            placeholder="twiter"
                            onChange={handleChange("twiter")}
                          />
                        </div>

                        <button className="btn btn-primary">
                          {buttonText}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default withAuth(Profile);
