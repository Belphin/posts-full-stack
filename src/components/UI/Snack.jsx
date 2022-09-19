import { Alert, Snackbar } from '@mui/material';

const Snack = ({ isOpen, children }) => {
	return (
		<Snackbar open={isOpen}>
			<Alert severity="info">{children}</Alert>
		</Snackbar>
	);
};

export default Snack;
