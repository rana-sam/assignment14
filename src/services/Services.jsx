import React from "react";
import img from "../assest/img.png";
import img1 from "../assest/img1.png";
import img2 from "../assest/img2.png";
import img3 from "../assest/img3.png";
import img4 from "../assest/img4.png";
import img5 from "../assest/img5.png";
export default function Services() {
  return (
    <div>
      <div className="container mt-5 pt-5 pb-5 mb-5 border">
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-2 text-primary justify-content-center">
            <div className="border pt-3 pb-3 text-center">
              <img src={img} alt="" className="" />
              <br />
              <h5>Construction</h5>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="border bg-primary text-light pt-3 pb-3 text-center">
              <img src={img1} alt="" className="" />
              <br />
              <h5>Renovation</h5>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="border text-primary pt-3 pb-3 text-center">
              <img src={img2} alt="" className="" />
              <br />
              <h5>Consultation</h5>
            </div>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row mt-5 mb-5">
        <div className="col-1"></div>
          <div className="col-2  justify-content-center">
            <div className="border bg-primary text-light pt-3 pb-3 text-center">
              <img src={img3} alt="" className="" />
              <br />
              <h6>Repair Services</h6>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="border text-primary pt-3 pb-3 text-center">
              <img src={img4} alt="" className="" />
              <br />
              <h5>Architecture</h5>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="border bg-primary text-light text-primary pt-3 pb-3 text-center">
              <img src={img5} alt="" className="" />
              <br />
              <h5>Consultation</h5>
            </div>
          </div>
          <div className="col-2"></div>
        </div>

      </div>
    </div>
  );
}
