import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { getCookie } from "../../helpers/auth";
import Router from "next/router";
const VeganComponent = (props) => {
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
    console.log(el);
    return el;
  };

  const handleFavLike = (favId) => {
    const token = getCookie("token");

    axios
      .post(
        `${process.env.API}/favorite-vegan`,
        {
          fav_id: favId,
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

  const handleFavLikeDis = (favId) => {
    const token = getCookie("token");

    axios
      .post(
        `${process.env.API}/favorite-vegan-dis`,
        {
          fav_id: favId,
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
    <div className="tab-content active show" id="nav-tabContent">
      <div
        className="tab-pane fade active show"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <div className="tab-pane-title">
          <h2>
            {props.type || "Vegan Shop/Restaurants"}
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
          {props.vegans &&
            props.vegans.map((e, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                  <div className="image-container card-img-top">
                    <img
                      alt="#"
                      src={
                        e.image.url == "/default.gif"
                          ? "/" + e.image.url
                          : e.image.url
                      }
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-title">{e.name}</p>
                    <a className="card-details" href="#">
                      {e.content}
                    </a>

                    <button className="readmorebtntwenty" id="myBtntwenty">
                      read more..
                    </button>
                  </div>
                  <div className="share-container">
                    <a
                      href="#"
                      className="nav-link"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Donate"
                    >
                      <i className="fa fa-heart"></i>
                    </a>
                    {checkFav(e._id) == "true" ? (
                      <a
                        onClick={(event) => {
                          event.target.classList.remove(
                            "favorite-image-active"
                          );
                          handleFavLikeDis(e._id);
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
  );
};

export default VeganComponent;
