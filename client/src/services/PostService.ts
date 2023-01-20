import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPageOptions } from "../models/IPageOptions";
import { IPosts } from "../models/IPost";

export const postAPI = createApi({
	reducerPath: "postAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
	endpoints: (build) => ({
		fetchAllPosts: build.query<IPosts, IPageOptions>({
			query: ({ limit = 5, page = 1 }) => ({
				url: "/posts",
				params: {
					limit,
					page,
				},
			}),
		}),
	}),
});
