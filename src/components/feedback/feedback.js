import React from "react";
import "./style.css";

function feedback() {
  return (
    <div>
      <br></br>
      <div className="card" style={{ width: "60%" }}>
        <div className="line-top"></div>
        <div className="card-body">
          <img
            src="https://pcpsforms.cf/site-logo.png"
            alt="pcps logo"
            width="400"
            height="94"
          />
          <h1 className="card-title">PCPSForms Feedback</h1>
          <p className="card-text">
            We would love if you could give us some information about your
            experience using PCPSForms :D!
          </p>
          <hr></hr>
          <div className="form-group">
            <p>
              Dear users,
              <br />
              <br />
              Thank you for supporting this form! We hope that you can give us constructive feedback for us to help us improve the form for a better experience!
              <br />
              <p>Best regards,</p>
              <p>Kayden Lee</p>
              <p>Creator</p>
              <a
                href="mailto:kayden@cloudservetechcentral.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                kayden@cloudservetechcentral.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="card" style={{ width: "60%" }}>
        <div className="card-body">
          <h1 className="card-title">Let's go!</h1>
          <p className="card-text">
            <a
              type="button"
              className="btn btn-primary btn-lg"
              href="./feedback/survey/"
              rel="noopener noreferrer"
            >
              Enter the form &gt;
            </a>
          </p>
          <div className="form-group"></div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

export default feedback;