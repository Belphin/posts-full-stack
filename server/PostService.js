import Post from "./Post.js";

class PostService {
	async create(post) {
		const createdPost = await Post.create(post);
		return createdPost;
	}

	async getPage(limit, page) {
		const posts = await Post.find()
			.skip((page - 1) * limit)
			.limit(limit);
		return posts;
	}

	async delete(id) {
		const post = await Post.findByIdAndDelete(id);
		return post;
	}
}

export default new PostService();
