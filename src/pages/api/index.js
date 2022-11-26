const endpoints = {
  Version: "1.0.0",
  info: {
    title: "API",
  },
  paths: {
    post: ["/api/user", "/api/rank", "/api/user/:name", "/api/ship/:name"],
  },
};

export default async function handle(req, res) {
  if (req.method === "GET") {
    res.json(endpoints);
  }
}
