import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
// import styles from "../styles/Home.module.css";
import Resizer from "react-image-file-resizer";
import * as style from "../../styles/Home.module.css";
import axios from "axios";
import { isAuth } from "../../helpers/auth";
import Link from "next/link";
import Router from "next/router";
import { showErrorMessage, showSuccessMessage } from "../../helpers/alert";
import React, { useEffect, useState } from "react";
import withAuth from "../withUser/withAuth";
function Profile({ user, token }) {
  const [state, setState] = useState({
    image: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    postcode: "",
    stateCon: "",
    country: "",
    // email_address: "",
    phone: "",
    error: "",
    success: "",
    buttonText: "Profile update",
  });

  const [imageUploadButtonName, setImageUploadButtonName] = useState(
    "Upload image"
  );

  useEffect(() => {
    setState({
      ...state,
      first_name: user.first_name,
      last_name: user.last_name,
      address: user.street_address,
      city: user.city,
      postcode: user.postcode,
      stateCon: user.stateCon,
      country: user.country,
      // email_address: user.email_address,
      phone: user.phone,
    });

    !isAuth() && Router.push("/login");
  }, []);

  const {
    buttonText,
    image,
    first_name,
    last_name,
    address,
    city,
    postcode,
    stateCon,
    country,
    // email_address,
    phone,
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
        `${process.env.API}/profile/update`,
        {
          image,
          first_name,
          last_name,
          address,
          city,
          postcode,
          stateCon,
          country,
          // email_address,
          phone,
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
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: "Profile update",
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
                          src={user.avatar ? user.avatar.url : "/default.gif"}
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
                            name="first_name"
                            value={first_name}
                            id="Organization_Name"
                            placeholder="First Name"
                            onChange={handleChange("first_name")}
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            value={last_name}
                            id="Organization_Name"
                            placeholder="Last Name"
                            onChange={handleChange("last_name")}
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            id="Street_address"
                            value={address}
                            placeholder="Street address"
                            onChange={handleChange("address")}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            id="city_two"
                            value={city}
                            placeholder="City Suburb"
                            onChange={handleChange("city")}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="postcode"
                            id="postcode_two"
                            value={postcode}
                            placeholder="Postcode"
                            onChange={handleChange("postcode")}
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="stateCon"
                            id="State"
                            value={stateCon}
                            placeholder="State"
                            onChange={handleChange("stateCon")}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="country"
                            id="Country"
                            value={country}
                            placeholder="Country"
                            onChange={handleChange("country")}
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            id="phone"
                            value={phone}
                            placeholder="Phone"
                            onChange={handleChange("phone")}
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
