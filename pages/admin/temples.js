import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
// import styles from "../styles/Home.module.css";
import * as style from "../../styles/Home.module.css";
import withOrg from "../with/withOrg";
import OrgComponent from "../../components/org/OrgComponent";
import { useRouter } from "next/router";
import Sidebar from "../../components/SidebarAdmin";
const Temples = ({
  userData,
  name,
  page,
  byCity,
  byState,
  byCountry,
  byName,
}) => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
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
    router.push(
      `/admin/temples?org_city=${filter.city}&org_state=${filter.state}&org_country=${filter.country}&org_name=${filter.name}`
    );
    setUsers([]);
    // adding event listeners on mount here
    return () => {
      // cleaning up the listeners here
    };
  }, [filter]);

  useEffect(() => {
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
        <div class="row" id="body-row">
          <Sidebar />
          <div className="col">
            <section>
              <div className="describ-box">
                <div className="org-ful">
                  <div className="org-full-container">
                    <div className="row">
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

                              <select
                                name="country"
                                onChange={filterHandle}
                                placeholder="Country"
                              >
                                <option value="">Select Country</option>
                                <option value="West Manuel">West Manuel</option>
                                <option value="Warrenmouth">Warrenmouth</option>
                                <option value="Gleichnershire">
                                  Gleichnershire
                                </option>
                                <option value="Greenfelderchester">
                                  Greenfelderchester
                                </option>
                              </select>
                              <select
                                name="state"
                                onChange={filterHandle}
                                placeholder="State"
                              >
                                <option value="">Select State</option>
                                <option value="punjab">punjab</option>
                                <option value="haryana">haryana</option>
                              </select>

                              <select
                                name="city"
                                onChange={filterHandle}
                                placeholder="city"
                              >
                                <option value="">Select City</option>
                                <option value="chandigarh">chandigarh</option>
                                <option value="tohana">tohaan</option>
                                <option value="hisar">hisar</option>
                                <option value="patiala">chandigarh</option>
                              </select>

                              {/* <input type="text"  placeholder="City"  /> */}
                            </form>
                          </div>
                        </div>
                      </div>

                      <OrgComponent name={name} users={users}></OrgComponent>
                      {loading && <h1>Loading..</h1>}
                      {haveData && (
                        <button
                          onClick={() =>
                            router.push(`/orgs/temples?page=${page + 1}`)
                          }
                        >
                          Load more
                        </button>
                      )}
                      {!haveData && <h3>No more data</h3>}
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
};
export default withOrg(Temples);
