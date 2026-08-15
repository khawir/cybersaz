// Custom Node entry point for hosts that require one process to launch the
// app directly (e.g. cPanel's "Setup Node.js App" / Passenger on Namecheap
// shared hosting). Not used by Vercel — Vercel builds and serves the app
// through its own runtime and ignores this file.
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Ready on port ${port} (${dev ? "development" : "production"})`);
  });
});
