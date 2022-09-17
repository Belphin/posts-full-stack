import { Alert, AlertTitle } from '@mui/material';

const AlertError = ({ children }) => {
	return (
		<Alert severity="error">
			<AlertTitle>Error</AlertTitle>
			{children.name + ': '}
			<strong>{children.message}</strong>
		</Alert>
	);
};

export default AlertError;
