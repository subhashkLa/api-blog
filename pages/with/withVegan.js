import axios from "axios";
import { getCookie, isAuth } from "../../helpers/auth";
const withVegan = (Page) => {
  const WithVeganRes = (props) => <Page {...props} />;
  WithVeganRes.getInitialProps = async (context) => {
    let vegans = null;
    let page = context.query.page || 1;
    let byCountry = context.query.org_country;
    let byState = context.query.org_state;
    let byCity = context.query.org_city;
    let byName = context.query.org_name;
    let type = context.query.type;
    let o = "";

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

    const token = getCookie("token", context.req);
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    let favVegan;

    if (token) {
      const resUser = await fetch(`${process.env.API}/user`, {
        method: "GET",
        headers: myHeaders,
      });

      let userOut = await resUser.json();
      favVegan = userOut.fav_vegan;
    } else {
      favVegan = [];
    }

    try {
      const response = await axios.get(
        `${process.env.API}/vegans?type=${type}&page=${page}`
      );

      vegans = response.data.data;
    } catch (error) {
      console.log(error);
    }

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      veganData: vegans,
      page,
      byCity,
      byCountry,
      byState,
      byName,
      type,
      favVegan,
    };
  };

  return WithVeganRes;
};

export default withVegan;
