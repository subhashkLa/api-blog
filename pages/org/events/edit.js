import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
// import styles from "../styles/Home.module.css";
import Resizer from "react-image-file-resizer";
import * as style from "../../../styles/Home.module.css";
import axios from "axios";
import { isAuth } from "../../../helpers/auth";
import Link from "next/link";
import Router from "next/router";
import { showErrorMessage, showSuccessMessage } from "../../../helpers/alert";
import React, { useEffect, useState } from "react";
import withAuth from "../../withUser/withAuth";
function Edit({ user, token }) {
  const [state, setState] = useState({
    title: "",
    content: "",
    type: "",
    image: "",
    street_address: "",
    city: "",
    postcode: "",
    stateCon: "",
    country: "",
    error: "",
    success: "",
    buttonText: "Add Item",
  });

  const [imageUploadButtonName, setImageUploadButtonName] = useState(
    "Upload image"
  );

  useEffect(() => {
    !isAuth() && Router.push("/login");

    setState({
      ...state,
      title: user.title,
      content: user.content,
      type: user.type,
      image: user.image,
      street_address: user.street_address,
      city: user.city,
      postcode: user.postcode,
      stateCon: user.stateCon,
      country: user.country,
    });
  }, []);

  const {
    buttonText,
    title,
    content,
    image,
    type,
    street_address,
    city,
    stateCon,
    country,
    postcode,
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
        `${process.env.API}/events`,
        {
          title,
          content,
          image,
          street_address,
          city,
          type,
          stateCon,
          country,
          postcode,
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
        title: "",
        content: "",
        email_address: "",
        street_address: "",
        city: "",
        type: "",
        stateCon: "",
        country: "",
        postcode: "",
        buttonText: "Submitted",
        success: res.data.message,
      });
    } catch (error) {
      console.log(error);
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
                      <h2>Edit Event</h2>
                      {success && showSuccessMessage(success)}
                      {error && showErrorMessage(error)}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            onChange={handleChange("title")}
                            value={title}
                            className="form-control"
                            type="text"
                            name="title"
                            placeholder="Title"
                          />
                        </div>

                        <div className="form-group">
                          <textarea
                            onChange={handleChange("content")}
                            value={content}
                            type="text"
                            name="content"
                            className="form-control"
                            placeholder="Description"
                            rows="4"
                            cols="50"
                          ></textarea>
                        </div>

                        <br />
                        <br />
                        <br />
                        <div className="form-group">
                          <select
                            className="form-control"
                            name="type"
                            onChange={handleChange("type")}
                          >
                            <option>Select Event Type</option>
                            <option>risingfund</option>
                            <option>veganmeals</option>
                            <option>accommodation</option>
                            <option>training</option>
                            <option>activities</option>
                          </select>
                        </div>

                        <br />
                        <br />
                        <br />
                        <div className="form-group">
                          <input
                            className="form-control"
                            onChange={handleImage}
                            type="file"
                            accept="image/*"
                            name="image"
                            placeholder="Image"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            onChange={handleChange("street_address")}
                            value={street_address}
                            className="form-control"
                            type="text"
                            name="street_address"
                            placeholder="Street Address"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange("city")}
                            value={city}
                            className="form-control"
                            type="text"
                            name="city"
                            placeholder="City"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange("stateCon")}
                            value={stateCon}
                            className="form-control"
                            type="text"
                            name="stateCon"
                            placeholder="State"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange("country")}
                            value={country}
                            className="form-control"
                            type="text"
                            name="country"
                            placeholder="Country"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange("postcode")}
                            value={postcode}
                            className="form-control"
                            type="text"
                            name="postcode"
                            placeholder="Postcode"
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

export default withAuth(Edit);
