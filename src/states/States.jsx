import React from "react";
import "./stateStyle.css";
import illu from "../assest/illus.png";
import illu1 from "../assest/illus1.png";
import illu2 from "../assest/illus2.png";
import illu3 from "../assest/illus3.png";
export default function () {
  return (
    <div>
      <div className="container border pb-5">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-5 pt-5  pb-5 ">
            <div className="row">
              <div className="col-12 d-flex ">
                <div className=" mt-5 pt-5 pe-5 w-50">
                  <img src={illu3} alt="" className="projectimg" />
                  <div className="border border-top-0 border-3">
                    <h2>123</h2>
                    <p className="border-start border-5 ps-2 border-warning">
                      Project Completed
                    </p>
                  </div>
                </div>
                <div className="w-50 pe-5 happy">
                  <img src={illu} alt="" className="happyimg" />
                  <div className="border border-top-0 border-3">
                    <h2>84</h2>
                    <p className="border-start border-5 ps-2 border-warning">
                      Happy Client
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 ms-5 d-flex">
                <div className="w-50 mt-2 pe-5 ms-5">
                  <img src={illu2} alt="" className="yearimg" />
                  <div className="border border-top-0 border-3">
                    <h2>30</h2>
                    <p className="border-start border-5 ps-2 border-warning">
                      Years In Business
                    </p>
                  </div>
                </div>
                <div className="w-50  pe-5 award">
                  <img src={illu1} alt="" className="awardimg" />
                  <div className="border border-top-0 border-3">
                    <h2>37</h2>
                    <p className="border-start border-5 ps-2 border-warning">
                      Award Wins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center align-items-center">
            <div className="text-primary w-75 ">
              <h1>30 Years Experience</h1>
              <p className="mt-5  mb-5">
                Our company has been the leading provided construction services
                to clients throughout the USA since 1988.
              </p>
              <button className="btn btn-primary ps-4 pe-4">
                  Contact Us
              </button>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}
