import React from "react";
import img from "../assest/aid.png";
export default function Ads() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div class="card bg-dark text-white">
              <img src={img} class="card-img" alt="..." />
              <div class="card-img-overlay d-flex align-items-center justify-content-center ">
                  <span className="me-5">
                <h3>Free consultation with exceptional quality</h3>
                <p className="mt-4">Just one call away: +84 1102 2703</p>
                </span>
                <button className="btn border-light text-light ms-5  "style={{height:40}}>Get your consultation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
