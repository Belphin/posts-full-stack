import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPostsPage } from "../asyncActions/Posts";
import Modal from "../components/Modal/Modal";
import PostList from "../components/PostList";

const Main = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.items);
	const isLoading = useSelector((state) => state.posts.isLoading);
	const page = useSelector((state) => state.posts.page);
	const limit = useSelector((state) => state.posts.limit);
	const [isModalOpen, setModalOpen] = useState(false);
	const [postValue, setPostValue] = useState({ title: "", body: "" });

	useEffect(() => {
		dispatch(getPostsPage(page, limit));
	}, []);

	const onCreatePost = () => {
		setModalOpen(false);
		dispatch(createPost(postValue));
	};

	return (
		<>
			<Container sx={{ mt: 2 }}>
				<Button
					variant="contained"
					color="success"
					onClick={() => setModalOpen(true)}>
					New post
				</Button>
				<PostList isLoading={isLoading} posts={posts} />
			</Container>
			{isModalOpen && (
				<Modal
					postValue={postValue}
					setPostValue={setPostValue}
					onClick={onCreatePost}
					closeModal={() => {
						setModalOpen(false);
						setPostValue({ title: "", body: "" });
					}}
				/>
			)}
		</>
	);
};

export default Main;
