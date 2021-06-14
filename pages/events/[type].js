import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
// import styles from "../styles/Home.module.css";
import * as style from "../../styles/Home.module.css";
import withEvent from "../with/withEvent";
import EventComponent from "../../components/org/EventComponent";

import { useRouter } from "next/router";
const Event = ({ eventsData, page, type, byName, favEvent }) => {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [haveData, setHaveData] = useState(false);
  const [filter, setFilter] = useState({
    name: byName,
    // country: byCountry,
    // state: byState,
    // city: byCity,
  });
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const filterHandle = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  useEffect(() => {
    console.log(filter);
    // &org_city=${filter.city}&org_state=${filter.state}&org_country=${filter.country}&org_name=${filter.name}
    if (filter.name) {
      router.push({
        pathname: "/events/" + type,
        query: { name: filter.name },
      });
    } else {
      router.push(`/events/${type}`);
    }

    setEvents([]);
    // adding event listeners on mount here
    return () => {
      // cleaning up the listeners here
    };
  }, [filter]);

  useEffect(() => {
    // console.log(eventsData);
    if (eventsData.length != "0") {
      setHaveData(true);
      setEvents((pre) => [...pre.concat(eventsData)]);
      router.events.on("routeChangeStart", startLoading);
      router.events.on("routeChangeComplete", stopLoading);
      return () => {
        router.events.off("routeChangeStart", startLoading);
        router.events.off("routeChangeComplete", stopLoading);
      };
    } else {
      setHaveData(false);
    }
  }, [eventsData]);

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

        <EventComponent
          link="events?type=accommodation"
          name="Free Accommodation"
          events={events}
          fav={favEvent}
        ></EventComponent>
        {loading && <h1>Loading..</h1>}
        {haveData && (
          <button
            onClick={() =>
              router.push(`/events/${type}?page=${parseInt(page) + 1}`)
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
export default withEvent(Event);
