import React, { useState } from "react";
import Nav from "./components/nav/Nav";
import Home from "./Pages/Home/Home";

export default function App() {
    const [year, setYear] = useState(2020);
    const [season, setSeason] = useState("fall");

    const handleYear = (year) => setYear(year);
    const handleSeason = (season) => setSeason(season);

    return (
        <>
            <Nav season={handleSeason} year={handleYear} active={season} />
            <Home year={year} season={season} />
        </>
    );
}
