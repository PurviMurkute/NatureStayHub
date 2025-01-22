import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbaar from "../../Components/Navbaar/Navbaar";

function About() {
  return (
    <div style={{ backgroundColor: "#fbf0ea" }}>
      <h4 className="fw-bold text-center pt-5">About US</h4>
      <hr/>
      <Navbaar/>
      <img src="about-icon.png" alt="about-icon" className="d-block mx-auto"/>
      <div className="features-container py-4 mt-2 mb-5" style={{backgroundColor: '#e2daeb'}}>
        <h4 className="text-center fw-semibold">Why You Should Choose Us?</h4>
        <div className="d-flex justify-content-evenly my-4">
          <div className="feature-box border border-top-0 border-4 py-2 px-1 mb-3 rounded-4">
            <h5 className="fw-bold text-center">Handpicked Farmhouses</h5>
            <p className="text-center">
              We carefully select the best properties to ensure a memorable
              stay.
            </p>
          </div>
          <div className="feature-box border border-top-0 border-4 py-2 px-1 mb-3 rounded-4">
            <h5 className="fw-bold text-center">Safe and Secure</h5>
            <p className="text-center">
              Every rental is carefully vetted for your safety and comfort.
            </p>
          </div>
          <div className="feature-box border border-top-0 border-4 py-2 px-1 mb-3 rounded-4">
            <h5 className="fw-bold text-center">Easy Booking</h5>
            <p className="text-center">
              Seamless booking experience, no hidden fees, no surprises.
            </p>
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
      <Footer/>
    </div>
  );
}

export default About;
