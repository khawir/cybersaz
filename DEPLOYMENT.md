# Deploying to Namecheap Stellar (cPanel shared hosting)

This app is a Next.js server, not a static site — it can't be uploaded as a
plain `dist`/`build` folder. cPanel's **Setup Node.js App** tool (Passenger)
runs it as a long-lived Node process instead. `server.js` at the repo root
is the entry point Passenger launches; it's only used on cPanel-style hosts
and is ignored by Vercel.

## 1. Get the code onto the server

Either:

- **cPanel → Git Version Control** → clone `https://github.com/khawir/cybersaz.git`
  directly on the server (recommended — makes future updates a `git pull`), or
- Upload a zip of the repo (exclude `node_modules/`, `.next/`, `.git/`) and
  extract it via cPanel File Manager.

## 2. Create the Node.js app

cPanel → **Setup Node.js App** → Create Application:

- **Node.js version**: latest available 20.x or 22.x LTS
- **Application mode**: Production
- **Application root**: the folder you cloned/extracted into (e.g. `cybrixaz`)
- **Application URL**: the domain or subdomain to serve it on
- **Application startup file**: `server.js`

Click Create. cPanel provisions a virtual env and shows an "Enter to the
virtual environment" command for the next steps.

## 3. Install and build

In cPanel's Node app page, click **Run NPM Install** (this installs
`package.json` dependencies inside the app's virtual env).

Then open a Terminal (cPanel → Terminal, or SSH if enabled), run the
activation command cPanel gave you in step 2, `cd` into the app root, and run:

```
npm run build
```

This produces the `.next/` production build that `server.js` serves.

## 4. Start / restart

Back in **Setup Node.js App**, click **Restart**. The site should now be live
at the Application URL. Re-run `npm run build` and **Restart** again after
every future deploy (e.g. after `git pull`).

## Notes

- Don't set `output: "standalone"` in `next.config.ts` — it's incompatible
  with a custom `server.js` (see Next.js custom-server docs).
- `PORT` is injected by Passenger automatically; don't hardcode or override it.
- Stellar is entry-level shared hosting — fine for a low/moderate-traffic
  marketing site, but there's no autoscaling. Watch cPanel's resource-usage
  panel if traffic grows.
- Later stages (contact form persistence, auth) are planned to use MariaDB —
  create the database and user under cPanel → **MySQL® Databases**, then pass
  the connection details to the app as environment variables in the same
  Setup Node.js App page.
