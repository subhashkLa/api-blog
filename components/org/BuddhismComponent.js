import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { getCookie, isAuth } from "../../helpers/auth";
const BuddhismComponent = (props) => {
  const [state, setState] = useState({
    success: "",
    error: "",
  });
  const handleFav = (favId) => {
    const token = getCookie("token");

    axios
      .post(
        `${process.env.API}/favorite-product`,
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
      });
  };

  return (
    <div className="page-content">
      <div className="temple-section">
        <div className="container-fluid">
          <div className="section-title">
            <h2>
              <a className="head-title" href="">
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
            {props.products &&
              props.products.map((e, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12" key={"b" + index}>
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
                      <p className="card-title">{e.title}</p>
                      <a className="card-details" href="#">
                        {e.content}
                        <span id="dots11">
                          .<span className="space-between"></span>.
                          <span className="space-between"></span>.
                        </span>
                        <span id="more11">{e.street_address}</span>
                      </a>
                      <button className="readmorebtn11" id="myBtn11">
                        read more..
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
                          {e.city}
                        </a>
                      </p>
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
                      <a
                        onClick={(event) => {
                          event.target.classList.add("favorite-image-active");
                          handleFav(e._id);
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

export default BuddhismComponent;
