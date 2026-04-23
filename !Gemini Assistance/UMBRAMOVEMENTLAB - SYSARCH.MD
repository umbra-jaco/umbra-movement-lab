markdown_content = r"""# SYSTEM ARCHITECTURE & DEPLOYMENT MANIFEST
**Project:** UMBRA Movement Lab
**Framework:** Next.js (via OpenNext Edge Adapter)
**Infrastructure:** Cloudflare Workers + R2 Storage
**Source of Truth:** GitHub (`orion` branch)

---

## I. DNS & Routing Structure
Your routing is handled natively by Cloudflare's internal Worker ecosystem. Traffic does not point to an IP address; it points directly to the execution environment.

* **Apex Domain:** `umbramovementlab.com`
* **Routing Method:** Cloudflare Worker Record
* **DNS State:** Managed entirely by the **Custom Domains** tab inside your Cloudflare Worker project settings. 
* *Note: Do not manually create A or CNAME records for the apex domain pointing elsewhere. The auto-generated Worker Record handles the proxy.*

---

## II. Cloudflare Dashboard Configuration
Because you are using **OpenNext** (`@opennextjs/cloudflare`), the build process is highly specialized.

### 1. Build & Deploy Settings (Settings > Builds & Deployments)
* **Framework preset:** `None`
* **Build command:** `npx @opennextjs/cloudflare`
* **Deploy command:** `npx wrangler deploy`
* **Root directory:** `/`
* **Production branch:** `orion`
* *(Note: Output directory is NOT defined here; it is defined in the `wrangler.jsonc` file).*

### 2. Environment Variables (Settings > Variables and Secrets)
* **`NEXT_PUBLIC_R2_BUCKET_URL`**: `https://pub-5b491b0971a14ab8bbdaeec81e49179f.r2.dev` 
*(This allows the frontend to fetch client-side images).*

### 3. Server-Side Caching (Settings > Bindings)
Next.js 15+ server-side logic requires an Incremental Cache. OpenNext uses your R2 bucket for this.
* **Binding Type:** R2 Bucket
* **Variable name:** `NEXT_INC_CACHE_R2_BUCKET`
* **R2 bucket:** `umbra-assets`

### 4. Compatibility (Settings > Runtime)
* **Compatibility flags:** `nodejs_compat` 
*(Required for OpenNext to execute standard Node functionality on the Edge).*

---

## III. Critical Code Manifest
These files dictate how the Cloudflare Edge reads your repository. They must remain exactly as formatted below.

### `wrangler.jsonc`
*Purpose: Maps the build output to the Worker execution environment.*