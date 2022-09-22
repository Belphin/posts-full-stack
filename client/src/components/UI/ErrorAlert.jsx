import { Alert, AlertTitle } from "@mui/material";

const ErrorAlert = ({ error }) => {
	return (
		<Alert severity="error">
			<AlertTitle>Error</AlertTitle>
			{error.message}: <strong>{error.name}</strong>
		</Alert>
	);
};

export default ErrorAlert;
