import express from "express";
import mongoose from "mongoose";
import corsMiddleWare from "./middleware/cors.middleware.js";
import router from "./router.js";

const app = express();

app.use(corsMiddleWare);
app.use(express.json());
app.use("/api", router);

const PORT = 5000;
const DB_URL =
	"mongodb+srv://user:user@cluster0.i0gy1fe.mongodb.net/?retryWrites=true&w=majority";

async function startApp() {
	try {
		await mongoose.connect(DB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		app.listen(PORT, () => {
			console.log("SERVER STARTED ON PORT " + PORT);
		});
	} catch (e) {
		console.log(e);
	}
}

startApp();
