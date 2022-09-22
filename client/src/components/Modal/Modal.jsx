import React from "react";
import { Button, TextField } from "@mui/material";
import cl from "./Modal.module.css";

const Modal = ({ onClick, closeModal, setPostValue, postValue }) => {
	return (
		<div className={cl.wrapper} onClick={() => closeModal()}>
			<form className={cl.modal} onClick={(e) => e.stopPropagation()}>
				<TextField
					onChange={(e) =>
						setPostValue({ ...postValue, title: e.target.value })
					}
					value={postValue.title}
					label="Title"
					variant="outlined"
					sx={{ width: "70%" }}
				/>
				<TextField
					onChange={(e) => setPostValue({ ...postValue, body: e.target.value })}
					value={postValue.body}
					label="Body"
					variant="outlined"
					sx={{ width: "70%" }}
				/>
				<Button
					variant="contained"
					color="success"
					size="large"
					onClick={() => {
						onClick();
						closeModal();
					}}>
					Create post
				</Button>
			</form>
		</div>
	);
};

export default Modal;
