import React, { memo, useRef } from "react";
import { Button, TextField } from "@mui/material";
import cl from "./Modal.module.css";

const Modal = memo(({ onClick, closeModal }) => {
	const title = useRef();
	const body = useRef();

	return (
		<div className={cl.wrapper} onClick={() => closeModal()}>
			<form className={cl.modal} onClick={(e) => e.stopPropagation()}>
				<TextField
					onChange={(e) => (title.current = e.target.value)}
					value={title.current}
					label="Title"
					variant="outlined"
					sx={{ width: "70%" }}
				/>
				<TextField
					onChange={(e) => (body.current = e.target.value)}
					value={body.current}
					label="Body"
					variant="outlined"
					sx={{ width: "70%" }}
				/>
				<Button
					variant="contained"
					color="success"
					size="large"
					onClick={() => {
						onClick(title.current, body.current);
						closeModal();
					}}>
					Create post
				</Button>
			</form>
		</div>
	);
});

export default Modal;
