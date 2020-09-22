import React from "react";
import ReactDOM from "react-dom";

import Home from "./Pages/Home/Home";

import "typeface-roboto";
import "./index.scss";

ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
	document.getElementById("root")
);
