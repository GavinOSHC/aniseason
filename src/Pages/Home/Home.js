import React from "react";
import Nav from "../../components/nav/Nav";

import "./Home.scss";

const Home = () => {
	return (
		<div className="home-page">
			<Nav />
			<section className="anime-chart">
				<div className="anime-container">
					<div className="TV">
						<h3 className="white">TV</h3>
					</div>
					<div className="Movies">
						<h3 className="white">TV</h3>
					</div>
					<div className="ONA">
						<h3 className="white">TV</h3>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
