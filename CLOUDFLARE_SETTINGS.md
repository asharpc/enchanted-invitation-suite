# Cloudflare Pages Dashboard Settings

## ⚠️ IMPORTANT: Update Your Build Settings

Your Cloudflare Pages project is currently misconfigured. You need to update the settings in the dashboard.

### Current (WRONG) Settings:
- ❌ Build command: `bun run build`
- ❌ Deploy command: `npx wrangler deploy`
- ❌ Node version: 18

### Correct Settings:

Go to your Cloudflare Pages project:
1. Navigate to: **Settings** → **Builds & deployments**
2. Click **Edit configuration** or **Configure build command**

#### Production Branch Settings:
```
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: / (leave default)
Environment variables:
  - NODE_VERSION = 20
  - NPM_VERSION = 10.9.2
```

#### Branch Deploy Settings (Optional):
```
Build command: npm run build
```

### Step-by-Step Instructions:

1. **Go to Cloudflare Dashboard:**
   - Visit https://dash.cloudflare.com/
   - Navigate to **Workers & Pages** → **Pages**
   - Select your project: `enchanted-invitation-suite`

2. **Update Build Settings:**
   - Click on **Settings** tab
   - Scroll to **Build configuration**
   - Click **Edit configuration**

3. **Set the following:**
   - **Framework preset**: None (or Vite if available)
   - **Build command**: `npm run build` (NOT `bun run build`)
   - **Build output directory**: `dist`
   - **Root directory**: `/` (default)

4. **Add Environment Variables:**
   - Scroll to **Environment variables (advanced)**
   - Click **Add variable**
   - Add:
     - Variable name: `NODE_VERSION`
     - Value: `20`
   - Click **Add variable** again
   - Add:
     - Variable name: `NPM_VERSION`
     - Value: `10.9.2`

5. **Remove Deploy Command:**
   - If there's a "Deploy command" field showing `npx wrangler deploy`, **remove it**
   - Deploy commands are only needed for Workers, not Pages
   - Cloudflare Pages automatically deploys after the build completes

6. **Save Changes:**
   - Click **Save**

7. **Retry Deployment:**
   - Go to **Deployments** tab
   - Click **Retry deployment** on the latest failed deployment
   - OR push a new commit to trigger a fresh deployment

### Why These Changes Are Needed:

1. **`bun run build` → `npm run build`**
   - Your project uses npm, not bun
   - The `bun.lockb` file was deleted
   - `package.json` specifies `"packageManager": "npm@10.9.2"`

2. **Node 18 → Node 20**
   - Wrangler (Cloudflare CLI) requires Node.js 20+
   - Even though your app works on Node 18, the deployment tools need Node 20

3. **Remove `npx wrangler deploy`**
   - This command is for Cloudflare Workers, not Pages
   - Pages automatically handles deployment after build
   - Having this command causes the "Wrangler requires Node 20" error

### Expected Build Output:

After the changes, you should see:
```
✓ 2064 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   1.17 kB │ gzip:   0.51 kB
dist/assets/index-Cp-i5iyp.css   65.39 kB │ gzip:  11.67 kB
dist/assets/index-BLIbkq9V.js   464.26 kB │ gzip: 146.62 kB
✓ built in 6.09s
Success: Build command completed
Deploying to Cloudflare Pages...
Success: Deployed to https://enchanted-invitation-suite.pages.dev
```

### Alternative: Deploy via CLI Instead

If you prefer to deploy via Wrangler CLI locally (bypassing the dashboard build):

```bash
# Make sure you have Node 20+ locally
node -v  # Should show v20.x.x

# If not, install Node 20:
# Using nvm: nvm install 20 && nvm use 20
# Or download from: https://nodejs.org/

# Install dependencies
npm install

# Build locally
npm run build

# Deploy using Wrangler
npm install -g wrangler
wrangler login
wrangler pages deploy dist --project-name=enchanted-invitation-suite
```

This uploads the pre-built files directly, avoiding the build configuration issues.

---

**After making these changes, your deployment should succeed!** ✅
