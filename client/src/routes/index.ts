import PostPage from "../pages/PostPage";
import Main from "../pages/Main";

interface IRoute {
	patch: string;
	element: React.ComponentType;
}

export const routes: IRoute[] = [
	{ patch: "*", element: Main },
	{ patch: "/posts/:id", element: PostPage },
];
