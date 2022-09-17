import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import { store } from './store';

const theme = createTheme({
	palette: {
		primary: {
			main: '#0288D1',
		},
		secondary: {
			main: '#EA5044',
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
);

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
	module.hot.accept();
}
