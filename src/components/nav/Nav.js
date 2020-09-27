import React from "react";

import "./Nav.scss";

const Nav = ({ season, active }) => {
	return (
		<div className="nav-container">
			<div className="logo-container">AniSeason</div>
			<div className="seasons-container">
				<a
					className="winter-2020"
					style={active === "winter" ? { color: "white" } : {}}
					onClick={() => season("winter")}
				>
					Winter
					<div>2020</div>
				</a>
				<a
					className="spring-2020"
					style={active === "spring" ? { color: "white" } : {}}
					onClick={() => season("spring")}
				>
					Spring
					<div>2020</div>
				</a>
				<a
					className="summer-2020"
					style={active === "summer" ? { color: "white" } : {}}
					onClick={() => season("summer")}
				>
					Summer
					<div>2020</div>
				</a>
				<a
					className="fall-2020"
					style={active === "fall" ? { color: "white" } : {}}
					onClick={() => season("fall")}
				>
					Fall
					<div>2020</div>
				</a>
			</div>
			<div className="login-container">
				<a className="login" href="/login">
					Login
				</a>
			</div>
		</div>
	);
};

export default Nav;
