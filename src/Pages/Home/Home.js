import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAnime } from "../../actions";
import AnimeCard from "../../components/card/Card";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

import "./Home.scss";

const Home = ({ anime, loading, error, dispatch, year, season }) => {
    useEffect(() => {
        dispatch(fetchAnime(season, year));
    }, [dispatch, year, season]);

    const renderSkeleton = () => {
        return Array.from(new Array(15)).map((item) => {
            return (
                <Skeleton className="skeleton" variant="rect">
                    <AnimeCard />
                </Skeleton>
            );
        });
    };

    const renderLoading = () => {
        if (error) {
            return renderError();
        }
        return (
            <Grid
                container
                justify="center"
                direction="row"
                alignItems="center"
                spacing={2}
            >
                {renderSkeleton()}
            </Grid>
        );
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
                        <h3 className="type-heading white">TV</h3>
                        {loading ? (
                            renderLoading()
                        ) : (
                            <Grid
                                container
                                justify="center"
                                direction="row"
                                alignItems="center"
                                spacing={2}
                            >
                                {renderTVanime()}
                            </Grid>
                        )}
                    </div>
                    <div className="ONA">
                        <h3 className="type-heading black top-padding">ONA</h3>
                        {loading ? (
                            renderLoading()
                        ) : (
                            <Grid
                                container
                                justify="center"
                                direction="row"
                                alignItems="center"
                                spacing={2}
                            >
                                {renderONAanime()}
                            </Grid>
                        )}
                    </div>
                    <div className="Movies">
                        <h3 className="type-heading black top-padding">
                            Movies
                        </h3>
                        {loading ? (
                            renderLoading()
                        ) : (
                            <Grid
                                container
                                justify="center"
                                direction="row"
                                alignItems="center"
                                spacing={2}
                            >
                                {renderMoviesanime()}
                            </Grid>
                        )}
                    </div>
                </div>
            </section>
        );
    };

    const renderTVanime = () => {
        const tv = anime.anime.filter(
            (anime) => anime.attributes.showType === "TV"
        );
        return tv.map(({ id, attributes }) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
                <AnimeCard
                    name={attributes.titles.en_jp}
                    image={attributes.posterImage.small}
                    des={attributes.description}
                    videoID={attributes.youtubeVideoId}
                />
            </Grid>
        ));
    };

    const renderONAanime = () => {
        const tv = anime.anime.filter(
            (anime) => anime.attributes.showType === "ONA"
        );
        return tv.map(({ id, attributes }) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
                <AnimeCard
                    name={attributes.titles.en_jp}
                    image={attributes.posterImage.small}
                    des={attributes.description}
                    videoID={attributes.youtubeVideoId}
                />
            </Grid>
        ));
    };

    const renderMoviesanime = () => {
        const tv = anime.anime.filter(
            (anime) => anime.attributes.showType === "movie"
        );
        return tv.map(({ id, attributes }) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
                <AnimeCard
                    name={attributes.titles.en_jp}
                    image={attributes.posterImage.small}
                    des={attributes.description}
                    videoID={attributes.youtubeVideoId}
                />
            </Grid>
        ));
    };

    return <div className="home-page">{renderGrid()}</div>;
};

const mapstateToProps = (state) => {
    return {
        anime: state.animeReducer.anime,
        loading: state.animeReducer.loading,
        error: state.animeReducer.error,
    };
};

export default connect(mapstateToProps)(Home);
