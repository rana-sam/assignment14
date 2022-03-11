import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import icon from "../assest/icons.png";
import icon1 from "../assest/icon.png";
export default function Reasons() {
  return (
    <div>
      <div className="container mt-5 pt-5 mb-5 pb-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center pb-5">
            <h1>Our Reputation</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3 border pt-3">
            <img src={icon} alt="" className="mb-3" />
            <h3>Best Services</h3>
            <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
          </div>
          <div className="col-1"></div>
          <div className="col-3 border pt-3">
            <img src={icon} alt="" className="mb-3" />
            <h3>Best Teams</h3>
            <p>Cursus semper tellus volutpat aliquet lacus. </p>
          </div>
          <div className="col-1"></div>
          <div className="col-3 border pt-3">
            <img src={icon1} alt="" className="mb-3" />
            <h3>Best Designs</h3>
            <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}
