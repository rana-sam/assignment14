import React from "react";
import img from "../assest/aboutus.png";
export default function AboutUS() {
  return (
    <div>
      <div className="container position-relative  mt-5 pt-5">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-6">
            <img src={img} alt="" height={440} width={600} />
          </div>
          <div className="col-4 position-absolute start-50 mt-4 ">
              <div className="bg-primary ps-4 text-light me-5 pe-2">
            <h2 className="pt-2">About Us</h2>
            <p className="pt-3 pb-4">
              For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.<br/><br/>
              
               We’ve matured into an industry leader and trusted resource
              for those seeking quality, innovation and reliability when
              building in the U.S.
            </p>
            <button className="btn text-primary btn-light mb-4">More on Our History</button>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}
