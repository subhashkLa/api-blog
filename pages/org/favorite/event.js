import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import EventComponent from "../../../components/org/EventComponent";
// import styles from "../styles/Home.module.css";
import * as style from "../../../styles/Home.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import Sidebar from "../../../components/Sidebar";
import { getCookie } from "../../../helpers/auth";
const Event = ({ productData, type, page }) => {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [haveData, setHaveData] = useState(false);
  const [filter, setFilter] = useState({
    name: "",
  });
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const filterHandle = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFilter({ ...filter, [name]: value });
  };

  useEffect(() => {
    setProducts([]);
    // adding event listeners on mount here
    return () => {
      // cleaning up the listeners here
    };
  }, [type]);

  useEffect(() => {
    if (productData.length != "0") {
      setHaveData(true);
      setProducts((pre) => [...pre.concat(productData)]);
      router.events.on("routeChangeStart", startLoading);
      router.events.on("routeChangeComplete", stopLoading);
      return () => {
        router.events.off("routeChangeStart", startLoading);
        router.events.off("routeChangeComplete", stopLoading);
      };
    } else {
      setHaveData(false);
    }
  }, [productData]);

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

                    <div className="row">
                      <EventComponent
                        name="Events"
                        events={products}
                        type={type}
                      />
                    </div>
                    {loading && <h1>Loading..</h1>}
                    {haveData && (
                      <button
                        onClick={() =>
                          router.push(
                            `/admin/buddhism/${type}?page=${parseInt(page) + 1}`
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

export const getServerSideProps = async (context) => {
  let type = context.query.type || null;
  let page = context.query.page || 1;
  const token = getCookie("token", context.req);

  let resVegans = await axios.get(
    `${process.env.API}/org/fav/events?select=fav_event&page=${page}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        contentType: "application/json",
      },
    }
  );

  let vegans = await resVegans.data.data[0];

  console.log(vegans);

  // console.log(vegans.fav_event);
  // http://localhost:3000/org/favorite/buddism
  // Pass data to the page via props
  return {
    props: {
      productData: vegans.fav_event || null,
      type,
      page,
    },
  };
};

export default Event;
