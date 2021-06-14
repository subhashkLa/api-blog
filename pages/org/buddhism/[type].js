import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import VeganComponent from "../../../components/org/VeganComponent";
// import styles from "../styles/Home.module.css";
import * as style from "../../../styles/Home.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import Sidebar from "../../../components/Sidebar";

const Buddhism = ({ productData, type, page }) => {
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
                      <VeganComponent vegans={products} type={type} />
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

export async function getServerSideProps(context) {
  let type = context.query.type;
  let page = context.query.page || 1;

  const resVegans = await fetch(
    `${process.env.API}/products?type=${type}&page=${page}`
  );
  const vegans = await resVegans.json();

  // Pass data to the page via props
  return {
    props: {
      productData: vegans.data,
      type,
      page,
    },
  };
}

export default Buddhism;
