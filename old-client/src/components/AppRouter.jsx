import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "../router";

const AppRouter = () => {
	return (
		<Routes>
			{privateRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	);
};

export default AppRouter;
