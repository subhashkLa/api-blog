import axios from "axios";
import { getCookie, isAuth } from "../../helpers/auth";
const withEvent = (Page) => {
  const WithEventRes = (props) => <Page {...props} />;
  WithEventRes.getInitialProps = async (context) => {
    let events = null;
    let page = context.query.page || 1;
    let type = context.query.type;
    let byName = context.query.name || "";
    let o = "";

    const token = getCookie("token", context.req);

    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    let favEvent;

    if (token) {
      const resUser = await fetch(`${process.env.API}/user`, {
        method: "GET",
        headers: myHeaders,
      });

      let userOut = await resUser.json();
      favEvent = userOut.fav_event;
    } else {
      favEvent = [];
    }

    try {
      const response = await axios.get(
        `${process.env.API}/events?type=${type}&title[regex]=${byName}&page=${page}`
      );

      events = response.data.data;
    } catch (error) {
      console.log(error);
    }

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      eventsData: events,
      page,
      favEvent,
      type,
    };
  };

  return WithEventRes;
};

export default withEvent;
