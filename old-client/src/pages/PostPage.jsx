import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, updatePost } from "../asyncActions/Posts";
import Loader from "../components/UI/Loader/Loader";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Modal from "../components/Modal/Modal";
import ErrorAlert from "../components/UI/ErrorAlert";

const PostPage = () => {
	const { id } = useParams();
	const route = useNavigate();
	const dispatch = useDispatch();
	const post = useSelector((state) => state.posts.currentPost);
	const isLoading = useSelector((state) => state.posts.isLoading);
	const error = useSelector((state) => state.posts.error);
	const [isModalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		dispatch(getPost(id));
	}, []);

	if (isLoading) return <Loader />;
	if (error) return <ErrorAlert error={error} dispatch={dispatch} />;

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
			<h1 className="post__title">{post.title}</h1>
			<p className="post__body">{post.body}</p>
			{isModalOpen && (
				<Modal
					onClick={(title, body) => {
						dispatch(updatePost({ title, body, _id: post._id }));
					}}
					closeModal={() => setModalOpen(false)}
				/>
			)}
		</div>
	);
};

export default PostPage;
