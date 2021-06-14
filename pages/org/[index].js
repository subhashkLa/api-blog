import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import SocialMediaButtons from "../../components/SocialMediaButtons";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
} from "react-share";

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
function OrgDetail({ user }) {
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
                      <h2>Information</h2>

                      <div class="col">
                        <section>
                          <div class="describ-box">
                            <div class="org-ful">
                              <div class="org-full-container">
                                <div class="row">
                                  <div class="col-sm-12 col-md-8 col-xl-8">
                                    <div class="org-middle">
                                      <div class="sec-middle-img">
                                        <div class="middle-img">
                                          <img
                                            alt="#"
                                            src={
                                              user.orgInfo.org_avatar
                                                ? user.orgInfo.org_avatar.url
                                                : "/default.gif"
                                            }
                                          />
                                        </div>
                                        <div class="img-btm">
                                          <div class="img-nameplate">
                                            <h5>{user.orgInfo.org_name} </h5>

                                            <SocialMediaButtons
                                              shareUrl={`${process.env.REACTDOMAIN}/org/${user.slug}`}
                                              title={user.orgInfo.org_name}
                                              image={
                                                user.orgInfo.org_avatar
                                                  ? user.orgInfo.org_avatar.url
                                                  : "/default.gif"
                                              }
                                            />
                                            <div class="share-idle-sec">
                                              <i class="fa fa-share"></i>
                                              <i class="favourite">
                                                <img
                                                  alt="#"
                                                  src="/img/nav/add_two_watchlist.png"
                                                />
                                              </i>
                                              <i class="fa fa-heart"></i>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="img-des">
                                          <div class="img-de-content">
                                            <p>Description</p>
                                            <p>{user.orgInfo.org_desc}</p>
                                            <p>
                                              Address:
                                              {user.location.formattedAddress}
                                            </p>
                                            <p>
                                              Hours: Open
                                              {user.orgInfo.org_time} Hours
                                            </p>

                                            <p>
                                              Phone:{user.orgInfo.org_phone}
                                            </p>
                                            <p>
                                              Established{" "}
                                              {user.orgInfo.org_built}
                                            </p>

                                            <p>
                                              Socail Links
                                              <br />
                                              {user.orgInfo.org_link
                                                ? user.orgInfo.org_link.facebook
                                                : ""}
                                              <br />
                                              {user.orgInfo.org_link
                                                ? user.orgInfo.org_link.google
                                                : ""}
                                              <br />
                                              {user.orgInfo.org_link
                                                ? user.orgInfo.org_link.twitter
                                                : ""}
                                              <br />
                                            </p>

                                            <p></p>
                                          </div>
                                        </div>
                                        <div class="video-sec">
                                          <div class="video-content">
                                            <div class="video-de-top">
                                              <h5>Video</h5>
                                            </div>
                                            <div class="video-de-btm">
                                              <video
                                                width="320"
                                                height="240"
                                                controls
                                              >
                                                <source
                                                  src="/img/video/movie.mp4"
                                                  type="video/mp4"
                                                />
                                              </video>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
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

OrgDetail.getInitialProps = async (ctx) => {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");

  let user;
  try {
    const response = await axios.get(
      //?role=temple&orgInfo.org_name[regex]=Corporate
      `${process.env.API}/org-details/${ctx.query.index}`
    );

    user = response.data;
    console.log(user);
  } catch (error) {
    console.log(error);
  }

  return { user };
};

export default OrgDetail;
