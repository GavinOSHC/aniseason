import React from "react";

import "./Nav.scss";

const Nav = ({ season, active, year }) => {
    const renderNav = () => {
        return (
            <div className="nav-container">
                <div className="logo-container">AniSeason</div>
                <div className="seasons-container">
                    <div
                        role="button"
                        className="winter-2020 anchor"
                        style={active === "winter" ? { color: "white" } : {}}
                        onClick={() => {
                            season("winter");
                            year(2021);
                        }}
                    >
                        Winter
                        <div>2021</div>
                    </div>
                    <div
                        role="button"
                        className="spring-2020 anchor"
                        style={active === "spring" ? { color: "white" } : {}}
                        onClick={() => {
                            season("spring");
                            year(2020);
                        }}
                    >
                        Spring
                        <div>2020</div>
                    </div>
                    <div
                        role="button"
                        className="summer-2020 anchor"
                        style={active === "summer" ? { color: "white" } : {}}
                        onClick={() => {
                            season("summer");
                            year(2020);
                        }}
                    >
                        Summer
                        <div>2020</div>
                    </div>
                    <div
                        role="button"
                        className="fall-2020 anchor"
                        style={active === "fall" ? { color: "white" } : {}}
                        onClick={() => {
                            season("fall");
                            year(2020);
                        }}
                    >
                        Fall
                        <div>2020</div>
                    </div>
                </div>
                <div className="login-container">
                    <a className="login anchor" href="/login">
                        Login
                    </a>
                </div>
            </div>
        );
    };

    return <>{renderNav()}</>;
};

export default Nav;
