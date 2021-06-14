import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
// import styles from "../styles/Home.module.css";
import * as style from "../../styles/Home.module.css";
import axios from "axios";

function SoulLearning() {
  return (
    <div>
      <Layout>
        <div class="row" id="body-row">
          <Sidebar />
          <div className="col">
            <div className="describ-box">
              <div className="org-ful">
                <div className="org-full-container">
                  <div className="column">
                    <div className="title-training-two">
                      <h5>SOUL LEARNING PROGRAMS</h5>
                    </div>
                    <div className="container-two">
                      <div className="self_learing_main_section">
                        <div className="col-12">
                          <div className="section-training">
                            <div className="self_learing_section-head">
                              <h5>
                                Understanding The Soul
                                <span>
                                  <a
                                    href="#"
                                    className="#"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Share"
                                  >
                                    <i className="fa fa-share"></i>
                                  </a>
                                  <a
                                    href="#"
                                    className="#"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Registered"
                                  >
                                    <i className="fa fa-registered"></i>
                                  </a>
                                </span>
                              </h5>
                            </div>
                            <div className="self_learing_section-btm">
                              <h5>
                                +<span className="space-between"></span>What is
                                the soul?
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Lesson 1
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Lesson 2
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Lesson 3
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Review
                                Learning
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Exam
                              </h5>
                              <h5>
                                +<span className="space-between"></span>{" "}
                                Completing, Feedback and Qualifying
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container-two">
                      <div className="self_learing_main_section">
                        <div className="col-12">
                          <div className="section-training">
                            <div className="self_learing_section-head">
                              <h5>
                                How To Understand Our Soul?
                                <span>
                                  <a
                                    href="#"
                                    className="#"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Share"
                                  >
                                    <i className="fa fa-share"></i>
                                  </a>
                                  <a
                                    href="#"
                                    className="#"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Registered"
                                  >
                                    <i className="fa fa-registered"></i>
                                  </a>
                                </span>
                              </h5>
                            </div>
                            <div className="self_learing_section-btm">
                              <h5>
                                +<span className="space-between"></span>What is
                                the soul?
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Lesson 1
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Lesson 2
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Lesson 3
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Review
                                Learning
                              </h5>
                              <h5>
                                +<span className="space-between"></span>Exam
                              </h5>
                              <h5>
                                +<span className="space-between"></span>{" "}
                                Completing, Feedback and Qualifying
                              </h5>
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
        </div>
      </Layout>
    </div>
  );
}

export default SoulLearning;
