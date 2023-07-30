import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
	request: VercelRequest,
	response: VercelResponse
) {
	response.status(200).json({
		data: {
			time: new Date().toISOString(),
		},
		body: request.body,
		query: request.query,
		cookies: request.cookies,
	});
}
