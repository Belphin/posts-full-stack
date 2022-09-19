import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../router';

const AppRouter = () => {
	return (
		<Routes>
			{publicRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.element}
					exact={route.exact}
				/>
			))}
		</Routes>
	);
};

export default AppRouter;
