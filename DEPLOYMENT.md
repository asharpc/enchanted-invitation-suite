# Cloudflare Pages Deployment Guide

This guide will help you deploy your Nikah invitation website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier is sufficient)
- Node.js 18+ installed locally
- Git installed (for Method 3)

## Quick Start - Recommended Method

The fastest way to deploy is using the Wrangler CLI:

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open your browser to authenticate with Cloudflare.

### Step 3: Deploy

```bash
npm run pages:deploy
```

This command will:
1. Build your project (`npm run build`)
2. Upload the `dist` folder to Cloudflare Pages
3. Provide you with a live URL

Your site will be live at: `https://enchanted-invitation-suite.pages.dev`

## Alternative Methods

### Method 2: Manual Upload via Dashboard

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Go to Cloudflare Dashboard:**
   - Visit https://dash.cloudflare.com/
   - Navigate to "Workers & Pages" → "Pages"
   - Click "Create a project" → "Upload assets"

3. **Upload the dist folder:**
   - Select all files from the `dist` folder
   - Upload and deploy

### Method 3: Git Integration (Auto-Deploy)

This method enables automatic deployments on every git push.

1. **Push your code to GitHub/GitLab:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Workers & Pages" → "Pages"
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Authorize Cloudflare to access your repo

3. **Configure build settings:**
   ```
   Framework preset: None (or Vite if available)
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

4. **Environment variables (optional):**
   - Node version: `18` (add as `NODE_VERSION`)

5. **Save and Deploy**

Your site will now auto-deploy on every push to your main branch.

## Custom Domain Setup

To use your own domain:

1. **Go to your Cloudflare Pages project**
2. **Navigate to "Custom domains"**
3. **Click "Set up a custom domain"**
4. **Enter your domain** (e.g., `rifha-lihan-nikah.com`)
5. **Follow the DNS setup instructions**

For domains already on Cloudflare:
- DNS records are added automatically
- SSL/TLS is configured automatically

For external domains:
- Add the provided CNAME record to your DNS provider
- Wait for DNS propagation (up to 48 hours)

## Build Configuration

The project is configured with:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Framework**: Vite + React + TypeScript
- **Node version**: 18 (specified in `.node-version`)

## Important Files for Deployment

1. **`wrangler.toml`** - Cloudflare configuration
2. **`public/_redirects`** - SPA routing (handles all routes → index.html)
3. **`.node-version`** - Ensures correct Node.js version
4. **`package.json`** - Contains deployment scripts

## Troubleshooting

### Build Fails

**Error: "Outdated lockfile version" or "bun.lockb" errors**

This happens when Cloudflare detects a `bun.lockb` file and tries to use Bun instead of npm.

**Solution:**
1. Delete `bun.lockb` file:
   ```bash
   rm -f bun.lockb
   ```
2. Ensure `package-lock.json` exists:
   ```bash
   npm install
   ```
3. Add to `.gitignore`:
   ```
   bun.lockb
   ```
4. Commit and push changes

The project is configured to use npm via `package.json` → `"packageManager": "npm@10.9.2"`

**Error: Node version mismatch**
- Ensure `.node-version` or `.nvmrc` file exists with `18`
- Or set `NODE_VERSION=18` in Cloudflare environment variables

**Error: Module not found**
```bash
# Locally test the build
npm run build
npm run preview
```

### Routes Don't Work (404 errors)

- Verify `public/_redirects` file exists with:
  ```
  /*    /index.html   200
  ```

### Fonts Not Loading

- Ensure Google Fonts are imported in `src/index.css`
- Check browser console for CORS errors
- Cloudflare automatically handles CDN caching for fonts

### Animations Not Smooth

- Cloudflare Pages includes automatic asset optimization
- Enable "Auto Minify" in Cloudflare dashboard for better performance
- CSS/JS/HTML minification is automatic

## Performance Optimization

Cloudflare Pages automatically provides:

- ✅ Global CDN distribution
- ✅ HTTP/3 and QUIC support
- ✅ Automatic SSL/TLS certificates
- ✅ DDoS protection
- ✅ Asset optimization and minification
- ✅ Brotli compression
- ✅ Smart caching

## Monitoring & Analytics

1. **Go to your Pages project dashboard**
2. **Enable "Web Analytics"** (free, privacy-friendly)
3. **View deployment history** under "Deployments" tab
4. **Check build logs** for any issues

## Rollback a Deployment

If something goes wrong:

1. Go to "Deployments" tab
2. Find the previous working deployment
3. Click the three dots → "Rollback to this deployment"

## Cost

Cloudflare Pages Free Tier includes:
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ 500 builds per month
- ✅ 1 build at a time
- ✅ Free SSL/TLS certificates

Perfect for wedding invitations!

## Support

For issues:
- [Cloudflare Community](https://community.cloudflare.com/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler Docs](https://developers.cloudflare.com/workers/wrangler/)

---

**Your invitation will be live within minutes!** 🎉

Example URL: `https://enchanted-invitation-suite.pages.dev`
