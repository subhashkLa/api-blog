import Layout from "../components/Layout";
import { getCookie, isAuth } from "../helpers/auth";
// import styles from "../styles/Home.module.css";
import * as style from "../styles/Home.module.css";
// import withOrg from "../pages/with/withOrg";
import OrgComponent from "../components/org/OrgComponent";
import EventComponent from "../components/org/EventComponent";
import DonateItemComponent from "../components/org/DonateItemComponent";
import PostComponent from "../components/org/PostComponent";
import VeganComponent from "../components/org/VeganComponent";

import Slider from "../components/Slider";

const Home = ({
  charity,
  temple,
  eventRis,
  eventAcom,
  eventTrain,
  eventActivities,
  donateItem,
  posts,
  vegans,
  favCharity,
  favTemple,
  favEvent,
  favDonate,
  favVegan,
}) => {
  return (
    <div>
      <Layout>
        <Slider />

        <OrgComponent
          link="orgs/temple"
          type="temple"
          name="Buddhist Temples"
          users={temple}
          fav={favTemple}
        ></OrgComponent>
        <OrgComponent
          fav={favCharity}
          link="orgs/charity"
          name="Charities"
          users={charity}
          type="charity"
        ></OrgComponent>
        <EventComponent
          link="events/accommodation"
          name="
          Buddhist Classes and Meditation Classes"
          events={eventTrain}
          fav={favEvent}
        ></EventComponent>
        <EventComponent
          link="events/risingfund"
          name="Activities and Events"
          events={eventActivities}
          fav={favEvent}
        ></EventComponent>
        <EventComponent
          link="events/risingfund"
          name="Fund Raising Events"
          events={eventRis}
          fav={favEvent}
        ></EventComponent>
        <DonateItemComponent
          link="/donate-items"
          name="Donated Items nearby"
          donates={donateItem}
          fav={favDonate}
        ></DonateItemComponent>
        <PostComponent
          link="events/accommodation"
          name="Self-Repent Posted From Users"
          posts={posts}
        ></PostComponent>
        <VeganComponent
          link="/vegan"
          name="Vegan Shop/Restaurants"
          vegans={vegans}
          fav={favVegan}
        />
        <EventComponent
          link="events/accommodation"
          name="Free Accommodation"
          events={eventAcom}
          fav={favEvent}
        ></EventComponent>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const resCharity = await fetch(
    `${process.env.API}/orgs?role=charity&limit=4&select=_id,orgInfo,slug`
  );
  const charity = await resCharity.json();

  const token = getCookie("token", context.req);

  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  let user;

  if (token) {
    const resUser = await fetch(`${process.env.API}/user`, {
      method: "GET",
      headers: myHeaders,
    });

    let userOut = await resUser.json();
    user = userOut;
    console.log(user);
  } else {
    user = [];
  }

  const resTemple = await fetch(
    `${process.env.API}/orgs?role=temple&limit=4&select=_id,orgInfo,slug`
  );
  const temple = await resTemple.json();

  const resEventRis = await fetch(
    `${process.env.API}/events?type=risingfund&limit=4`
  );
  const eventRis = await resEventRis.json();

  const resEventAcom = await fetch(
    `${process.env.API}/events?type=accommodation&limit=4`
  );
  const eventAcom = await resEventAcom.json();

  const resEventTrain = await fetch(
    `${process.env.API}/events?type=training&limit=4`
  );
  const eventTrain = await resEventTrain.json();

  const resEventActivities = await fetch(
    `${process.env.API}/events?type=activities&limit=4`
  );

  const eventActivities = await resEventActivities.json();

  const resDonateItem = await fetch(`${process.env.API}/items?limit=8`);
  const donateItem = await resDonateItem.json();

  const resVegans = await fetch(`${process.env.API}/vegans?limit=4`);
  const Vegans = await resVegans.json();

  const resPosts = await fetch(`${process.env.API}/posts?limit=4`);
  const posts = await resPosts.json();

  // const location = useGeoLocation();
  // Pass data to the page via props

  let favCharity = [];
  let favTemple = [];
  let favEvent = [];
  let favDonate = [];
  let favVegan = [];
  if (user.fav_charity) {
    favCharity = user.fav_charity;
  }
  if (user.fav_temple) {
    favTemple = user.fav_temple;
  }

  if (user.fav_event) {
    favEvent = user.fav_event;
  }

  if (user.fav_donate_item) {
    favDonate = user.fav_donate_item;
  }

  if (user.fav_vegan) {
    favVegan = user.fav_vegan;
  }

  return {
    props: {
      favCharity,
      favTemple,
      favDonate,
      favEvent,
      favVegan,
      charity: charity.data,
      temple: temple.data,
      eventRis: eventRis.data,
      eventAcom: eventAcom.data,
      donateItem: donateItem.data,
      eventTrain: eventTrain.data,
      posts: posts.data,
      vegans: Vegans.data,
      eventActivities: eventActivities.data,
    },
  };
}
export default Home;
