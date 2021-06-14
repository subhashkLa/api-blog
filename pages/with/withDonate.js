import axios from "axios";
import { getCookie, isAuth } from "../../helpers/auth";

const withDonate = (Page) => {
  const WithDonateRes = (props) => <Page {...props} />;
  WithDonateRes.getInitialProps = async (context) => {
    let items = null;
    let page = context.query.page || 1;
    let search = context.query.search || "";
    let type = context.query.type;
    let o = "";
    const token = getCookie("token", context.req);
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    let favDonote;

    if (token) {
      const resUser = await fetch(`${process.env.API}/user`, {
        method: "GET",
        headers: myHeaders,
      });

      let userOut = await resUser.json();
      favDonote = userOut.fav_donate_item;
    } else {
      favDonote = [];
    }

    try {
      const response = await axios.get(
        `${process.env.API}/items?name[regex]=${search}&page=${page}`
      );

      items = response.data.data;
    } catch (error) {
      console.log(error);
    }

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      donatesData: items,
      page,
      search,
      favDonote,
    };
  };

  return WithDonateRes;
};

export default withDonate;
