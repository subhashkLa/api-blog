import axios from "axios";

const withOrg = (Page) => {
  const WithOrgUser = (props) => <Page {...props} />;
  WithOrgUser.getInitialProps = async (context) => {
    let users = null;
    let page = context.query.page || 1;
    let type = context.query.type;
    let search = context.query.search;

    console.log(search);
    try {
      const response = await axios.get(
        // ?role=temple&orgInfo.org_name[regex]=Corporate
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
      search,
      type,
    };
  };

  return WithOrgUser;
};

export default withOrg;
