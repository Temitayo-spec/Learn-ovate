import React from "react";

import img2 from "./images/Component 1.png";
import { Link } from "react-router-dom";

const Content = () => (
  <div className="landing-content">
    <div className="landing-left">
      <div className="landing-texts">
        <header>Study on your schedule,</header>
        <header>Learn at your own pace,</header>
        <header>Online learning for students on campus.</header>
      </div>
      <div className="landing-buttons">
        <Link to="/catalog">OUR CATALOG</Link>
        <Link to="signup_0.html">GET STARTED</Link>
      </div>
      {/* <!-- <div className="dashboards">
                        <a href="./Student Dashboard/index.html">Student dashboard</a> <br>
                        <a href="./Instructor Dashbord - updated/index.html">Educator dashboard</a>
                    </div> --> */}
    </div>
    <div className="landing-right">
      <img src={img2} alt="Component"></img>
    </div>
  </div>
);

export default Content;
