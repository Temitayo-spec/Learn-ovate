import React from "react";


import NavComp from "./NavComp";
import Content from "./Content";

const Nav = () => (
	<header className="landing-section">
		<nav className="navbar">
			<NavComp />
		</nav>
		<Content />
	</header>
);

export default Nav;
