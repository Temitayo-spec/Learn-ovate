import React from "react";
import img1 from "./images/logo.svg";
import { Link } from "react-router-dom";
import "./catalog-style.css";
function CatalogNav() {
  return (
    <div className="catalog-nav">
      <header>
        <div className="logos">
          <img src={img1} alt="learnovate logo" />
        </div>
        <ul className="links">
          <li className="all">All</li>
          <li>
            <Link to="#">Year 1</Link>
          </li>
          <li>
            <Link to="#">Year 2</Link>
          </li>
          <li>
            <Link to="#">Year 3</Link>
          </li>
        </ul>
      </header>
      <nav className="nav-link">
        <h1>Courses</h1>
        <ul>
          <li>
            <Link to="#">Sign in</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Courses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CatalogNav;
