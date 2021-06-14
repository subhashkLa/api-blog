import Layout from "../../components/Layout";
// import styles from "../styles/Home.module.css";
import * as style from "../../styles/Home.module.css";
// import withOrg from "../pages/with/withOrg";

import VeganComponent from "../../components/org/VeganComponent";
import PostComponent from "../../components/org/PostComponent";

const Vegan = ({ posts, vegans }) => {
  return (
    <div>
      <Layout>
        <VeganComponent
          link="events?type=accommodation"
          name="Vegan Shop/Restaurants"
          vegans={vegans}
        />

        <PostComponent
          link="events?type=accommodation"
          name="Self-Repent Posted From Users"
          posts={posts}
        ></PostComponent>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const resVegans = await fetch(`${process.env.API}/vegans?limit=4`);
  const Vegans = await resVegans.json();

  const resPosts = await fetch(`${process.env.API}/posts?limit=4`);
  const posts = await resPosts.json();

  // Pass data to the page via props
  return {
    props: {
      posts: posts.data,
      vegans: Vegans.data,
    },
  };
}
export default Vegan;
