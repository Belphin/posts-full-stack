import { Alert, Snackbar } from '@mui/material';
import { setOpen } from '../store/snackReducer';

const Snack = ({ isOpen }) => {
	return (
		<Snackbar open={isOpen}>
			<Alert severity="info">Product added to cart!</Alert>
		</Snackbar>
	);
};

export default Snack;
