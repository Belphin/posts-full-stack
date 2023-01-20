import React from "react";
import PostItem from "./components/PostItem";
import { postAPI } from "./services/PostService";

function App() {
	const { data, error, isLoading } = postAPI.useFetchAllPostsQuery({
		limit: 5,
		page: 1,
	});

	return (
		<div>
			{isLoading && <div>Loading...</div>}
			{error && <div>Error</div>}
			{data?.posts.map((post) => (
				<PostItem key={post._id} post={post} />
			))}
		</div>
	);
}

export default App;
