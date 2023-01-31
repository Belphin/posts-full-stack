import React, { useState, useEffect } from "react";
import { postAPI } from "../services/PostService";
import { Button, Container, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import PostList from "../components/PostList";
import { IPost } from "../models/IPost";
import Modal from "../components/Modal/Modal";

const Main = () => {
	const [page, setPage] = useState(1);
	const limit = 9;
	const { data, error, isLoading } = postAPI.useFetchAllPostsQuery({
		limit,
		page,
	});
	const [createPost] = postAPI.useCreatePostMutation();

	const handleCreate = async (title: string, body: string) => {
		await createPost({ title, body } as IPost);
	};
	const changePage = (e: unknown, value: number) => {
		setPage(value);
	};
	const [isModalOpen, setModalOpen] = useState(false);

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
							count={data?.maxCount ? Math.ceil(data?.maxCount / limit) : 0}
							page={page}
							variant="text"
							shape="rounded"
							color="primary"
							onChange={changePage}
							size="large"
						/>
					</Stack>
				</div>
				{data?.posts && <PostList posts={data.posts} />}
			</Container>
			{isModalOpen && (
				<Modal onCreate={handleCreate} closeModal={() => setModalOpen(false)} />
			)}
			<br />
		</>
	);
};

export default Main;
