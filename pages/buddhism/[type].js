import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import BuddhismComponent from "../../components/org/BuddhismComponent";
import * as style from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const Buddhism = ({ productData, type, page }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [haveData, setHaveData] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

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
        <div className="animation-container">
          <div className="animation-content">
            <div className="row">
              <div className="col">
                <div className="animation">
                  <img alt="#" src="/img/logo/banh-xe-phap.gif" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="buddhism-search-bar-container">
          <div className="buddhism-search-bar-content">
            <div className="row">
              <div className="column top-search">
                <form className="example">
                  <input
                    type="text"
                    placeholder="Search Key words"
                    name="search2"
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="main-video-container">
          <div className="container-fluid">
            <div className="row">
              <div className="column">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      onClick={() => router.push(`/buddhism/videos`)}
                    >
                      VIDEOS
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      onClick={() => router.push(`/buddhism/audios`)}
                    >
                      AUDIOS
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                      onClick={() => router.push(`/buddhism/books`)}
                    >
                      BOOKS
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            <BuddhismComponent products={products} type={type} />

            {loading && <h1>Loading..</h1>}
            {haveData && (
              <button
                onClick={() =>
                  router.push(`/buddhism/${type}?page=${parseInt(page) + 1}`)
                }
              >
                Load more
              </button>
            )}
            {!haveData && <h3>No more data</h3>}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  let type = context.query.type;
  let page = context.query.page || 1;

  const resProducts = await fetch(
    `${process.env.API}/products?type=${type}&page=${page}`
  );
  const products = await resProducts.json();

  // Pass data to the page via props
  return {
    props: {
      productData: products.data,
      type,
      page,
    },
  };
}

export default Buddhism;
