import React from "react";
import "./style.css";

function success() {
  return (
    <div>
      <br></br>
      <div className="card" style={{ width: "60%" }}>
        <div className="card-body">
          <h1 className="card-title">Thank you!</h1>
          <hr></hr>
          <p>
            Thank you for participating in this survey! We hope that you have
            enjoyed your experience using PCPSForms! See you again😊!
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='/';
              }}
          >
            Back to home <span role="img" aria-label="Back to home :D">⬅️</span>
          </button>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default success;
