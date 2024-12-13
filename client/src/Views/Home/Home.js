import React from "react";
import Navbaar from "../../Components/Navbaar/Navbaar";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="title-container d-flex flex-row">
        <img src="logo.png" alt="logo" className="farm-logo" />
        <h2 className="title fw-bold pt-3 ps-3 text-light">NatureStayHub</h2>
        <button className="login-btn text-color position-absolute top-0 end-0 rounded-5 border border-none px-2 py-1 my-3 mx-4 fw-semibold ">
          Login Now
        </button>
      </div>
      <Navbaar />
      <hr />
      <div className="container my-4">
        <h4 className="text-center fw-bold text-color">
          FIND YOUR PERFECT FARMHOUSE RETREAT IN NAGPUR!
        </h4>
        <h5 className="text-center text-color">
          Explore the best farmhouse rentals in Nagpur for family gatherings,
          weekend getaways or peaceful retreats. Whether you are looking for a
          cozy cottage or a luxury villa, we've got the perfect spot waiting for
          you.
        </h5>
      </div>
      <div className="container d-flex flex-row justify-content-center my-3">
        <img
          src="farm1.avif"
          alt="farm1-img"
          className="farm1-img rounded-3 ms-5 mt-5"
        />
        <img
          src="farm.avif"
          alt="farm-img"
          className="farm-img d-block mx-auto my-3 rounded-3"
        />
        <img
          src="farm1.avif"
          alt="farm1-img"
          className="farm1-img rounded-3 me-5 mt-5"
        />
      </div>
      <div className="features-container py-2">
        <h4 className="text-center fw-semibold">Why You Should Choose Us?</h4>
        <div className="d-flex justify-content-evenly my-5">
          <div className="feature-box border border-top-0 border-4 py-2 px-1 mb-3 rounded-4">
            <h5 className="fw-bold text-center">Handpicked Farmhouses</h5>
            <p className="text-center">
              We carefully select the best properties to ensure a memorable
              stay.
            </p>
          </div>
          <div className="feature-box border border-top-0 border-4 py-2 px-1 mb-3 rounded-4">
            <h5 className="fw-bold text-center">Safe and Secure</h5>
            <p className="text-center">Every rental is carefully vetted for your safety and comfort.</p>
          </div>
          <div className="feature-box border border-top-0 border-4 py-2 px-1 mb-3 rounded-4">
            <h5 className="fw-bold text-center">Easy Booking</h5>
            <p className="text-center">Seamless booking experience, no hidden fees, no surprises.</p>
          </div>
          <div className="feature-box border border-top-0 border-4 py-2 px-1 mb-3 rounded-4">
            <h5 className="fw-bold text-center">Exclusive Offers</h5>
            <p className="text-center">
              Find seasonal discounts and special packages for a relaxing
              escape.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
