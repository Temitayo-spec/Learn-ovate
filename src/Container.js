import React from "react";

//import components
import { Link } from "react-router-dom";
import CatalogNav from "./CatalogNav";
//import styles
import cardImg from "./images/prince-akachi-LWkFHEGpleE-unsplash 1.png";

function Container() {
  return (
    <div className="wrapper">
      <CatalogNav />
      <div className="main-content">
        <div className="search-input">
          <input type="text" name="filter search" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 21L16.65 16.65"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="navigate">
          <p className="active">Engineering</p>
          <p>Science</p>
          <p>Others</p>
        </div>

        <div className="cards">
          <div className="first-row">
            <div className="box">
              <div className="image">
                <img src={cardImg} alt="" />
              </div>
              <div className="box-body">
                <h2>Ordinary Differential Equation(GEG219)</h2>
                <p>This covers stuff about ODE and its properties.</p>
                <button type="button">
                  <Link to="/preview">Preview</Link>
                </button>
              </div>
            </div>

            <div className="box">
              <div className="image">
                <img src={cardImg} alt="" />
              </div>
              <div className="box-body">
                <h2>Ordinary Differential Equation(GEG219)</h2>
                <p>This covers stuff about ODE and its properties.</p>
                <button type="button">
                  <Link to="/preview">Preview</Link>
                </button>
              </div>
            </div>

            <div className="box">
              <div className="image">
                <img src={cardImg} alt="" />
              </div>
              <div className="box-body">
                <h2>Ordinary Differential Equation(GEG219)</h2>
                <p>This covers stuff about ODE and its properties.</p>
                <button type="button">
                  <Link to="/preview">Preview</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="box">
              <div className="image">
                <img src={cardImg} alt="" />
              </div>
              <div className="box-body">
                <h2>Ordinary Differential Equation(GEG219)</h2>
                <p>This covers stuff about ODE and its properties.</p>
                <button type="button">
                  <Link to="/preview">Preview</Link>
                </button>
              </div>
            </div>

            <div className="box">
              <div className="image">
                <img src={cardImg} alt="" />
              </div>
              <div className="box-body">
                <h2>Ordinary Differential Equation(GEG219)</h2>
                <p>This covers stuff about ODE and its properties.</p>
                <button type="button">
                  <Link to="/preview">Preview</Link>
                </button>
              </div>
            </div>

            <div className="box">
              <div className="image">
                <img src={cardImg} alt="" />
              </div>
              <div className="box-body">
                <h2>Ordinary Differential Equation(GEG219)</h2>
                <p>This covers stuff about ODE and its properties.</p>
                <button type="button">
                  <Link to="/preview">Preview</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
