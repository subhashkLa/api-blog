import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
// import styles from "../styles/Home.module.css";
import * as style from "../../../styles/Home.module.css";
import axios from "axios";

function Favorite() {
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
                      <h2>Favorite</h2>
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

export default Favorite;
