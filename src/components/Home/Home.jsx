import React from "react";
import Navbar from "../Navbar";
import welcome from "../../img/meeting.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
import Login from "../Login/Login";

const Home = ({ setlogin }) => {
  return (
    <div class="Home">
      <Navbar />

      <div className="welcome">
        <img src={welcome} />
        <div className="content">
          <div className="text">
            <h1>
              Telemedicine & chronic disease <br />
              monitoring services
            </h1>
            <p>
              "Welcome to our advanced telemedicine platform, where modern
              healthcare meets convenience and care. Our website offers a
              comprehensive and user-friendly solution for telemedicine and
              chronic disease monitoring services. We understand the challenges
              that individuals with chronic conditions face, and we're committed
              to bridging the gap between patients and healthcare professionals
              through cutting-edge technology. "
            </p>
          </div>
          {/* <div className="buttons">
            <button className="buttonin">
              <span >Book a call</span>
            </button>
            <button className="buttonout">
              <span>
                Get started
              </span>
            </button>
          </div> */}
          <div className="btns">
            <button className="btn1">Book a call</button>
            <button className="btn2" >Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
