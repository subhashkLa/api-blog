import axios from "axios";

const withOrg = (Page) => {
  const WithOrgUser = (props) => <Page {...props} />;
  WithOrgUser.getInitialProps = async (context) => {
    let users = null;
    let page = context.query.page || 1;
    let byCountry = context.query.org_country;
    let byState = context.query.org_state;
    let byCity = context.query.org_city;
    let byName = context.query.org_name;
    let type = context.query.type;
    let o = "";

    if (byCountry != "" && byCountry != "undefined") {
      o = `&orgInfo.org_country=${byCountry}`;
    }
    if (byState != "" && byState != "undefined") {
      o += `&orgInfo.org_state=${byState}`;
    }
    if (byCity != "" && byCity != "undefined") {
      o += `&orgInfo.org_city=${byCity}`;
    }

    if (byName != "" && byName != "undefined") {
      o += `&orgInfo.org_name[regex]=${byName}`;
    }

    try {
      const response = await axios.get(
        `${process.env.API}/orgs?role=${type}&page=${page}`
      );

      users = response.data.data;
    } catch (error) {
      console.log(error);
    }

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      userData: users,
      users,
      page,
      byCity,
      byCountry,
      byState,
      byName,
      type,
    };
  };

  return WithOrgUser;
};

export default withOrg;
