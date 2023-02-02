import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Modal from "../components/Modal/Modal";

const PostPage = () => {
	const route = useNavigate();
	const { id } = useParams();
	const [isModalOpen, setModalOpen] = useState(false);
	const { data: post, error, isLoading } = postAPI.useFetchOnePostQuery(id);
	const [updataPost] = postAPI.useUpdatePostMutation();

	return (
		<div className="post">
			<div className="post__buttons">
				<Button
					sx={{ width: "15%" }}
					variant="contained"
					onClick={() => route("/")}>
					<ArrowBackIosIcon />
					Back
				</Button>
				<Button
					sx={{ width: "15%" }}
					variant="outlined"
					onClick={() => setModalOpen(true)}>
					Update
				</Button>
			</div>
			<h1 className="post__title">{post?.title}</h1>
			<p className="post__body">{post?.body}</p>
			{isModalOpen && (
				<Modal
					onClick={(title, body) =>
						updataPost({ _id: id, title, body } as IPost)
					}
					closeModal={() => setModalOpen(false)}
				/>
			)}
		</div>
	);
};

export default PostPage;
