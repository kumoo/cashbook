import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer: () => express.Express = () => {
	const app = express();
	app
		.disable("x-powered-by")
		.use(morgan("dev"))
		.use(urlencoded({ extended: true }))
		.use(json())
		.use(cors())
		.get("/message/:name", (req, res) => {
			return res.json({ message: `hello ${req.params.name}` });
		})
		.get("/healthz", (req, res) => {
			return res.json({ message: `now: ${new Date()}` });
		});

	return app;
};
