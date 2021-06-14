import axios from "axios";
import { getCookie, isAuth } from "../../helpers/auth";
const withEvent = (Page) => {
  const WithEventRes = (props) => <Page {...props} />;
  WithEventRes.getInitialProps = async (context) => {
    let events = null;
    let page = context.query.page || 1;
    let byCountry = context.query.org_country;
    let byState = context.query.org_state;
    let byCity = context.query.org_city;
    let byName = context.query.org_name;
    let type = context.query.type;
    let o = "";
    const token = getCookie("token", context.req);

    // context.req.headers = { Authorization: `Bearer ${getCookie("token")}` };

    console.log(isAuth());
    if (byCountry != "" && byCountry != "undefined") {
      o = `&country=${byCountry}`;
    }
    if (byState != "" && byState != "undefined") {
      o += `&state=${byState}`;
    }
    if (byCity != "" && byCity != "undefined") {
      o += `&city=${byCity}`;
    }

    if (byName != "" && byName != "undefined") {
      o += `title[regex]=${byName}`;
    }

    try {
      const response = await axios.get(
        `${process.env.API}/org/events?page=${page}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      events = response.data.data[0];
      console.log(events);
    } catch (error) {
      console.log(error);
    }

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      eventsData: events.events,
      name: "Temples",
      page,
      byCity,
      byCountry,
      byState,
      byName,
      type,
    };
  };

  return WithEventRes;
};

export default withEvent;
