import React, { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import { connect } from "react-redux";
import { fetchAnime } from "../../actions";
import AnimeCard from "../../components/card/Card";
import Grid from "@material-ui/core/Grid";

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
    return (
      <section className="anime-chart">
        <div className="anime-container">
          <div className="TV">
            <h3 className="white">TV</h3>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              {renderTVanime()}
            </Grid>
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

  const renderTVanime = () => {
    const tv = anime.anime.filter(
      (anime) => anime.attributes.showType === "TV"
    );

    console.log(tv);
    return tv.map(({ id, attributes }) => (
      <Grid item xs={12} sm={6} md={3}>
        <AnimeCard name={attributes.titles.en_jp} />
      </Grid>
    ));
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
