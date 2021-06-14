import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
// import styles from "../styles/Home.module.css";
import * as style from "../../../styles/Home.module.css";
import withDonate from "../../withUser/withDonate";
import DonateItemComponent from "../../../components/org/DonateItemComponent";
import Sidebar from "../../../components/Sidebar";

import { useRouter } from "next/router";
const DonateItem = ({
  donatesData,
  name,
  page,
  byCity,
  byState,
  byCountry,
  byName,
  type,
}) => {
  const router = useRouter();
  const [donates, setDonates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [haveData, setHaveData] = useState(false);
  const [filter, setFilter] = useState({
    name: byName,
    country: byCountry,
    state: byState,
    city: byCity,
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
    setDonates([]);
    // adding event listeners on mount here
    return () => {
      // cleaning up the listeners here
    };
  }, [filter]);

  useEffect(() => {
    if (donatesData.length != "0") {
      setHaveData(true);
      setDonates((pre) => [...pre.concat(donatesData)]);
      router.events.on("routeChangeStart", startLoading);
      router.events.on("routeChangeComplete", stopLoading);
      return () => {
        router.events.off("routeChangeStart", startLoading);
        router.events.off("routeChangeComplete", stopLoading);
      };
    } else {
      setHaveData(false);
    }
  }, [donatesData]);

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
                      <DonateItemComponent
                        link="events?type=accommodation"
                        name="Donated Items nearby"
                        donates={donates}
                      ></DonateItemComponent>
                    </div>
                    {loading && <h1>Loading..</h1>}
                    {haveData && (
                      <button
                        onClick={() =>
                          router.push(
                            `/org/donate-items?page=${parseInt(page) + 1}`
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
export default withDonate(DonateItem);
