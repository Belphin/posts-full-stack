import { Alert, Snackbar } from '@mui/material';

const Snack = ({ isOpen }) => {
	return (
		<Snackbar open={isOpen}>
			<Alert severity="info">Product added to cart!</Alert>
		</Snackbar>
	);
};

export default Snack;
