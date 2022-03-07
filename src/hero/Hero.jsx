import React from "react";
import hero from "../assest/Hero.png";
import next from "../assest/Next.png";
import back from "../assest/Back.png";
export default function Hero() {
  return (
    <div>
      <div className="container">
        <div class="card">
          <img
            src={hero}
            class="card-img"
            alt="..."
            style={{ height: 524, width: "100%" }}
          />
          <div class="card-img-overlay">
            <div className="row  " style={{ height: 500, width: "100%" }}>
              <div className="col-6 d-flex align-items-center  ps-5 pe-5">
                <h1 className=" ps-5 pe-5" style={{ fontSize: 60 }}>
                  Building things is our mission.
                </h1>
              </div>
              <div className="col-6 position-relative">
                <div class="position-absolute bottom-0 end-0">
                  <div
                    className="bg-primary text-light text-center"
                    style={{ width: 260, height: 93 }}
                  >
                    <h6>Feature Projects</h6>
                    <p>The National University of Architecture</p>
                  </div>
                  <div className="mt-2">
                    <span className="bg-dark text-light  ps-5 pe-5 pt-2 pb-2 me-1">
                      Back
                    </span>
                    <span className="bg-dark text-light  ps-5 pe-5 pt-2 pb-2">
                      Next
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
