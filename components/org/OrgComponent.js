import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { getCookie } from "../../helpers/auth";
import Router from "next/router";

const OrgComponent = (props) => {
  const [state, setState] = useState({
    success: "",
    error: "",
  });

  const checkFav = (elementId) => {
    let el = "false";
    let fav = props.fav || 0;

    for (let i = 0; i <= fav.length; i++) {
      if (fav[i] == elementId) {
        console.log(fav[i]);
        el = "true";
      }
    }
    // console.log(el);
    return el;
  };

  const handleFavLike = (favId) => {
    const token = getCookie("token");

    axios
      .post(
        `${process.env.API}/favorite-org`,
        {
          fav_id: favId,
          type: props.type == "temple" ? "fav_temple" : "fav_charity",
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
            contentType: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data.message);
        setState({
          ...state,
          success: res.data.message,
        });
      })
      .catch((err) => {
        if (err.response.status == 401) {
          Router.push("/login");
        }
      });
  };

  const handleFavDis = (favId) => {
    const token = getCookie("token");

    axios
      .post(
        `${process.env.API}/favorite-org-dis`,
        {
          fav_id: favId,
          type: props.type == "temple" ? "fav_temple" : "fav_charity",
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
            contentType: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data.message);
        setState({
          ...state,
          success: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
        setState({
          ...state,
          error: err.response.data.error,
        });

        if (err.response.status == 401) {
          Router.push("/login");
        }
      });
  };

  return (
    <div className="page-content">
      <div className="temple-section">
        <div className="container-fluid">
          <div className="section-title">
            <h2>
              <a className="head-title" href="buddist_temple.html">
                {props.name}
              </a>
              {props.link ? (
                <Link href={props.link}>
                  <a className="viewall">View All</a>
                </Link>
              ) : (
                ""
              )}
            </h2>
          </div>
          <div className="row">
            {props.users.map((e, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={"a" + index}>
                <div className="card">
                  <div className="image-container card-img-top">
                    <img
                      alt="#"
                      src={
                        e.orgInfo.org_avatar
                          ? e.orgInfo.org_avatar.url
                          : "/default.gif"
                      }
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-title">{e.orgInfo.org_name}</p>
                    <a className="card-details" href="#">
                      {e.orgInfo.org_desc
                        ? e.orgInfo.org_desc.slice(0, 30)
                        : ""}
                      <span id="dots11">
                        .<span className="space-between"></span>.
                        <span className="space-between"></span>.
                      </span>
                      <span id=""></span>
                    </a>
                    <button
                      onClick={() => Router.push("/org/" + e.slug)}
                      className="readmorebtn11"
                      id="myBtn11"
                    >
                      Read More
                    </button>

                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="share"
                    ></a>

                    <p className="map-icon">
                      <i className="fa fa-map-marker"></i>
                      <a
                        href="https://www.google.com/maps/place/Wetherill+Park+NSW+2164,+Australia/@-33.8419702,150.8633996,13z/data=!3m1!4b1!4m5!3m4!1s0x6b129705bb6b75d7:0x5017d681632cfe0!8m2!3d-33.84975!4d150.91101"
                        target="blank"
                      >
                        {e.location ? e.location.formattedAddress : ""}
                      </a>
                    </p>
                  </div>
                  <div className="share-container">
                    <Link href="/checkout">
                      <a
                        href="#"
                        className="nav-link"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Donate"
                      >
                        <i className="fa fa-heart"></i>
                      </a>
                    </Link>

                    {checkFav(e._id) == "true" ? (
                      <a
                        onClick={(event) => {
                          event.target.classList.remove(
                            "favorite-image-active"
                          );
                          handleFavDis(e._id);
                        }}
                        href={void 0}
                        className="nav-link favorite-image-active"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Favorite"
                      >
                        <img
                          className="favorite-image"
                          src="/img/nav/add_two_watchlist.png"
                        />
                      </a>
                    ) : (
                      <a
                        onClick={(event) => {
                          event.target.classList.add("favorite-image-active");
                          handleFavLike(e._id);
                        }}
                        href={void 0}
                        className="nav-link"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Favorite"
                      >
                        <img
                          className="favorite-image"
                          src="/img/nav/add_two_watchlist.png"
                        />
                      </a>
                    )}

                    <a
                      href="#"
                      className="nav-link"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Share"
                    >
                      <i className="fa fa-share"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgComponent;
