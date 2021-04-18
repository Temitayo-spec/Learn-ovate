import React from "react";

//import styles
import "./preview.css";

import cardImg from "./images/prince-akachi-LWkFHEGpleE-unsplash 1.png";
//import Component
import CatalogNav from "./CatalogNav";
window.addEventListener("resize", () => {
  if (window.location.href === "/preview") {
    const select = document.querySelector(".catalog-nav header");
    select.style.width = "25%";
  }
});
function Preview() {
  return (
    <div>
      <CatalogNav />
      <div className="main-context">
        <div className="full-image">
          <img src={cardImg} alt="" />
        </div>
        <div className="body">
          <header>
            <div className="title">
              <h2>Ordinary Differential Equation (GEG219)</h2>
              <p>This covers stuff about ODE and its properties.</p>
            </div>
            <p className="blue">
              3 <span>tutors</span>
            </p>
          </header>
          <div className="timeline">
            <div className="bar">
              <div className="circle active"></div>
              <p>Start</p>
            </div>
            <div className="bar">
              <div className="circle"></div>
              <p>Week 1</p>
            </div>
            <div className="bar">
              <div className="circle"></div>
              <p>Week 2</p>
            </div>
            <div className="bar">
              <div className="circle"></div>
              <p>Week 3</p>
            </div>
            <div className="bar">
              <div className="circle"></div>
              <p>Week 4</p>
            </div>
            <div className="bar">
              <div className="circle"></div>
              <p>Week 5</p>
            </div>
            <div className="bar">
              <div className="circle"></div>
              <p>Week 6</p>
            </div>
            <div className="bar">
              <div className="circle"></div>
              <p>Week 7</p>
            </div>
            <div className="bar">
              <div className="circle"></div>
              <p>Week 8</p>
            </div>
          </div>

          <div className="goals">
            <div className="weekly">
              <h2>Weekly goals</h2>
              <p>This covers stuff about ODE and its properties</p>
            </div>
            <p className="color">Set goals</p>
          </div>
          <div className="week-one">
            <h3>Week 1</h3>
            <hr />
          </div>
          <div className="content">
            <h2>Introduction to Cauchy's Integral Formula</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
