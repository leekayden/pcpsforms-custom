import React from "react";
import "../components/feedback/style.css";

function Redirect() {
  var code = document.getElementById("code").value;
  if (code === "help") {
    window.location.href =
      "https://pcps-forms.vercel.app/pdfs/pcpsforms-instruction-manual/";
  } else if (code === "fTTmr") {
    window.location.href =
      "./forms/p3actualccaselectionandallocationexercise/";
  } else if (code === "location") {
    window.location.href = "./location";
  } else if (code === "feedback") {
    window.location.href = "./feedback";
  } else {
    alert(
      "Error: Code not found :(! Please check your cases or contact your teacher.\nType 'help' for support:)"
    );
  }
}

function Home() {
  return (
    <div>
      <br></br>
      {/* Main component */}
      <div className="card" style={{ width: "60%" }}>
        <div className="line-top" />
        <div className="card-body">
          <img
            src="https://pcpsforms.cf/site-logo.png"
            alt="pcps logo"
            width="400"
            height="94"
          />
          <h1 className="card-title" id="greet">
            Welcome to PCPSForms!
          </h1>
          <p className="card-text">Howdy! Welcome to PCPSForms!</p>
          <hr />
          <div id="content">
            <span className="font-weight-bold h3 text-center">&ldquo;</span>
            <span
              id="text"
              className="blockquote font-weight-bold text-center"
            ></span>
            <span className="font-weight-bold h3">&rdquo;</span>
            <div id="author" className="blockquote-footer text-center"></div>
          </div>
        </div>
      </div>
      {/* End main component */}
      <br></br>
      {/* Component */}
      <div className="card" style={{ width: "60%" }}>
        <div className="card-body">
          <h1 className="card-title">How to use?</h1>
          <p className="card-text">
            If you are lost right now, this section is for you!
          </p>
          <hr />
          <p className="card-text">
            <ol>
              <li>Enter the form code provided by your teacher</li>
              <li>Click 'Let's Go!'</li>
              <li>
                Read all the messages that your teacher has written and follow
                the instructions on the page.
              </li>
              <li>When you are done, click 'Next'</li>
              <li>Enter your responses for the form</li>
              <li>
                Once you are done entering your responses for the form, click
                'Submit'. Do not click on the button more than once as your
                response will be reflected multiple times in the database and
                the teachers will have a harder time collating your response.
              </li>
              <li>
                If you would like to edit your responses, please click on 'Click
                here!' to resubmit your response. (<strong>Note:</strong> The
                last response that has been submitted under your name will be
                taken as the final response. Contact your teacher for more
                information.
              </li>
              <li>Need help? Contact your teacher for assistance</li>
            </ol>
          </p>
        </div>
      </div>
      {/* End component */}
      <br></br>
      {/* Component */}
      <div className="card" style={{ width: "60%" }}>
        <div className="card-body">
          <h1 className="card-title">Enter form code</h1>
          <p className="card-text">
            Jump into the form!
          </p>
          <p className="card-text">
            <form>
              <div className="label-float">
                <input type="text" placeholder=" " id="code" />
                <label>Form code</label>
              </div>
              <br />
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={Redirect}
                >
                  Let's Go!
                </button>
              </div>
            </form>
          </p>
        </div>
      </div>
      {/* End component */}
      <br></br>
    </div>
  );
}

export default Home;
