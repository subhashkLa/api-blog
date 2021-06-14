import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
// import styles from "../styles/Home.module.css";
import * as style from "../../styles/Home.module.css";
import axios from "axios";

function SelfLearning() {
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
                    <div className="row">
                      <div className="title-training-two">
                        <h5>BUDDHISM ONLINE TRAINING PROGRAMS</h5>
                      </div>
                      <div className="container-two">
                        <div className="self_learing_main_section">
                          <div className="col-12">
                            <div className="section-training">
                              <div className="self_learing_section-head">
                                <h5>
                                  Understanding Buddhism as an Education for
                                  Living
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
                                  +<span className="space-between"></span>What
                                  Is Buddhism?
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  1
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  2
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  3
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
                        <div className="self_learing_main_section">
                          <div className="col-12">
                            <div className="section-training">
                              <div className="self_learing_section-head">
                                <h5>
                                  Enlightenment
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
                                  +<span className="space-between"></span>What
                                  is Enlightenment?
                                </h5>
                                <h5>
                                  +<span className="space-between"></span> Why
                                  do we need to be Enlightenment?
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  1
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  2
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  3
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

                        <div className="self_learing_main_section">
                          <div className="col-12">
                            <div className="section-training">
                              <div className="self_learing_section-head">
                                <h5>
                                  Meditation
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
                                  +<span className="space-between"></span>What
                                  is Meditation?
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Why do
                                  you need Meditation?
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  2
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  3
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
                        <div className="self_learing_main_section">
                          <div className="col-12">
                            <div className="section-training">
                              <div className="self_learing_section-head">
                                <h5>
                                  Advance Buddhism 1
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
                                  +<span className="space-between"></span>What
                                  Is Buddhism?
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  1
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  2
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  3
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
                        <div className="self_learing_main_section">
                          <div className="col-12">
                            <div className="section-training">
                              <div className="self_learing_section-head">
                                <h5>
                                  Advance Buddhism 2
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
                                  +<span className="space-between"></span>What
                                  is Advance Buddhism 2 benefits?
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  1
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  2
                                </h5>
                                <h5>
                                  +<span className="space-between"></span>Lesson
                                  3
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
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default SelfLearning;
