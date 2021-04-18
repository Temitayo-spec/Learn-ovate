import React, { useState } from "react";

// import "./js/indexScript2";

import img1 from "./images/logo.svg";

function open() {
  const nav_links = document.querySelector("nav.navbar ul");
    nav_links.style.display = "flex";
}

function close() {
  const nav_links = document.querySelector("nav.navbar ul");
    nav_links.style.display = "none"
}

function NavComp() {
  return (
    <div className="Nav-Comp">
      <header>
        {/* <!-- Logo --> */}
        <div className="logo">
          <a href="index.html">
            <img src={img1} alt="Learnovate Logo"></img>
          </a>
        </div>
        {/* <!-- Toggle icon --> */}
        <i
          className="material-icons nav-toggler"
          onClick={() => {
            open();
          }}
        >
          menu
        </i>
      </header>
      <ul className="nav-links">
        <i
          className="material-icons nav-close"
          onClick={() => {
            close();
          }}
        >
          clear
        </i>
        <li>
          <a href="login.html" className="signin">
            Sign in
          </a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Our offer</a>
        </li>
        <li>
          <a href="#">Message us</a>
        </li>
      </ul>
    </div>
  );
}

export default NavComp;
