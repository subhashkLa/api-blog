import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
// import styles from "../styles/Home.module.css";
import * as style from "../../styles/Home.module.css";
import withVegan from "../with/withVegan";
import VeganComponent from "../../components/org/VeganComponent";

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
  favVegan,
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
  }, [filter]);

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
                  <option value="Gleichnershire">Gleichnershire</option>
                  <option value="Greenfelderchester">Greenfelderchester</option>
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

                <select name="city" onChange={filterHandle} placeholder="city">
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

        <VeganComponent
          name="Vegan Shop/Restaurants"
          vegans={vegans}
          fav={favVegan}
        />
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
export default withVegan(VeganType);
