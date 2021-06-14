import axios from "axios";
import { getCookie, isAuth } from "../../helpers/auth";

const withOrg = (Page) => {
  const WithOrgUser = (props) => <Page {...props} />;
  WithOrgUser.getInitialProps = async (context) => {
    let users = null;
    let page = context.query.page || 1;
    let type = context.query.type;
    let search = context.query.search || "";

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
    } else {
      user = [];
    }

    let fav = null;

    if (type == "temple") {
      if (user.fav_temple) {
        fav = user.fav_temple;
      }
    } else {
      if (user.fav_charity) {
        fav = user.fav_charity;
      }
    }

    try {
      const response = await axios.get(
        `${process.env.API}/orgs?role=${type}&orgInfo.org_name[regex]=${search}&page=${page}`
      );

      users = response.data.data;
    } catch (error) {
      console.log(error);
    }

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      userData: users,
      users,
      name: "Temples",
      page,
      type,
      fav,
    };
  };

  return WithOrgUser;
};

export default withOrg;
