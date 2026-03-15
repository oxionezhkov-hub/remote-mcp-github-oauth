const GITHUB_API_BASE = "https://api.github.com";

export async function githubRequest(
	path: string,
	token: string,
	options?: {
		method?: string;
		body?: unknown;
		accept?: string;
	},
): Promise<Response> {
	const {
		method = "GET",
		body,
		accept = "application/vnd.github+json",
	} = options ?? {};

	return fetch(`${GITHUB_API_BASE}${path}`, {
		method,
		headers: {
			Authorization: `Bearer ${token}`,
			"User-Agent": "github-mcp-server",
			Accept: accept,
			...(body ? { "Content-Type": "application/json" } : {}),
		},
		...(body ? { body: JSON.stringify(body) } : {}),
	});
}
