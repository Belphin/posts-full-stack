import mongoose from "mongoose";

const Post = new mongoose.Schema({
	author: { type: String, required: true },
	title: { type: String, required: true },
	body: { type: String, required: true },
});

export default mongoose.model("Post", Post);
