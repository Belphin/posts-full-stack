import { Alert, AlertTitle, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setError } from "../../store/postsReducer";

const ErrorAlert = ({ error, dispatch }) => {
	const route = useNavigate();
	return (
		<>
			<Alert severity="error">
				<AlertTitle>Error</AlertTitle>
				{error.message}: <strong>{error.name}</strong>
			</Alert>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button
					variant="outlined"
					size="large"
					onClick={() => {
						dispatch(setError(false));
						route("/");
					}}>
					To main
				</Button>
			</div>
		</>
	);
};

export default ErrorAlert;
