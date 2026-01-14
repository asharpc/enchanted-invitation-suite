# Cloudflare Pages Deployment Fix

## 🚨 CRITICAL FIX REQUIRED

The error `Authentication error [code: 10000]` happens because your Cloudflare Pages configuration has a **Deploy Command** set, which is trying to run `wrangler pages deploy` *inside* the Cloudflare build system.

**This is redundant and incorrect.** Cloudflare Pages automatically deploys your `dist` folder after the build. You do not need to manually deploy it.

### 🛠️ How to Fix (Immediate Action)

1.  **Log in to Cloudflare Dashboard**: [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
2.  Go to **Workers & Pages** -> **Pages**.
3.  Select your project: `enchanted-invitation-suite`.
4.  Go to **Settings** -> **Builds & deployments**.
5.  Click **Edit configuration**.
6.  **Build command**: Ensure it is set to `npm run build` (or `bun run build`).
7.  **Build output directory**: Ensure it is set to `dist`.
8.  **Deploy command**: **⚠️ CLEAR THIS FIELD ⚠️**. It must be empty.
    *   *Current value causing error:* `npx wrangler pages deploy`
    *   *New value:* (Empty)
9.  Click **Save**.

### 🔄 verification

After saving, go to the **Deployments** tab and **Retry deployment** on the failed build.

It should now:
1.  Initialize build environment.
2.  Run `npm run build` (or `bun run build`).
3.  Complete the build.
4.  **Automatically upload** the `dist` folder without running a separate deploy command.

### 📝 Note on `package.json`

Your `package.json` has a script `"pages:deploy": "npm run build && wrangler pages deploy dist"`. This is intended for **local** deployment from your computer, NOT for the Cloudflare Pages automated build system.

By clearing the "Deploy command" in the dashboard, you let Cloudflare handle the deployment natively.
