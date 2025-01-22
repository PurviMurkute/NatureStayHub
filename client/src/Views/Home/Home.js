import React from "react";
import Navbaar from "../../Components/Navbaar/Navbaar";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import { farmhouse_data } from "./../../Config";
import FarmData from "../FarmData/FarmData";

function Home() {
  return (
    <div className="home-container" style={{ backgroundColor: "#f8f2ee" }}>
      <div className="title-container d-flex flex-row ">
        <img src="logo.png" alt="logo" className="farm-logo" />
        <h2 className="title fw-bold pt-1 ps-0">NatureStayHub</h2>
        <button className="login-btn position-absolute top-0 end-0 rounded-5 border border-none px-2 py-1 my-3 mx-4 fw-semibold">
          Login Now
        </button>
      </div>
      <hr />
      <Navbaar />
      <hr />
      <div className="container my-4">
        <h4 className="text-center fw-semibold">
          FIND YOUR PERFECT FARMHOUSE RETREAT IN NAGPUR!
        </h4>
        <h5 className="text-center">
          Explore the best farmhouse rentals in Nagpur for family gatherings,
          weekend getaways or peaceful retreats. Whether you are looking for a
          cozy cottage or a luxury villa, we've got the perfect spot waiting for
          you.
        </h5>
        <h3 className="text-center fw-semibold my-4">
          Relax. Refresh. Rediscover.
        </h3>
      </div>
      <div className="container d-flex flex-row justify-content-center mt-3 mb-5">
        <img
          src="farm3.avif"
          alt="farm1-img"
          className="farm2-img rounded-3 mt-5"
        />
        <img
          src="farm2.avif"
          alt="farm1-img"
          className="farm1-img rounded-3 mt-5"
        />
        <img
          src="farm.avif"
          alt="farm-img"
          className="farm-img d-block mx-auto my-3 rounded-3"
        />
        <img
          src="farm4.jpg"
          alt="farm1-img"
          className="farm1-img rounded-3 mt-5"
        />
        <img
          src="farm1.avif"
          alt="farm1-img"
          className="farm2-img rounded-3 mt-5"
        />
      </div>
      <h4 className="text-center fw-semibold p-3">FARMHOUSES IN NAGPUR</h4>
      <div className="row">
        <div className="col-8">
          {farmhouse_data.map((farmObj, i) => {
            const { title, image, address } = farmObj;

            return <FarmData image={image} title={title} address={address} />;
          })}
        </div>
        <div className="col-4 farm-search-form">
          <h5>Search Farmhouse</h5>
          <form>
            <input type="text" placeholder="Enter formhouse name"></input>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
