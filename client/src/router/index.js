import Main from "../pages/Main";
import PostPage from "../pages/PostPage";

export const privateRoutes = [
	{ path: "*", element: <Main /> },
	{ path: "/post/:id", element: <PostPage /> },
];
