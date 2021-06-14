import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
// import styles from "../styles/Home.module.css";
import * as style from "../../styles/Home.module.css";
import axios from "axios";

function SelfRepent() {
  return (
    <div>
      <Layout>
        <div className="self-repent">
          <div className="selt-repent-top">
            <img alt="#" src="img/bg-banner/selft-repent.jpg" />
          </div>
        </div>
        <div className="buddha-search-container">
          <div className="row">
            <div className="column top-search">
              <form className="example">
                <input
                  type="text"
                  placeholder="Search Key words"
                  name="search2"
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
                <input
                  type="text"
                  placeholder="Select Country"
                  name="search2"
                />
                <input type="text" placeholder="Select State" name="search2" />
                <input type="text" placeholder="City" name="search2" />
              </form>
            </div>
          </div>
        </div>

        <div className="self-repent-btm">
          <div className="self-repent-btm-container">
            <div className="top-title">
              <h1>HOW TO REPENT</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="left-img-box">
                  <img alt="#" src="img/bg-banner/self-repent/1.jpg" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="p-box-right-container">
                  <h1>Accepting Your Sin</h1>
                  <h4>Pray for the world</h4>
                  <p>
                    Remember: you can lie to other people and you can lie to
                    yourself, but you cannot lie to God. If you really want to
                    repent, you need to be humble and ready to admit that you
                    don't always do the right thing. Be humble before God and
                    know in your heart that He is right and you should live by
                    His word.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="p-box-left-container">
                  <h1>Be Humble</h1>
                  <h4>Pray for the world</h4>
                  <p>
                    Remember: you can lie to other people and you can lie to
                    yourself, but you cannot lie to God. If you really want to
                    repent, you need to be humble and ready to admit that you
                    don't always do the right thing. Be humble before God and
                    know in your heart that He is right and you should live by
                    His word
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="right-img-box">
                  <img alt="#" src="img/bg-banner/self-repent/2.jpg" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="left-img-box">
                  <img alt="#" src="img/bg-banner/self-repent/9.jpg" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="p-box-right-container">
                  <h1>Feel and trust God</h1>
                  <h4>Pray for the world</h4>
                  <p>
                    You have to believe that God can forgive you and help you to
                    lead a better life. If you do not, you will quickly lose
                    motivation to correct your mistakes. Changing bad habits and
                    righting wrongs is hard and you have to believe that God is
                    there with you or you will falter.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="p-box-left-container">
                  <h1>Reflect on Your Mind</h1>
                  <h4>Pray for the world</h4>
                  <p>
                    Before you repent, it's important to think about why what
                    you did was wrong. Blindly following God's word only shows
                    Him that you do not appreciate what you did was wrong. Think
                    about the people that you hurt when you sin and think about
                    what sin does to your soul.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="right-img-box">
                  <img alt="#" src="img/bg-banner/self-repent/10.jpg" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="left-img-box">
                  <img alt="#" src="img/bg-banner/self-repent/4.jpg" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="p-box-right-container">
                  <h1>Repent for the right reasons</h1>
                  <h4>Pray for the world</h4>
                  <p>
                    Make sure that when you repent, that you understand why. If
                    you think that you should repent so that God will grant you
                    some unrelated wish, you're not repenting for the right
                    reasons. Repent because it is good for your soul and will
                    make your life more enjoyable and productive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default SelfRepent;
