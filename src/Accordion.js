import React from "react";

import img10 from "./images/Ellipse 10.svg";
import img11 from "./images/Ellipse-FAQ-right.svg";

const Accordion = () => (
  <div>
    {/* <!-- Accordion row  -->

        <!--Accordion wrapper--> */}
    <header className="row-header mt-5">FAQ</header>

    <div className="row align-items-center">
      {/* <!-- Left eclipse --> */}
      <div className="col-md-2 d-none d-md-block">
        <img
          src={img10}
          className="faq-left-eclipse img-fluid float-right"
          alt="Blue Ellipse"
        ></img>
      </div>
      <div
        className="accordion md-accordion col-12 col-md-8"
        id="accordionEx"
        role="tablist"
        aria-multiselectable="true"
      >
        {/* <!-- Accordion card --> */}
        <div className="card">
          {/* <!-- Card header --> */}
          <div
            className="card-header acc-row-header"
            role="tab"
            id="headingOne1"
          >
            <a
              data-toggle="collapse"
              data-parent="#accordionEx"
              href="#collapseOne1"
              aria-expanded="true"
              aria-controls="collapseOne1"
            >
              <header className="mb-0">
                What is Learnovate ?<i className="material-icons" >south_east</i>
              </header>
            </a>
          </div>

          {/* <!-- Card body --> */}
          <div
            id="collapseOne1"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingOne1"
            data-parent="#accordionEx"
          >
            <div className="card-body">
              Learnovate is an online learning platform that hosts
              university-level courses. It focuses on courses that students take
              in their respective universities. The courses are taught by tutors
              the students are already familiar with.{" "}
            </div>
          </div>
        </div>
        {/* <!-- Accordion card -->

    <!-- Accordion card --> */}
        <div className="card">
          {/* <!-- Card header --> */}
          <div
            className="card-header acc-row-header"
            role="tab"
            id="headingTwo2"
          >
            <a
              className="collapsed"
              data-toggle="collapse"
              data-parent="#accordionEx"
              href="#collapseTwo2"
              aria-expanded="false"
              aria-controls="collapseTwo2"
            >
              <header className="mb-0">
                Is Learnovate good for me ?
                <i className="material-icons" >
                  south_east
                </i>
              </header>
            </a>
          </div>

          {/* <!-- Card body --> */}
          <div
            id="collapseTwo2"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingTwo2"
            data-parent="#accordionEx"
          >
            <div className="card-body">
              Yes, Learnovate is your go-to platform when it comes to effortless
              learning. Your tutors can monitor your performance using
              analytics. This allows for help to be provided where needed.
            </div>
          </div>
        </div>
        {/* <!-- Accordion card -->
        
        <!-- Accordion card --> */}
        <div className="card">
          {/* <!-- Card header --> */}
          <div
            className="card-header acc-row-header"
            role="tab"
            id="headingThree3"
          >
            <a
              className="collapsed "
              data-toggle="collapse"
              data-parent="#accordionEx"
              href="#collapseThree3"
              aria-expanded="false"
              aria-controls="collapseThree3"
            >
              <header className="mb-0">
                Why Learnovate
                <i className="material-icons">south_east</i>
              </header>
            </a>
          </div>

          {/* <!-- Card body --> */}
          <div
            id="collapseThree3"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingThree3"
            data-parent="#accordionEx"
          >
            <div className="card-body">
              We observed that students struggle with their learning process.
              Attending congested classNamees and tutorials daily hinder
              assimilation. Learnovate was created to provide students with a
              smooth learning process. There is always a tutor to ask questions
              from.{" "}
            </div>
          </div>
        </div>
        {/* <!-- Accordion card --> */}
      </div>
      <div className="col-md-2 d-none d-md-block">
        <img
          src={img11}
          className="ml-5 img-fluid faq-left-eclipse"
          alt="Blue Ellipse"
        ></img>
      </div>
    </div>
    {/* <!-- Accordion end--> */}
  </div>
);

export default Accordion;
