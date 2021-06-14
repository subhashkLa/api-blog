import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
// import styles from "../styles/Home.module.css";
import * as style from "../../styles/Home.module.css";
import withOrg from "../with/withOrg";
import OrgComponent from "../../components/org/OrgComponent";

import { useRouter } from "next/router";
const Org = ({ userData, name, page, search, byName, type, fav }) => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [haveData, setHaveData] = useState(false);
  const [filter, setFilter] = useState({
    name: byName,
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
    if (filter.name) {
      router.push(`/orgs/${type}?search=${filter.name}&page=${page}`);
    } else {
      router.push(`/orgs/${type}`);
    }
    setUsers([]);
    // adding event listeners on mount here
    return () => {
      // cleaning up the listeners here
    };
  }, [filter]);

  useEffect(() => {
    setUsers([]);
    if (userData.length != "0") {
      setHaveData(true);
      setUsers((pre) => [...pre.concat(userData)]);
      router.events.on("routeChangeStart", startLoading);
      router.events.on("routeChangeComplete", stopLoading);
      return () => {
        router.events.off("routeChangeStart", startLoading);
        router.events.off("routeChangeComplete", stopLoading);
      };
    } else {
      setHaveData(false);
    }
  }, [userData]);

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

        <OrgComponent
          type={type}
          fav={fav}
          name={name}
          users={users}
        ></OrgComponent>
        {loading && <h1>Loading..</h1>}
        {haveData && (
          <button
            onClick={() =>
              router.push(`/orgs/${type}?page=${parseInt(page) + 1}`)
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
export default withOrg(Org);
