import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Router from "next/router";
import { isAuth, logout } from "../helpers/auth";
import FooterInfoBar from "../components/FooterInfoBar";
import Footer from "../components/Footer";
import VisitorCount from "../components/VisitorCount";
import { LanguageProvider } from "../containers/Language";
import LanguageSelector from "../components/LanguageSelector";
import { Text, LanguageContext } from "../containers/Language";
const selectOptions = ["option1", "option2", "option3"];
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Layout = ({ children }) => {
  const [profileActive, setProfileActive] = useState({});

  const [selectedOption, setSelectedOption] = useState();
  const { dictionary } = useContext(LanguageContext);
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const head = () => (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
        crossorigin="anonymous"
      />
    </>
  );

  const nav = () => (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="logo-sec">
          <Link href="/">
            <a
              className="navbar-brand"
              id="example"
              // href="/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Live like water, gentle like land Sống như nước, hiền như đất"
            >
              <img alt="#" id="image" src="/img/logo.png" />
            </a>
          </Link>
        </div>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-trigger="#main_nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse" id="main_nav">
          <div className="offcanvas-header mt-3">
            <button className="btn btn-outline-danger btn-close float-right">
              Close
            </button>
            <h5 className="py-2 text-white">Main navbar</h5>
          </div>
          <div className="column search-sec">
            <form className="search-from">
              <input type="text" placeholder="Search Temple or Event " />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link href="/">
                <a
                  href="/"
                  className="nav-item nav-link active navone"
                  id="nav-one"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title={dictionary.exploreHeader}
                ></a>
              </Link>
            </li>
            <li>
              <Link href="/orgs/temple">
                <a
                  href="/orgs/temple"
                  className="nav-item nav-link navtwo"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Buddhist Temples"
                ></a>
              </Link>
            </li>
            <li>
              <Link href="/orgs/charity">
                <a
                  href="/orgs/charity"
                  className="nav-item nav-link navthree"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Charities"
                ></a>
              </Link>
            </li>
            <li>
              <Link href="/buddhism/videos">
                <a
                  href="/buddhism/videos"
                  className="nav-item nav-link navfour"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Buddhism"
                ></a>
              </Link>
            </li>
            <li>
              <Link href="/soul-learning">
                <a
                  href="/buddhism/soul-learning"
                  className="nav-item nav-link navfive"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Soul Learning"
                ></a>
              </Link>
            </li>
            <li>
              <Link href="/self-learning">
                <a
                  href="/self-learning"
                  className="nav-item nav-link navsix"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Buddhism Self-Learning Programs"
                ></a>
              </Link>
            </li>
            <li>
              <Link href="/self-repent">
                <a
                  href="/self-repent"
                  className="nav-item nav-link navseven"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Self-Refuge to Buddha"
                ></a>
              </Link>
            </li>

            <li>
              <Link href="/vegan/shop">
                <a
                  href="/vegan/shop"
                  className="nav-item nav-link navten"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Vegan Shop/Restaurants"
                ></a>
              </Link>
            </li>

            <li>
              <Link href="/messenger">
                <a
                  href="/messenger"
                  className="nav-item nav-link navtwelve"
                  id="nav-twelve"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Y-Messenger"
                ></a>
              </Link>
            </li>
            <li>
              <Link href="/donate-items">
                <a
                  href="/donate-items"
                  className="nav-item nav-link navthirteen"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Donate Items"
                ></a>
              </Link>
            </li>
            {!isAuth() && (
              <>
                <li>
                  <Link href="/login">
                    <a
                      href="/login"
                      className="nav-item nav-link navfourteen"
                      id="nav-fourteen"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Login"
                    ></a>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <a
                      href="/register"
                      className="nav-item nav-link navfifteen"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Sign Up New Account"
                    ></a>
                  </Link>
                </li>
                <li>
                  <LanguageSelector />
                </li>
              </>
            )}

            {isAuth() && (
              <li>
                <li>
                  <button
                    onClick={() => setProfileActive("block")}
                    type="button"
                    id="modal_button"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Login"
                  >
                    <img
                      src={
                        isAuth().avatar ? isAuth().avatar.url : "/default.gif"
                      }
                      width="50px"
                      height="50px"
                    />
                  </button>
                </li>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {isAuth() && (
        <div id="myModal" className="modal" style={{ display: profileActive }}>
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-body-top">
                <a onClick={() => setProfileActive("none")}>X</a>
                <div className="row">
                  <div className="col-2">
                    <div className="modal-body-top-left">
                      <div className="profile-image">
                        <img src={isAuth().avatar.url} alt="#" />
                      </div>
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="modal-body-top-right">
                      <div className="profile_details">
                        <div className="profile_name">
                          <h6>
                            <strong>
                              {isAuth().first_name + " " + isAuth().last_name}
                            </strong>
                          </h6>
                        </div>
                        <div className="profile_email">
                          <p>{isAuth().email_address}</p>

                          <a href="#">
                            <Link href="/org/profile">
                              Manage your YPhat Account
                            </Link>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-body-bottom">
                <div className="row">
                  <div className="modal-body-bottom-content">
                    <a href="#">
                      <i className="fa fa-cogs fa-fw mr-3"></i>Organisation
                      Setting
                    </a>
                    <a href="#">
                      <i className="fa fa-user"></i>
                      <Link href="/user/profile">Profile Setting</Link>
                    </a>

                    <a onClick={logout}>
                      <i className="fa fa-sign-out"></i>Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <LanguageProvider>
      {head()}

      {nav()}

      {children}

      <VisitorCount />

      <FooterInfoBar />
      <Footer />
    </LanguageProvider>
  );
};

export default Layout;
