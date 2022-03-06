import React from "react";

export default function Cta() {
  return (
    <div>
      <div
        className="container mt-5 pt-5 pb-3"
        style={{ backgroundColor: "#F6F8F7" }}
      >
        <div className="row justify-content-center text-center">
          <div className="col-2"></div>
          <div className="col-5 ">
            <h1>What can us do for you?</h1>
            <p className="fs-5">
              We are ready to work on a project of any complexity, whether it’s
              commercial or residential.
            </p>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-2">
            <input
              className="mb-3"
              type="text"
              placeholder="Your Name"
              required
            />
            <input type="text" placeholder="Reason For Contacting" required />
          </div>
          <div className="col-2">
            <input className="mb-3" type="text" placeholder="Email" required />
            <input type="text" placeholder="Phone" required />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <textarea
              className="mt-3"
              type="text"
              placeholder="Message"
              style={{ width: 410 }}
            />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row mb-5 mt-4">
          <div className="col-12 text-center align-item-center">
            <button className="btn btn-primary w-25 ">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
