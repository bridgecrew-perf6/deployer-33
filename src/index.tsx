import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Config from "./pages/config";
import Deploy from "./pages/deploy";
import Navbar from "./components/navbar";

const theme = createTheme({
	palette: {
		primary: {
			main: "#4dd0e1",
		},
		secondary: {
			main: "#f57c00",
		},
		warning: {
			main: "#fffc00",
		},
		background: {
			default: "#0e0606",
			paper: "#f9f8ff",
		},
		text: {
			primary: "#f9f8ff",
			secondary: "#f9f8ff",
			// disabled: styles.ttt,
			// hint: styles.tttt,
		},
	},
});

const Main: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div>
					<Navbar
						pages={[
							{ name: "Home", linkTo: "/" },
							{ name: "Config", linkTo: "/config" },
							{ name: "Deploy", linkTo: "/deploy" },
						]}
					/>
					<Routes>
						<Route path="/" element={<Home />}>
							<Route index element={<Home />} />
						</Route>
						<Route path="/config" element={<Config />} />
						<Route path="/deploy" element={<Deploy />} />
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Main />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
