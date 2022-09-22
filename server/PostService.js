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

	async getPost(id) {
		const post = await Post.findById(id);
		return post;
	}

	async delete(id) {
		const post = await Post.findByIdAndDelete(id);
		return post;
	}

	async update(post) {
		if (!post._id) throw new Error("id not found");
		const newPost = await Post.findByIdAndUpdate(post._id, post, {
			new: true,
		});
		return newPost;
	}

	async search(title) {
		const posts = await Post.find({ title: title });
		if (posts.length) {
			return posts;
		} else return [];
	}
}

export default new PostService();
