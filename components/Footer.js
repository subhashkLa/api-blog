import React, { useContext } from "react";
import { Text, LanguageContext } from "../containers/Language";

export default function Footer() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <footer className="mainfooter">
      <div className="container-fluid">
        <div className="footlogo">
          <img alt="#" src="/img/logofoot.png" />
          <p className="tagline">
            Live like water, gentle like land Sống như nước, hiền như đất
          </p>
        </div>
        <div className="foot-nav">
          <a href="#"> {dictionary ? dictionary.home : "Home"} </a>
          <a href="#">Buddhist Temples </a>
          <a href="#"> Charities </a>
          <a href="#"> Buddhism </a>
          <a href="#"> Self Refuge </a>
          <a href="#"> Self-Repent </a>
          <a href="#"> Vegan Shop/Restaurants</a>
          <a href="#"> Soul Learning</a>
        </div>
        <div className="foot-nav">
          <a href="#">Buddhism Online Training </a>
          <a href="#">Awakening Bell </a>
        </div>
        <div className="foot-social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="footcopy">
          <p>
            &copy; 2020 YPhat - All Right reserved!
            <a href="#"> Privacy & Policy </a>
            <a href="#"> Terms & Condition</a>
          </p>
        </div>
        <div className="vistior">
          <p>
            No of Visitors
            <span>4822</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
