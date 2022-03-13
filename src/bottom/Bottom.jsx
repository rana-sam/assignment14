import React from "react";
import img1 from "../assest/Random.png";
import img2 from "../assest/TheBox.png";
import fac from "../assest/facebook.png";
import twit from "../assest/twiter.png";
import inimg from "../assest/in.png";
export default function Bottom() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-5 ms-5">
            <p>
              <span className="text-primary pe-3 mb-3">Address</span>6391 Elgin
              St. Celina, Delaware 10299
            </p>
            <p>
              <span className="text-primary pe-3 mb-3">Phone</span>+84 1102 2703
            </p>
            <p>
              <span className="text-primary pe-3 ">Email</span>hello@thebox.com
            </p>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className="col-5 ms-5 ps-5">
            <h5 className="text-primary">NEWSLETTER:</h5>
            <span className=" d-flex align-item-center mt-3">
              <input
                type="text"
                placeholder="Your Email Here"
                style={{ width: 300, height: 41 }}
              />{" "}
              <button
                className="btn w-25 ps-3 pe-3 ms-2"
                style={{ backgroundColor: "#F9995D" }}
              >
                Subsacribe
              </button>
            </span>
            <h5 className="text-primary mt-4 pt-3">Social:</h5>
            <img src={fac} alt="" />
            <img className="me-3 ms-3" src={inimg} alt="" />
            <img src={twit} alt="" />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}
