import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./store/index";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const store = setupStore();

const theme = createTheme({
	palette: {
		primary: {
			main: "#0288D1",
		},
		secondary: {
			main: "#EA5044",
		},
	},
});

root.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</ThemeProvider>
);
