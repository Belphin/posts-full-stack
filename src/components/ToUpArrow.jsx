import { KeyboardDoubleArrowUp } from '@mui/icons-material';
import { Button } from '@mui/material';

const ToUpArrow = () => {
	return (
		<Button
			onClick={() => window.scrollTo(0, 0)}
			id="ToUpArrow"
			variant="contained">
			<KeyboardDoubleArrowUp fontSize="large" />
		</Button>
	);
};

export default ToUpArrow;
