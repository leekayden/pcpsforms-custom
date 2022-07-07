import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


import feedback from "./components/feedback/feedback";
import feedbackpg2 from "./components/feedback/feedbackpg2";
import success from "./components/feedback/success";
import privacypolicy from "./components/privacypolicy";
import termsofuse from "./components/termsofuse";
import Home from "./components/Home";
import fttmr from "./components/forms/p3actualccaselectionandallocationexercise";

function App() {
  return(
    <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/feedback" component={feedback} />
      <Route exact path="/feedback/survey/" component={feedbackpg2} />
      <Route exact path="/feedback/survey/success" component={success} />
      <Route exact path="/privacy-policy/" component={privacypolicy} />
      <Route exact path="/terms-of-use/" component={termsofuse} />
      {/* Forms */}
      <Route exact path="/forms/p3actualccaselectionandallocationexercise" component={fttmr} />
    </div>
  </Router>
  )
}

render(<App />, document.getElementById("core"));

console.clear();