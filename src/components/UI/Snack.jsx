import { Alert, Snackbar } from '@mui/material';

const Snack = ({ handleClose, isOpen, children }) => {
	return (
		<Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
			<Alert severity="info">{children}</Alert>
		</Snackbar>
	);
};

export default Snack;
