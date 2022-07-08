import React from "react";
import "./style.css";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

function feedbackpg2() {
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <div>
      <br></br>
      {/* Main form component */}
      <div className="card" style={{ width: "60%" }}>
        <div className="line-top" />
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
          <hr></hr>
          <div className="form-group">
            <p>
              Fields marked with a red asterisk{" "}
              <span style={{ color: "red" }}>*</span> are required
            </p>
          </div>
        </div>
      </div>
      {/* End main form component */}

      <br></br>

      <form action="https://forms.cloudservetechcentral.com/process.php" method="post">
        <input type="hidden" name="form_tools_initialize_form" value="1" />
        <input type="hidden" name="form_tools_form_id" value="7" />

        {/* Form component */}
        <div className="card" style={{ width: "60%" }}>
          <div className="card-body">
            <h1 className="card-title">Your details</h1>
            <hr></hr>
            <div className="form-group">
              <label for="exampleInputEmail1">
                Email address<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control form-control-lg col-7"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                name="email"
                required
              />
              {/*
                <div class="label-float ">
                  <input type="text" placeholder=" " id="email" aria-describedby="emailHelp" name="email" className="col-17" required />
                  <label>Email</label>
                </div>
              */}
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">
                Full Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="name"
                className="form-control form-control-lg col-7"
                id="exampleInputPassword1"
                placeholder="Full Name"
                name="name"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                Please enter your real name :)
              </small>
            </div>
          </div>
        </div>
        {/* End form component */}

        <br></br>

        {/* Form component */}
        <div className="card" style={{ width: "60%" }}>
          <div className="card-body">
            <h1 className="card-title">Your feedback</h1>
            <p className="card-text">
              Here is where you can tell us all your feedback :D!
            </p>
            <hr></hr>
            <div className="form-group">
              <label for="customRange1" class="form-label">
                How do you rate PCPSForms?
                <span style={{ color: "red" }}>*</span>
              </label>
              <small id="emailHelp" className="form-text text-muted">
                To the right:&nbsp;
                <span role="img" aria-label="Luv it">
                  🤩
                </span>
                <br />
                To the left:&nbsp;
                <span role="img" aria-label="Hate it">
                  😤
                </span>
              </small>
              <br></br>
              <input
                type="range"
                class="form-range"
                min="0"
                max="10"
                id="customRange2"
                name="range"
                required
              />
              <br></br>
              {/* <label>😤</label>
            
            <label>🤩</label> */}
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                What new features would you like to see in PCPSForms and how
                can we improve the form in its current state?
              </label>
              <textarea
                className="form-control form-control-lg col-7"
                id="exampleFormControlTextarea1"
                rows="2"
                name="improve"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                What do you dislike about the form?
              </label>
              <textarea
                className="form-control form-control-lg col-7"
                id="exampleFormControlTextarea1"
                rows="2"
                name="dislike"
              ></textarea>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input form-check-input-lg"
                id="exampleCheck1"
                name="reply"
              />
              <label
                className="form-check-label"
                for="exampleCheck1"
                title="Allow us to reply to your feedback (we may or may not get back to you)"
              >
                Get back to me regarding feedback via email
              </label>
            </div>
          </div>
        </div>
        {/* End form component */}

        <br></br>

        {/* Main form component */}
        <div className="card" style={{ width: "60%" }}>
          <div className="card-body">
            <h1 className="card-title">
              End of the form!{" "}
              <span role="img" aria-label="Yay! End of the form!">
                😊🥳🎈
              </span>
            </h1>
            <h2>Remember to click Submit!</h2>
            <p className="card-text">
              Thank you for giving us feedback! We promise we'll take your
              feedback and implement your awesome suggessions if it is
              appropriate :)!
            </p>
            <hr></hr>
            <button className="btn btn-primary btn-lg" required>
              Submit
            </button>
            {/* <Stack spacing={2} sx={{ width: "100%" }}>
              <Button variant="outlined btn btn-primary btn-lg" onClick={handleClick} endIcon={<SendIcon />}>
                Submit
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Form submitted!
                </Alert>
              </Snackbar>
              <Alert severity="error">This is an error message!</Alert>
              <Alert severity="warning">This is a warning message!</Alert>
              <Alert severity="info">This is an information message!</Alert>
              <Alert severity="success">This is a success message!</Alert>
            </Stack> */}
          </div>
        </div>
        {/* End main form component */}

        <br></br>

        <br></br>
      </form>
    </div>
  );
}

export default feedbackpg2;
