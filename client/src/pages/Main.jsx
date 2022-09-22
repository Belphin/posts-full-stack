import { Button, Container, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPostsPage } from "../asyncActions/Posts";
import Modal from "../components/Modal/Modal";
import PostList from "../components/PostList";
import { setPage } from "../store/postsReducer";

const Main = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.items);
	const isLoading = useSelector((state) => state.posts.isLoading);
	const error = useSelector((state) => state.posts.error);
	const page = useSelector((state) => state.posts.page);
	const limit = useSelector((state) => state.posts.limit);
	const [isModalOpen, setModalOpen] = useState(false);
	const [postValue, setPostValue] = useState({ title: "", body: "" });

	useEffect(() => {
		updatePosts(page, limit);
	}, [page]);

	function updatePosts(page, limit) {
		dispatch(getPostsPage(page, limit));
	}

	const changePage = (event, value) => {
		dispatch(setPage(value));
	};

	return (
		<>
			<Container sx={{ mt: 2 }}>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<Button
						variant="contained"
						color="success"
						onClick={() => setModalOpen(true)}
						sx={{ mb: 2 }}>
						New post
					</Button>
					<Stack>
						<Pagination
							count={"auto"}
							page={page}
							variant="text"
							shape="rounded"
							color="primary"
							onChange={changePage}
						/>
					</Stack>
				</div>
				<PostList
					dispatch={dispatch}
					isLoading={isLoading}
					posts={posts}
					error={error}
					updatePosts={() => updatePosts(page, limit)}
				/>
			</Container>
			{isModalOpen && (
				<Modal
					postValue={postValue}
					setPostValue={setPostValue}
					onClick={async () => {
						await dispatch(createPost(postValue));
						updatePosts(page, limit);
					}}
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
