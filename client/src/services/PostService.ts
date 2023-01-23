import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPageOptions } from "../models/IPageOptions";
import { IPost, IPosts } from "../models/IPost";

export const postAPI = createApi({
	reducerPath: "postAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
	tagTypes: ["Post"],
	endpoints: (build) => ({
		fetchAllPosts: build.query<IPosts, IPageOptions>({
			query: ({ limit = 9, page = 1 }) => ({
				url: `/posts`,
				params: {
					limit,
					page,
				},
			}),
			providesTags: (result) => ["Post"],
		}),
		fetchOnePost: build.query<IPost, unknown>({
			query: (id) => ({
				url: `/posts/${id}`,
			}),
			providesTags: (result) => ["Post"],
		}),
		createPost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts`,
				method: "POST",
				body: post,
			}),
			invalidatesTags: ["Post"],
		}),
		updatePost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts`,
				method: "PUT",
				body: post,
			}),
			invalidatesTags: ["Post"],
		}),
		deletePost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts/${post._id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Post"],
		}),
	}),
});
