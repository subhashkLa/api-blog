import axios from "axios";
import { getCookie, isAuth } from "../../helpers/auth";
const withDonate = (Page) => {
  const WithDonateRes = (props) => <Page {...props} />;
  WithDonateRes.getInitialProps = async (context) => {
    let items = null;
    let page = context.query.page || 1;
    let byCountry = context.query.org_country;
    let byState = context.query.org_state;
    let byCity = context.query.org_city;
    let byName = context.query.org_name;
    let type = context.query.type;
    let o = "";
    const token = getCookie("token", context.req);

    console.log(context.query);
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
        `${process.env.API}/org/donate-items?page=${page}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      items = response.data.data[0];
    } catch (error) {
      console.log(error);
    }

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      donatesData: items.donateItems,
      page,
      byCity,
      byCountry,
      byState,
      byName,
      type,
    };
  };

  return WithDonateRes;
};

export default withDonate;
