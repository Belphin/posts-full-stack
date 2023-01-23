import PostPage from "../pages/PostPage";
import PostsList from "../pages/PostsList";

interface IRoute {
	patch: string;
	element: React.ComponentType;
}

export const routes: IRoute[] = [
	{ patch: "*", element: PostsList },
	{ patch: "/posts/:id", element: PostPage },
];
