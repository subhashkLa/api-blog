import "../styles/globals.css";
import "../styles/login.css";
import "../styles/signup.css";
import "../styles/messengerBox.css";
// import "../styles/selfrepent.css";
function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    require("jquery");
    require("popper.js");
    require("bootstrap/dist/js/bootstrap");
  }
  return <Component {...pageProps} />;
}

export default MyApp;
