import axios from "axios";
import { getCookie } from "../../helpers/auth";

const withAuth = (Page) => {
  const WithAuthUser = (props) => <Page {...props} />;
  WithAuthUser.getInitialProps = async (context) => {
    const token = getCookie("token", context.req);
    let user = null;

    if (token) {
      try {
        const response = await axios.get(`${process.env.API}/user`, {
          headers: {
            authorization: `Bearer ${token}`,
            contentType: "application/json",
          },
        });
        user = response.data;
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          user = null;
        }
      }
    }

    console.log(user);

    if (user === null) {
      // redirect
      context.res.writeHead(302, {
        Location: "/",
      });
      context.res.end();
    } else {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
        user,
        token,
      };
    }
  };

  return WithAuthUser;
};

export default withAuth;
