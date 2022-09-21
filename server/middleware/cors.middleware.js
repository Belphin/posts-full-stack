function corsMiddleWare(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
	next();
}

export default corsMiddleWare;
