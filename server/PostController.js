import PostService from "./PostService.js";

class PostController {
	async create(req, res) {
		try {
			const post = await PostService.create(req.body);

			res.json(post);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getPage(req, res) {
		try {
			const { limit, page } = req.params;
			const posts = await PostService.getPage(limit, page);
			res.json(posts);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params;
			const post = await PostService.delete(id);
			return res.json(post);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

export default new PostController();
