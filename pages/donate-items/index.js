import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
// import styles from "../styles/Home.module.css";
import * as style from "../../styles/Home.module.css";
import withDonate from "../with/withDonate";
import DonateItemComponent from "../../components/org/DonateItemComponent";

import { useRouter } from "next/router";
const DonateItem = ({
  donatesData,
  page,

  search,
  favDonote,
}) => {
  const router = useRouter();
  const [donates, setDonates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [haveData, setHaveData] = useState(false);
  const [filter, setFilter] = useState({
    name: search,
  });
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const filterHandle = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFilter({ ...filter, [name]: value });
  };

  useEffect(() => {
    if (filter.name) {
      router.push(`/donate-items?search=${filter.name}&page=${page}`);
    } else {
      router.push(`/donate-items`);
    }
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
        <div className="buddha-search-container">
          <div className="row">
            <div className="column top-search">
              <form className="example m-4">
                <input
                  type="text"
                  name="name"
                  onChange={filterHandle}
                  placeholder="Search Key words"
                />

                {/* <input type="text"  placeholder="City"  /> */}
              </form>
            </div>
          </div>
        </div>

        <DonateItemComponent
          link="events?type=accommodation"
          name="Donated Items nearby"
          donates={donates}
          fav={favDonote}
        ></DonateItemComponent>
        {loading && <h1>Loading..</h1>}
        {haveData && (
          <button
            onClick={() =>
              router.push(`/donate-items?page=${parseInt(page) + 1}`)
            }
          >
            Load more
          </button>
        )}
        {!haveData && <h3>No more data</h3>}
      </Layout>
    </div>
  );
};
export default withDonate(DonateItem);
