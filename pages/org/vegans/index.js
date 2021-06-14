import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
// import styles from "../styles/Home.module.css";
import * as style from "../../../styles/Home.module.css";
import withVegan from "../../withUser/withVegan";
import VeganComponent from "../../../components/org/VeganComponent";
import Sidebar from "../../../components/Sidebar";

import { useRouter } from "next/router";
const VeganType = ({
  veganData,
  name,
  page,
  byCity,
  byState,
  byCountry,
  byName,
  type,
}) => {
  const router = useRouter();
  const [vegans, setVegans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [haveData, setHaveData] = useState(false);
  const [filter, setFilter] = useState({
    name: byName,
    country: byCountry,
    state: byState,
    city: byCity,
    type: type,
  });
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const filterHandle = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFilter({ ...filter, [name]: value });
  };

  useEffect(() => {
    // console.log(filter);
    // &org_city=${filter.city}&org_state=${filter.state}&org_country=${filter.country}&org_name=${filter.name}
    // router.push(
    //   `/orgs/${type}&org_city=${filter.city}&org_state=${filter.state}&org_country=${filter.country}&org_name=${filter.name}&page=${page}`
    // );
    setVegans([]);
    // adding event listeners on mount here
    return () => {
      // cleaning up the listeners here
    };
  }, [type]);

  useEffect(() => {
    if (veganData.length != "0") {
      setHaveData(true);
      setVegans((pre) => [...pre.concat(veganData)]);
      router.events.on("routeChangeStart", startLoading);
      router.events.on("routeChangeComplete", stopLoading);
      return () => {
        router.events.off("routeChangeStart", startLoading);
        router.events.off("routeChangeComplete", stopLoading);
      };
    } else {
      setHaveData(false);
    }
  }, [veganData]);

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
                      <VeganComponent
                        name="Vegan Shop/Restaurants"
                        vegans={vegans}
                      />
                    </div>
                    {loading && <h1>Loading..</h1>}
                    {haveData && (
                      <button
                        onClick={() =>
                          router.push(
                            `/admin/vegan/${type}?page=${parseInt(page) + 1}`
                          )
                        }
                      >
                        Load more
                      </button>
                    )}
                    {!haveData && <h3>No more data</h3>}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default withVegan(VeganType);
