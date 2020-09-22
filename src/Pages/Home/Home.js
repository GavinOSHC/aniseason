import React, { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import { connect } from "react-redux";
import { fetchAnime } from "../../actions";

import "./Home.scss";

const Home = ({ anime, loading, error, dispatch }) => {
	const [year, setYear] = useState(2020);
	const [season, setSeason] = useState("winter");

	useEffect(() => {
		dispatch(fetchAnime(season, year));
	}, [year, season]);

	const renderLoading = () => {
		if (error) {
			console.log("error");
		}
		return <div>Loading....</div>;
	};

	const renderError = () => {
		return <div>Error</div>;
	};

	const renderGrid = () => {
		if (error) return renderError();
		console.log(anime);
		return (
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
		);
	};

	return (
		<div className="home-page">
			<Nav />
			{loading ? renderLoading() : renderGrid()}
		</div>
	);
};

const mapstateToProps = (state) => {
	return {
		anime: state.animeReducer.anime,
		loading: state.animeReducer.loading,
		error: state.animeReducer.error,
	};
};

export default connect(mapstateToProps)(Home);
