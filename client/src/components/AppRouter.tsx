import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";

const AppRouter = () => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route
					key={route.patch}
					path={route.patch}
					element={<route.element />}
				/>
			))}
		</Routes>
	);
};

export default AppRouter;
