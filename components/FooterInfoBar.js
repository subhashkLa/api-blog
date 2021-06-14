import React, { useContext } from "react";
import { Text, LanguageContext } from "../containers/Language";

export default function FooterInfoBar() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div className="covid-alert-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-7 col-md-12">
            <h2>COVID 19 Rising Fund for (a Charity to help )</h2>
            <p>Help us support their work-make a donation</p>
          </div>
          <div className="col-lg-4 col-md-12 text-center">
            <a href="#" className="donate-btn">
              Donate Now
            </a>
          </div>
          <div className="col-lg-1 col-md-12"></div>
        </div>
      </div>
    </div>
  );
}
