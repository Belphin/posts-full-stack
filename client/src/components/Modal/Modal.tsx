import React, { FC, useState } from "react";
import { Button, TextField } from "@mui/material";
import cl from "./Modal.module.css";

interface ModalProps {
	onClick: (title: string, body: string) => Promise<any>;
	closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ onClick, closeModal }) => {
	const [post, setPost] = useState({ title: "", body: "" });

	return (
		<div className={cl.wrapper} onClick={() => closeModal()}>
			<form className={cl.modal} onClick={(e) => e.stopPropagation()}>
				<TextField
					onChange={(e) =>
						setPost((prev) => ({ ...prev, title: e.target.value }))
					}
					value={post.title}
					label="Title"
					variant="outlined"
					sx={{ width: "70%" }}
				/>
				<TextField
					onChange={(e) =>
						setPost((prev) => ({ ...prev, body: e.target.value }))
					}
					value={post.body}
					label="Body"
					variant="outlined"
					sx={{ width: "70%" }}
				/>
				<Button
					variant="contained"
					color="success"
					size="large"
					onClick={() => {
						onClick(post.title, post.body);
						setPost({ title: "", body: "" });
						closeModal();
					}}>
					Create post
				</Button>
			</form>
		</div>
	);
};

export default Modal;
