import { Alert, AlertTitle } from "@mui/material";

const InfoAlert = ({ children }) => {
	return (
		<Alert severity="info">
			<AlertTitle>Info</AlertTitle>
			{children}
		</Alert>
	);
};

export default InfoAlert;
