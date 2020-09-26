import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./configureStore";

import App from "./App";

import "typeface-roboto";
import "./index.scss";

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
