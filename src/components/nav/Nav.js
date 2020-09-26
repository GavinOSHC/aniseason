import React from "react";

import "./Nav.scss";

const Nav = ({ season }) => {
	return (
		<div className="nav-container">
			<div className="logo-container">AniSeason</div>
			<div className="seasons-container">
				<a className="winter-2020" onClick={() => season("winter")}>
					Winter
					<div>2020</div>
				</a>
				<a className="spring-2020" onClick={() => season("spring")}>
					Spring
					<div>2020</div>
				</a>
				<a className="summer-2020" onClick={() => season("summer")}>
					Summer
					<div>2020</div>
				</a>
				<a className="fall-2020" onClick={() => season("fall")}>
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
